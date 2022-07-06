import * as React from "react";
import { useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import { Select, FormControl, MenuItem, InputLabel, Box } from "@mui/material";

const SelectsInFilter = () => {
  const app = useContext(AppContext);
  const brand = app.brand;
  const gender = app.gender;
  const category = app.category;
  const color = app.color;

  useEffect(() => {
    app.onfilter(brand, gender, color, category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand, gender, color, category]);
 
  return ( 
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
              app.setBrand(e.target.value);
              app.setVariant("contained");
            }}
          >
            <MenuItem value="all">
              <em>All</em>
            </MenuItem>
            {app.generateBrandsDataForDropdown().map((brand, index) => (
              <MenuItem
                value={brand}
                key={index}
                disabled={
                  app.printData &&
                  (color === "" || color === "all") &&
                  (category === "" || category === "all") &&
                  (gender === "" || gender === "all")
                    ? false
                    : !app.filterBrandsInPrintData.includes(brand.toLowerCase())
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
              app.setCategory(e.target.value);
              app.setVariant("contained");
            }}
          >
            {
              <MenuItem value="all">
                <em>All</em>
              </MenuItem>
            }
            {app.generateCategoryDataForDropdown().map((category, index) => (
              <MenuItem
                value={category}
                key={index}
                disabled={
                  app.printData &&
                  (brand === "" || brand === "all") &&
                  (gender === "" || gender === "all") &&
                  (color === "" || color === "all")
                    ? false
                    : !app.filterCategoriesInPrintData.includes(
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
              app.setGender(e.target.value);
              app.setVariant("contained");
            }}
          >
            {
              <MenuItem value="all">
                <em>All</em>
              </MenuItem>
            }
            {app.generateGenderDataForDropdown().map((gender, index) => (
              <MenuItem
                value={gender}
                key={index}
                disabled={
                  app.printData &&
                  (brand === "" || brand === "all") &&
                  (category === "" || category === "all") &&
                  (color === "" || color === "all")
                    ? false
                    : !app.filterGendersInPrintData.includes(
                        gender.toLowerCase()
                      )
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
              app.setColor(e.target.value);
              app.setVariant("contained");
            }}
          >
            {
              <MenuItem value="all">
                <em>All</em>
              </MenuItem>
            }
            {app.generateColorDataForDropdown().map((color, index) => (
              <MenuItem
                value={color}
                key={index}
                disabled={
                  app.printData &&
                  (brand === "" || brand === "all") &&
                  (category === "" || category === "all") &&
                  (gender === "" || gender === "all")
                    ? false
                    : app.printData &&
                      !app.filterColorsInPrintData.includes(color.toLowerCase())
                }
              >
                {color}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </Box>
  );
};

export default SelectsInFilter;
