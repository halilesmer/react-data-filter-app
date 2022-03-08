import * as React from "react";
import { useState } from "react";
import { Select, FormControl, MenuItem, InputLabel, Box } from "@mui/material";

const FilterBar = ({
  genders,
  onFilter,
  /* onDescriptionFilter, */

  /* onGenderFilter,
  onColorsFilter, */
  brands,
  /* data, */
  /* onDateFilter, */
}) => {
  /* const [filters, setFilters] = useState({
    brand: "",
    gender: "",
    color: "",
  }); */
  const [brand, setBrand] = useState('');
  console.log('brand: ', brand);
  const [gender, setGender] = useState('');
  console.log('gender: ', gender);
  



  const handleInput = (field) => (event) => {

    //const { brand, gender } = filters;
    const { value } = event.target;
    setBrand(field === "brand" ? value.toLowerCase() : brand);
    setGender(field === "gender" ? value.toLowerCase() : gender);

   const brand2 = field === "brand" ? value.toLowerCase() : brand;
    const gender2 = field === "gender" ? value.toLowerCase() : gender;

    /*   setFilters({
      ...filters,
      [field]: value,
    }); */

    onFilter(brand2, gender2);

    /* switch (field) {
      case "brand"|| 'gender':
        onFilter(brand, gender);
        break;
        default:
          break;
        } */
  };

  return (
    <div className="row my-5">
      <div className="col">
        <h4 className="border-bottom">Filters</h4>
      </div>
      <div className="col-sm-12 my-2"></div>
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
              //value={filters.brand}
              onChange={handleInput("brand")}
            >
              <MenuItem value="all">All</MenuItem>
              {brands.map((brand) => (
                <MenuItem value={brand} key={brand}>
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
              // value={filters.gender}
              defaultValue={"all"}
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
        {/*   <div className="col-sm-12 my-2">
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
        </div>*/}
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
