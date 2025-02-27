import React from "react";
import { Container, Box } from "@mui/material";
import BannerContainer from "../components/banner/BannerContainer";
const Impresion = () => {
  const sourceImg = "/images/impresion/fondo_1.jpg";
  const heighBanner = "100vh";
  const title = "IMPRESION";
  const subtitle = "Da forma a tu imaginacion";
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
    </>
  );
};

export default Impresion;
