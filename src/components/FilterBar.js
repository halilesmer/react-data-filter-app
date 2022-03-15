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
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  const [variant, setVariant] = useState('outlined')

  useEffect(() => {
 onFilter(brand, gender, color, category);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [brand, gender, color, category]);
  /*   const handleInput = (field) => (event) => {
    const { value } = event.target;
    setBrand(field === "brand" ? value.toLowerCase() : brand);
    setGender(field === "gender" ? value.toLowerCase() : gender);

    const brandForOnfilter = field === "brand" ? value.toLowerCase() : brand;
    const genderForOnfilter = field === "gender" ? value.toLowerCase() : gender;


    onFilter(brandForOnfilter, genderForOnfilter);
 

  }; */
 
  

  const filterBrandsInProductsData = [
    ...new Set(
      productJson && productJson.map((item) => item?.brand.toLowerCase())
    ),
  ];
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

  /* 
  console.log("printDataFilterBar: ", printData); 
 
  */
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
                    printData.length > 0
                      ? !filterBrandsInPrintData.includes(brand.toLowerCase())
                      : printData.length < 1 &&
                        !filterBrandsInProductsData.includes(
                          brand.toLowerCase()
                        )
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
                    printData.length > 0 &&
                    !filterCategoriesInPrintData.includes(
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
                    printData.length > 0 &&
                    !filterGendersInPrintData.includes(gender.toLowerCase())
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
                    printData.length > 0 &&
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
      {/*  <div className="col-sm-12 my-2">
        <label htmlFor="startDate">From</label>
        <input
          type="date"
          className="form-control"
          id="startDate"
          onChange={handleInput("from")}
        />
      </div>
      <div className="col-sm-12 my-2">
        <label htmlFor="endDate">To</label>
        <input
          type="date"
          className="form-control"
          id="endDate"
          onChange={handleInput("to")}
        />
      </div> */}
    </div>
  );
};

export default FilterBar;

/* -------- Color Select ----------- */

/*  <div className="col-sm-12 my-2">
         <label htmlFor="gender">All</label>
         <select
           className="form-control"
           id="gender"
           onChange={handleInput("color")}
         >
           <option value="">Select</option>
           {colors.map((color) => (
             <option value={color} key={color}>
               {color}
             </option>
           ))}
         </select>
       </div>; */

/* -------- Search Description ----------- */

/* <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          onChange={handleInput("description")}
        /> */

/*
                -------- Search Input- Brand ----------- 

        <label htmlFor="brand">Brand</label>
        <input
          type="text"
          className="form-control"
          id="brand"
          value={filters.brand}
          onChange={handleInput("brand")}
        />
        */

/*  <TextField
            fullWidth
            id="Brand"
            label="Brand"
            type="search"
            value={filters.brand}
            onChange={handleInput("brand")}
            margin="dense"
          /> */
