import { React, useState } from "react";
import { Container, Box, Typography, Paper } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const FilterBarXs = ({ categories , selectedCategoriesXs, setSelectedCategoriesXs }) => {
  
  const handleChange = (event) => {
    setSelectedCategoriesXs(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: { xs: "flex", lg: "none" },
        flexDirection: "column",
        padding: 2,
      }}
    >
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Categorias</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={selectedCategoriesXs}
          label="Categorias"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories.map((categorie) => (
            <MenuItem key={categorie} value={categorie}>
              {categorie}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterBarXs;
