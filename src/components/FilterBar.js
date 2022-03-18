import * as React from "react";
import { useState, useEffect } from "react";
import { Select, FormControl, MenuItem, InputLabel, Box, Button, Stack } from "@mui/material";

const FilterBar = ({
  onFilter,
  brands,
  genders,
  colors,
  categories,
  productJson,
  printData,
}) => {
  const [brand, setBrand] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  

  const [variant, setVariant] = useState('outlined')

  useEffect(() => {
 onFilter(brand, gender, color, category);
 // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand, gender, color, category]);
  
 

  const filterBrandsInPrintData = [
    ...new Set(printData && printData.map((item) => item?.brand.toLowerCase())),
  ];

  const filterGendersInPrintData = [
    ...new Set(printData && printData.map((item) => item.product_sex)),
  ];
  const filterColorsInPrintData = [
    ...new Set(
      printData && printData.map((item) => item.primary_color.toLowerCase())
    ),
  ];
  const filterCategoriesInPrintData = [
    ...new Set(
      printData && printData.map((item) => item.sub_category.toLowerCase())
    ),
  ];

  
  
  
  const reset = () => {
  setBrand('');
  setGender('');
  setColor('');
    setCategory('');
    setVariant("outlined");
}
  

  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>
      {variant === "contained" && (
        <Stack spacing={2} direction="row">
          <Button variant={variant} onClick={reset} color={"warning"}>
            Reset
          </Button>
        </Stack>
      )}
      <Box sx={{ minWidth: 130 }}>
        {/* -------- brand select ----------- */}
        <div className="col-sm-12 my-2">
          <FormControl margin="dense" fullWidth>
            <InputLabel id="brand-select">Brand</InputLabel>
            <Select
              defaultValue={"all"}
              displayEmpty
              labelId="brand-select"
              id="brand"
              label="Brand"
              value={brand}
              onChange={(e) => {
                setBrand(e.target.value);
                setVariant("contained");
              }}
            >
              <MenuItem value="all">
                <em>All</em>
              </MenuItem>
              {brands.map((brand, index) => (
                <MenuItem
                  value={brand}
                  key={index}
                  disabled={
                    printData &&
                    (color === "" || color === "all") &&
                    (category === "" || category === "all") &&
                    (gender === "" || gender === "all")
                      ? false
                      : !filterBrandsInPrintData.includes(brand.toLowerCase())
                  }

              
                >
                  {brand}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        {/* -------- Category Select ----------- */}
        <div className="col-sm-12 my-2">
          <FormControl margin="dense" fullWidth>
            <InputLabel id="category-select">Category</InputLabel>
            <Select
              labelId="category-select"
              id="category"
              defaultValue={"all"}
              label="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                setVariant("contained");
              }}
            >
              {
                <MenuItem value="all">
                  <em>All</em>
                </MenuItem>
              }
              {categories.map((category, index) => (
                <MenuItem
                  value={category}
                  key={index}
                  disabled={
                    printData &&
                    (brand === "" || brand === "all") &&
                    (gender === "" || gender === "all") &&
                    (color === "" || color === "all")
                      ? false
                      : !filterCategoriesInPrintData.includes(
                          category.toLowerCase()
                        )
                  }
                >
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        {/* -------- Gender  Select ----------- */}
        <div className="col-sm-12 my-2">
          <FormControl margin="dense" fullWidth>
            <InputLabel id="gender-select">Gender</InputLabel>
            <Select
              labelId="gender-select"
              id="gender"
              defaultValue={"all"}
              label="Gender"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
                setVariant("contained");
              }}
            >
              {
                <MenuItem value="all">
                  <em>All</em>
                </MenuItem>
              }
              {genders.map((gender, index) => (
                <MenuItem
                  value={gender}
                  key={index}
                  disabled={
                    printData &&
                    (brand === "" || brand === "all") &&
                    (category === "" || category === "all") &&
                    (color === "" || color === "all")
                      ? false
                      : !filterGendersInPrintData.includes(gender.toLowerCase())
                  }
                >
                  {gender}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* -------- Color Select ----------- */}
        <div className="col-sm-12 my-2">
          <FormControl margin="dense" fullWidth>
            <InputLabel id="color-select">Color</InputLabel>
            <Select
              labelId="color-select"
              id="color"
              defaultValue={"all"}
              label="Color"
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
                setVariant("contained");
              }}
            >
              {
                <MenuItem value="all">
                  <em>All</em>
                </MenuItem>
              }
              {colors.map((color, index) => (
                <MenuItem
                  value={color}
                  key={index}
                  disabled={
                    printData &&
                    (brand === "" || brand === "all") &&
                    (category === "" || category === "all") &&
                    (gender === "" || gender === "all")
                      ? false
                      : printData &&
                        !filterColorsInPrintData.includes(color.toLowerCase())
                  }
                >
                  {color}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Box>

    </div>
  );
};

export default FilterBar;




