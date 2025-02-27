import React from "react";
import { Box, Container } from "@mui/material";
import BannerContainer from "../components/banner/BannerContainer";
import OpcionesContacto from "../components/contacto/OpcionesContacto";
import ContactForm from "../components/contacto/ContactForm";

const Contacto = () => {
  const sourceImg = "/images/contacto/main.jpg";
  const heighBanner = "60vh";
  const title = "CANALES DE ATENCIÓN";
  const subtitle = "";

  const contactoData = [
    {
      title: "Contactanos",
      description:
        "Podes escribirnos por medio del formulario de contacto, mail o whatsapp. Nos comunicaremos a la brevedad.",
    },
    {
      title: "Videollamadas",
      description:
        "Podemos coordinar una videollamada para analisis de proyectos y responder dudas.",
    },
    { title: "Ubicacion", description: "Victor Bassi 424, Haedo" },
    { title: "Horario", description: "Lunes a viernes de 9 a 18 hs." },
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
                // minHeight: "40vh",
                display: "flex",
                flexDirection: "column",
                justifyItems:'start',
                alignItems:'center',
                mx: "0px !important",
                padding: "0px !important",
                overflow: "hidden"
              }}
      >
        <OpcionesContacto contactoData={contactoData} />
      </Container>
      <Container
        maxWidth={false}
        sx={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          mx: '0px !important',
          padding: '0px !important',
          overflow: 'hidden',
          backgroundColor: "#e5e5e5"
        }}
      >
        <ContactForm />
      </Container>
    </>
  );
};

export default Contacto;