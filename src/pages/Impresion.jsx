import React from "react";
import { Container, Box } from "@mui/material";
import BannerContainer from "../components/banner/BannerContainer";
import ComoTrabajamos from "../components/ComoTrabajamos/ComoTrabajamos";

const Impresion = () => {
  const sourceImg = "/images/impresion/fondo_1.jpg";
  const heighBanner = "75vh";
  const title = "IMPRESION";
  const subtitle = "Da forma a tu imaginacion";

  const texto1 = "La Impresión 3D es una tecnología innovadora que te permite crear un objeto físico a partir de un modelo digital."
  const texto2 = "Las dimensiones máximas de impresión son de 30 cm x 30 cm x 40 cm. En caso de necesitar una pieza de mayor tamaño la misma se puede imprimir por partes y luego unirse."
  const texto = [texto1,texto2]
  
  const pasos_trabajo = [
  {
    imagen: "/images/impresion/paso1.png",
    titulo: "Paso 1",
    descripcion:
      "Diseñas tu proyecto en cualquier software de diseño 3D, y lo exportás en formato .stl, te contactás con nosotros y nos enviás el archivo .stl por mail, o bien nos podemos encargar del diseño de tu pieza. Elegis el color y el material."
  },
  {
    imagen: "/images/impresion/paso2.png",
    titulo: "Paso 2",
    descripcion:
      "Comenzamos a imprimir tu proyecto."
  },
  {
    imagen: "/images/impresion/paso3.png",
    titulo: "Paso 3",
    descripcion:
      "Entrega en tiempo y forma estipulados. Te lo enviamos a domicilio o lo podés retirar por nuestro centro de impresión."
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
        <ComoTrabajamos texto={texto} pasos_trabajo={pasos_trabajo}/>
      </Container>
    </>
  );
};

export default Impresion;
