import { useState, useEffect, useRef  } from "react";
import { Container, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

import FilterBarLg from "../components/productos/FilterBarLg";
import FilterBarXs from "../components/productos/FilterBarXs";
import ProductosListContainer from "../components/productos/ProductsListContainer";

const Productos = () => {
  const baseUrl = "http://localhost:8080";

  const [token, setToken] = useState(null);
  const [datos, setDatos] = useState([]);
  const [data, setData] = useState([]);
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategoriesXs, setSelectedCategoriesXs] = useState("");
  const [selectedCategoriesLg, setSelectedCategoriesLg] = useState([]);

  // Obtener Token
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const res = await fetch(`${baseUrl}/oauth/token`);
        const result = await res.json();
        setToken(result.access_token);
      } catch (error) {
        console.error("Error obteniendo el token:", error);
      }
    };

    fetchToken();
  }, []);

  // Obtener Productos
  useEffect(() => {
    if (!token) return;

    const fetchData = async () => {
      try {
        let offset = 0;
        let datos = [];
        let more_items = true;

        while (more_items) {
          const res = await fetch(
            `${baseUrl}/sites/MLA/user/30536750/offset/${offset}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const result = await res.json();

          datos = [...datos, ...result.results];

          if (offset + 50 >= result.paging.total) {
            more_items = false;
          } else {
            offset += 50;
          }
        }
        setDatos(datos);
      } catch (error) {
        console.error("Error obteniendo los productos:", error);
      }
    };

    fetchData();
  }, [token]);

  // Obtener categorías
  useEffect(() => {
    if (datos.length === 0) return;

    const fetchCategories = async () => {
      setLoading(true);

      try {
        // Obtener categorías únicas
        const categoryIds = [...new Set(datos.map((item) => item.category_id))];

        // Hacer todas las solicitudes de categorías en paralelo
        const categoryRequests = categoryIds.map(async (categoryId) => {
          try {
            const res = await fetch(`${baseUrl}/categories/${categoryId}`, {
              headers: { Authorization: `Bearer ${token}` },
            });
            const result = await res.json();
            return { id: categoryId, name: result.name || "Sin categoría" };
          } catch (error) {
            console.error(
              `Error obteniendo la categoría ${categoryId}:`,
              error
            );
            return { id: categoryId, name: "Error al obtener categoría" };
          }
        });

        // Resolver todas las solicitudes en paralelo
        const categories = await Promise.all(categoryRequests);

        // Crear un diccionario para buscar categorías más rápido
        const categoryMap = categories.reduce((acc, category) => {
          acc[category.id] = category.name;
          return acc;
        }, {});

        // Mapear los productos con sus categorías
        const products = datos.map((item, index) => ({
          id: index,
          title: item.title,
          category_id: item.category_id,
          category: categoryMap[item.category_id] || "Desconocido",
          price: item.price,
          thumbnail: item.thumbnail,
        }));

        setData(products);
        setLoading(false);
      } catch (error) {
        console.error("Error procesando categorías:", error);
        setLoading(false);
      }
    };

    fetchCategories();
  }, [datos]);

  // Crear item data
  useEffect(() => {
    if (data.length === 0) return;

    let categorias = [];

    data.forEach((item) => {
      if (!categorias.includes(item.category)) {
        categorias.push(item.category);
      }
    });
    categorias.sort();
    setCategories(categorias);
    setProductos(data)
  }, [data]);

  //Aplicar filtro de productos
  const prevXs = useRef(null);
  const prevLg = useRef(null);

  useEffect(() => {
    let filteredData
    // Cambio en selectedCategoriesXs
    if (prevXs.current !== selectedCategoriesXs) {
      filteredData = data.filter((item) => item.category == selectedCategoriesXs) 
    }
    
    // Cambio en selectedCategoriesLg
    if (prevLg.current !== selectedCategoriesLg) {
      filteredData = data.filter((item) =>
        selectedCategoriesLg.length > 0
          ? selectedCategoriesLg.includes(item.category)
          : true
      );
    }

    // Actualizo variable productos
    if(selectedCategoriesLg.length == 0 && selectedCategoriesXs == ""){
      setProductos(data)
    } else {
      setProductos(filteredData)
    }

    // Actualizamos las referencias
    prevXs.current = selectedCategoriesXs;
    prevLg.current = selectedCategoriesLg;
  }, [selectedCategoriesXs, selectedCategoriesLg]);

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "80px",
          padding: 0,
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
          }}
        >
          {!loading && categories ? (
            <FilterBarXs categories={categories} selectedCategoriesXs={selectedCategoriesXs} setSelectedCategoriesXs={setSelectedCategoriesXs} />
          ) : null}
          {!loading && categories ? (
            <FilterBarLg categories={categories} selectedCategoriesLg={selectedCategoriesLg} setSelectedCategoriesLg={setSelectedCategoriesLg}/>
          ) : null}
          <ProductosListContainer
            productos={productos}
            loading={loading}
            categories={categories}
          />
        </Box>
      </Container>
    </>
  );
};

export default Productos;
