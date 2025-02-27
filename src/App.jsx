import { Routes, Route } from "react-router-dom";

import { Container } from "@mui/material";
import DraftsIcon from "@mui/icons-material/Drafts";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Disenio from "./pages/Disenio";
import Impresion from "./pages/Impresion";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";

function App() {
  const navArrayLink = [
    { title: "INICIO", path: "/" },
    { title: "PRODUCTOS", path: "/productos" },
    { title: "DISEÑOS", path: "/design" },
    { title: "IMPRESIONES", path: "impresiones" },
    { title: "CONTACTO", path: "/contacto", icon: <DraftsIcon /> },
  ];

  return (
    <>
      <Navbar navArrayLink={navArrayLink} />
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "100vw",
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          mx: "0px !important",
          padding: "0px !important",
          overflow: "hidden",
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/design" element={<Disenio />} />
          <Route path="/impresiones" element={<Impresion />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Container>
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          mx: "0px",
          padding: "0px !important",
        }}
      >
        <Footer />
      </Container>
    </>
  );
}

export default App;
