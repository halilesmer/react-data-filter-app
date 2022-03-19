import * as React from "react";
import SelectsInFilter from "./SelectsInFilter";
import ResetButton from "./ResetButton";
import Cards from "./ProductCard";

const FilterBar = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <div className="row my-5">
            <div className="col">
              <h4 className="border-bottom">Filters</h4>
            </div>

            <ResetButton />

            <SelectsInFilter />
          </div>
        </div>
        <Cards />
      </div>
    </div>
  );
};

export default FilterBar;
