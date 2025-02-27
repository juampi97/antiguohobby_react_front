import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import styled from '@emotion/styled'

import {AppBar,Button,Drawer,IconButton,Toolbar,Typography,Box,Container} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import NavListDrawer from "./NavListDrawer";

const Navbar = ( {navArrayLink} ) => {

  const Img = styled("img")({
    width:35,
    height:35,
    borderRadius: '25%',
    objectFit:"cover",
    objectPosition:"center"
  })

  const [open, setOpen] = useState(false);
  const [wrap, setWrap] = useState(true);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            size="large"
            sx={{display: { xs:"flex" , md:"none" }}}
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          
          <Container sx={{display: { xs:"flex" , md:"none" }}}>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              ANTIGUOHOBBY
            </Typography>
          </Container>

          <Container sx={{ display: { xs:"none" , md:"flex", alignItems:'center' }}}>
            <Img src='/images/logo.jpg' alt='Logo AH'></Img>
            <Typography variant="h6" sx={{ px:2 }}>
              ANTIGUOHOBBY
            </Typography>
          </Container>

        <Box sx={{display: { xs:"none" , md:"flex" }}}>
          {navArrayLink.map((item) => (
            <Button color="inherit" key={item.path} component={NavLink} to={item.path}>
              <Typography variant="inherit" noWrap={wrap} >{item.title}</Typography>
            </Button>
          ))}
        </Box>

        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="left" sx={{display: { xs:"flex" , md:"none" } }} onClose={() => setOpen(false)}>
        <NavListDrawer navArrayLink={navArrayLink} setOpen={setOpen}/>
      </Drawer>
    </>
  );
};

export default Navbar;
