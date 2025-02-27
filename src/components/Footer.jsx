import React from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Grid from "@mui/material/Grid2";
import CopyrightIcon from "@mui/icons-material/Copyright";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => {
  const mh = "200px";
  const myMail = "5px";

  const Img = styled("img")({
    width: 50,
    height: 50,
    borderRadius: "25%",
    objectFit: "cover",
    objectPosition: "center",
  });

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          width: "100vw",
          padding: "0px !important",
          margin: "0px !important",
        }}
      >
        <Box sx={{ minHeight: `${mh}`, bgcolor: "#363432" }}>
          <Grid
            container
            spacing={{ xs: 1 }}
            sx={{
              minHeight: `${mh}`,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Grid
              size={{ xs: 10, lg: 2 }}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                paddingY: "20px",
              }}
            >
              <Img src="/images/logo.jpg" alt="Logo AH"></Img>
            </Grid>

            <Grid
              size={{ xs: 10, lg: 2 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Link
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=541162102695&text&type=phone_number&app_absent=0"
                underline="none"
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: "#fff",
                    paddingLeft: "10px",
                    paddingY: "5px",
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  +54 011 6210 2695
                </Typography>
              </Link>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <MailOutlineIcon sx={{ marginY: `${myMail}`, color: "#fff" }} />
                <Typography
                  variant="body1"
                  sx={{
                    color: "#fff",
                    paddingLeft: "10px",
                    paddingY: `${myMail}`,
                    textAlign: "center",
                    fontWeight: 500,
                  }}
                >
                  juampicalabro97@gmail.com
                </Typography>
              </Box>
            </Grid>

            <Grid
              size={{ xs: 10, lg: 2 }}
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                paddingY: "20px",
              }}
            >
              <Img src="/images/bandera.png" alt="Bandera Argentina"></Img>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            minHeight: "30px",
            bgcolor: "#1c1b19",
            paddingY: "5px",
          }}
        >
          <CopyrightIcon sx={{ color: "#fff" }} />
          <Typography
            variant="body2"
            display={{ xs: "none", xl: "inherit" }}
            sx={{ color: "#fff", paddingLeft: "10px" }}
          >
            2025 - Juan Pablo Calabro - Antiguohobby - Diseño web - CIUDAD
            AUTÓNOMA DE BUENOS AIRES
          </Typography>
          <Typography
            variant="body2"
            display={{ xs: "inherit", xl: "none" }}
            sx={{ color: "#fff", paddingLeft: "10px" }}
          >
            2025 - Antiguohobby - Diseño web - CABA
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Footer;
