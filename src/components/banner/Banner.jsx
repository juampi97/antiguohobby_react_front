import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Banner = ({title, subtitle}) => {


  return (
    <>
      <Stack direction='column' spacing={2} textAlign={"center"}>
        <Typography variant="h1" style={{ fontWeight: 500, color:'#1c1b19' }}>{title}</Typography>
        <Typography variant="h2" style={{ fontWeight: 300, color:'#1c1b19' }}>{subtitle}</Typography>
      </Stack>
    </>
  );
};

export default Banner;
