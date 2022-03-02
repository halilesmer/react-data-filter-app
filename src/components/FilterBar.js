import { useState } from "react";
import * as React from "react";
import TextField from "@mui/material/TextField";


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


  






const FilterBar = ({
  genders,
  colors,
  onBrandFilter,
  onDescriptionFilter,
  onGenderFilter,
  onColorsFilter,
  brand,
  data,
  /* onDateFilter, */
}) => {
  const [selectedGender, setSelectedGender] = useState(null);

  
  
  const [filters, setFilters] = useState({
    brand: '',
    description: "",
    gender: "",
    color: "",
  });
  console.log('filters: ', filters.brand);

  const handleInput = (field) => (event) => {
    const { value } = event.target;
    setSelectedGender(value)
    console.log("valuehandleInput: ", value);

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "brand":
        onBrandFilter(value);
        break;
      case "description":
        onDescriptionFilter(value);
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
          <TextField
            id="Brand"
            label="Brand"
            type="search"
            fullWidth
            value={filters.brand}
            onChange={handleInput("brand")}
            margin="dense"
          />
        </div>
        {/* -------- Search Input- Description ----------- */}
        <div className="col-sm-12 my-2">
          <TextField
            id="description"
            label="Description"
            type="search"
            fullWidth
            onChange={handleInput("description")}
            margin="dense"
          />
        </div>
        {/* -------- Gender Input Select ----------- */}

        <div className="col-sm-12 my-2">
          <FormControl margin="dense" fullWidth>
            <InputLabel id="gender-select">Gender</InputLabel>
            <Select
              labelId="gender-select"
              id="gender"
              value={selectedGender}
              label="Gender"
              onChange={handleInput("gender")}
            >
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
              labelId="color-select"
              id="color"
              value={selectedGender}
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