import React from "react";
import { Box, Typography } from "@mui/material";
import ComoTrabajamosCard from "./ComoTrabajamosCard"

const ComoTrabajamos = ({ texto, pasos_trabajo }) => {
  const texto1 = texto[0];
  const texto2 = texto.length == 2 ? texto[1] : null;

  return (
    <>
      <Box
        sx={{
          width: { xs: "90%", lg: "75%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          paddingY: { xs: "25px", md: "40px" },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: {
              xs: "2rem",
              md: "4rem",
              // lg: "4rem",
            },
            fontWeight: 700,
            letterSpacing: "1dvh",
            paddingBottom: "2rem",
          }}
        >
          COMO TRABAJAMOS
        </Typography>
        <Typography
          sx={{ textAlign: "center" }}
          variant={{ xs: "body2", md: "body1" }}
        >
          {texto1}
        </Typography>
      </Box>
      <Box sx={{
        display:"flex",
        flexDirection:{xs:"column" , md:"row"},
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
      }}>
        {pasos_trabajo.map((item) => (
          <ComoTrabajamosCard key={item.titulo} item={item}/>
        ))}
      </Box>
      <Box
        sx={{
          width: { xs: "90%", lg: "75%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          paddingY: { xs: "25px", md: "40px" },
        }}
      >
        {texto2 ? (
          <Typography
            sx={{ textAlign: "center" }}
            variant={{ xs: "body2", md: "body1" }}
          >
            {texto2}
          </Typography>
        ) : null}
      </Box>
    </>
  );
};

export default ComoTrabajamos;
