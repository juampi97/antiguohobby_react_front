import React from "react";
import { Container, Box } from "@mui/material";
import BannerContainer from "../components/banner/BannerContainer";

const Home = () => {
  const sourceImg = "/images/index/fondo_1.jpg";
  const heighBanner = "100vh";
  const title = "DISEÑO - IMPRESION 3D";
  const subtitle = "Soluciones a medida de tus necesidades";

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

export default Home;
