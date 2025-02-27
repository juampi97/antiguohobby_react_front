import React from "react";
import { Container, Box } from "@mui/material";
import BannerContainer from "../components/banner/BannerContainer";
import ComoTrabajamos from "../components/ComoTrabajamos/ComoTrabajamos";

const Disenio = () => {
  const sourceImg = "/images/disenio/fondo_1.jpg";
  const heighBanner = "75vh";
  const title = "DISEÑO";
  const subtitle = "Diseños únicos, realidad tangible";

  const texto1 = "El diseño 3D es la herramienta que permite crear un modelo digital que será transformado en un objeto físico a través de la impresión 3D."
  const texto = [texto1]
    
  const pasos_trabajo = [
  {
    imagen: "/images/impresion/paso1.png",
    titulo: "Paso 1",
    descripcion:
      "Diseñas tu proyecto en cualquier software de diseño 3D, y lo exportás en formato .stl, te contactás con nosotros y nos enviás el archivo .stl por mail, o bien nos podemos encargar del diseño de tu pieza o idea. Elegis el color y el material."
  },
  {
    imagen: "/images/impresion/paso2.png",
    titulo: "Paso 2",
    descripcion:
      "Calculamos el costo y te enviamos el presupuesto. El precio varía según el tamaño, el peso, el tiempo de impresión, el material que elijas y la calidad del producto que quieras obtener como resultado."
  },
  {
    imagen: "/images/impresion/paso3.png",
    titulo: "Paso 3",
    descripcion:
      "Si estás de acuerdo con el presupuesto te enviamos bocetos para que nos confirmes el proyecto y comenzamos con las impresiones."
  }
];

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          mx: "0px !important",
          padding: "0px !important",
          overflow: "hidden",
        }}
      >
        <BannerContainer
          sourceImg={sourceImg}
          heighBanner={heighBanner}
          title={title}
          subtitle={subtitle}
        />
      </Container>
      <Container
              maxWidth={false} 
              sx={{
                width: "100vw",
                minHeight: "40vh",
                display: "flex",
                flexDirection: "column",
                justifyItems:'start',
                alignItems:'center',
                mx: "0px !important",
                padding: "0px !important",
                overflow: "hidden",
              }}
      >
        <ComoTrabajamos texto={texto} pasos_trabajo={pasos_trabajo} />
      </Container>
    </>
  );
};

export default Disenio;
