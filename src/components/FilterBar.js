import * as React from "react";
import { useState } from "react";
import {
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Box,
} from "@mui/material";


  






const FilterBar = ({
  genders,
  colors,
  onBrandFilter,
  onDescriptionFilter,

  onGenderFilter,
  onColorsFilter,
  brands,
  data,
  /* onDateFilter, */
}) => {
  const [selectedGender, setSelectedGender] = useState(null);

  
  
  const [filters, setFilters] = useState({
    brand: '',
    gender: "",
    color: "",
  });


  const handleInput = (field) => (event) => {
    const { value } = event.target;
   // setSelectedGender(value)


    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "brand":
        onBrandFilter(value);
        break;

      case "gender":
        onGenderFilter(value);
        break;
      case "color":
        onColorsFilter(value);
        break;
      /* case "from":
        onDateFilter(value, "from");
        break;
      case "to":
        break; */
      default:
        break;
    }
  };

  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>
      <div className="col-sm-12 my-2">
        {/*  <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={data}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
            
              label="Brand"
              variant="outlined"
            />
          )}
          getOptionLabel={(option) => option.brand}

        /> */}
      </div>
      {/* -------- Search Input- Brand ----------- */}
      <Box sx={{ minWidth: 130 }}>
        <div className="col-sm-12 my-2">
          <FormControl margin="dense" fullWidth>
            <InputLabel id="brand-select">Brand</InputLabel>
            <Select
              defaultValue={"all"}
              displayEmpty
              labelId="brand-select"
              id="brand"
              label="Brand"
              value={filters.brand}
              onChange={handleInput("brand")}
            >
              <MenuItem  value="all">
                All
              </MenuItem>
              {brands.map((brand) => (
                <MenuItem  value={brand} key={brand}>
                  {brand}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        {/* -------- Gender Input Select ----------- */}

        <div className="col-sm-12 my-2">
          <FormControl margin="dense" fullWidth>
            <InputLabel id="gender-select">Gender</InputLabel>
            <Select
              
              labelId="gender-select"
              id="gender"
              value={filters.gender}
              label="Gender"
              onChange={handleInput("gender")}
            >
              <MenuItem value="all">All</MenuItem>
              {genders.map((gender) => (
                <MenuItem value={gender} key={gender}>
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
              defaultValue={""}
              labelId="color-select"
              id="color"
              value={filters.color}
              label="Color"
              onChange={handleInput("color")}
            >
              {colors.map((color) => (
                <MenuItem value={color} key={color}>
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









  /* -------- Gender Select ----------- */

  /* <div className="col-sm-12 my-2">
        <label htmlFor="gender">Gender</label>
        <select
          className="form-control"
          id="gender"
          onChange={handleInput("gender")}
        >
          <option value="">All</option>
          {genders.map((gender) => (
            <option value={gender} key={gender}>
              {gender}
            </option>
          ))}
        </select>
      </div> */





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