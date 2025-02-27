import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  Paper,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Divider,
} from "@mui/material";

const FilterBarLg = ({ categories , selectedCategoriesLg , setSelectedCategoriesLg }) => {

  const handleChange = (event) => {
    const category = event.target.name;
    setSelectedCategoriesLg((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) // Si ya está, la quita
        : [...prev, category] // Si no está, la agrega
    );
  };

  return (
    <Paper
      sx={{
        width: "250px",
        height: "100%",
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        padding: 2,
      }}
    >
      <Typography variant="h6" sx={{ m: 2 }}>
        Categorías
      </Typography>
      <Divider variant="middle" component="div" />
      <FormGroup sx={{ m: 2 }}>
        {categories.map((category) => (
          <FormControlLabel
            key={category}
            control={
              <Checkbox
                checked={selectedCategoriesLg.includes(category)}
                onChange={handleChange}
                name={category}
              />
            }
            label={category}
          />
        ))}
      </FormGroup>
    </Paper>
  );
};

export default FilterBarLg;
