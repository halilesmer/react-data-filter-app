import { useState } from "react";

const FilterBar = ({
  genders,
  colors,
  onNameFilter,
  onDescriptionFilter,
  onGenderFilter,
  onColorsFilter,
  /* onDateFilter, */
}) => {
  const [filters, setFilters] = useState({
    name: "",
    description: "",
    gender: "",
    color: "",
  });

  const handleInput = (field) => (event) => {
    const { value } = event.target;

    setFilters({
      ...filters,
      [field]: value,
    });

    switch (field) {
      case "name":
        onNameFilter(value);
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
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={filters.name}
          onChange={handleInput("name")}
        />
      </div>

      <div className="col-sm-12 my-2">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          onChange={handleInput("description")}
        />
      </div>

      <div className="col-sm-12 my-2">
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
      </div>
      <div className="col-sm-12 my-2">
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
      </div>

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
