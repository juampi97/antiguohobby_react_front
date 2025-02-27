import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

const OpcionesContacto = ({contactoData}) => {

  return (
    <>
      <Grid container sx={{ width: "100%" }}>
        {contactoData.map((data, index) => (
          <Grid
            item
            size={{ xs: 12, md: 3 }}
            sx={{
              height: "250px",
              display:"flex",
              flexDirection:"column",
              justifyContent:"center",
              backgroundColor: index % 2 === 0 ? "#4dabf5" : "rgba(39, 39, 39, 0.9)"
            }}
          >
            <Box
            sx={{
                paddingX:"5%", 
                paddingY:"10%",
            }}
            >
              <Typography
                variant="h4"
                align="left"
                gutterBottom
                sx={{ color: index % 2 === 0 ? "black" : "white" }}
              >{data.title}</Typography>
              <Typography
                variant="p"
                align="left"
                gutterBottom
                sx={{ color: index % 2 === 0 ? "black" : "white" }}
              >{data.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default OpcionesContacto;
