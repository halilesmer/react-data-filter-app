import { useState } from "react";
import "./App.css";
import PersonItem from "./components/PersonItem";
//import { data } from "./MOCK_DATA";
import FilterBar from "./components/FilterBar";

import { productJson, genderJson, brandJson } from './db.js'





function App() {


  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const generateBrandsDataForDropdown = () => {
    return [...new Set(brandJson.data?.map((item) => item?.brand_name))];
  };

  const generateGenderDataForDropdown = () => {
    return [
      ...new Set(genderJson?.data.map((item) => item?.sex?.toUpperCase())),
    ];
  };


  /* -------- Search Select Brand and Gender Function----------- */

  const [printData, setPrintData] = useState([]);

  const handleFilter = (brand = selectedBrand, gender = selectedGender) => {
    setSelectedBrand(brand);

    setSelectedGender(gender);

    const resultProducts =
      productJson.data &&
      productJson.data
        .filter((obj) => {
          if (brand === "all") {
            return obj;
          }
          return brand !== ""
            ? obj.brand.toLowerCase() === brand.toLocaleLowerCase()
            : true;
        })
        .filter((obj) => {
          if (gender === "all") {
            return obj;
          }
          return gender !== ""
            ? obj.product_sex.toLowerCase() === gender.toLocaleLowerCase()
            : true;
        });
    setPrintData(resultProducts);

    console.log(
      "brand",
      brand,
      "gender: ",
      gender,
      "resultProducts",
      resultProducts,
  
    );
  };

  /* console.log('genders: ', generateGenderDataForDropdown()); 
  console.log("printData: ", printData);
  */

  

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <FilterBar
          productJson ={productJson.data}
            brands={generateBrandsDataForDropdown()}
            genders={generateGenderDataForDropdown()}
            onFilter={handleFilter}
          
            selectedBrand={selectedBrand}
            selectedGender={selectedGender}

            printData={printData}
            // colors={generateColorDataForDropdown()}
            // onBrandFilter={handleFilterBrand}
            // onDescriptionFilter={handleFilterDescription}
            //onColorsFilter={handleFilterColors}
            /*  onDateFilter={handleFilterDate} */
          />
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            
            
            {printData.length < 1 &&
              (selectedBrand !== "" || selectedGender !== "") && (
                <div>
                  <center>
                    <strong>No Result</strong>
                  </center>
                </div>
              )}
            
            {printData.length > 0
              ? printData.map((item, index) => (
                  <PersonItem item={item} key={index} />
                ))
              : (selectedBrand === "" || selectedGender === "") &&
                productJson.data &&
                productJson.data.map((item, index) => (
                  <PersonItem item={item} key={index} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
/*
                
                 (printData.length < 1 ||renderBrandsData.length < 1) && (selectedBrand !== '' && selectedGender !== '' ) && (
              <div>
                <center>
                  <strong>No Result</strong>
                </center>
              </div>
            )}
            { printData.length > 0 || renderBrandsData.length >0
              ? printData.map((item, index) => (
                  <PersonItem item={item} key={index} />
                ))
              : (selectedBrand === '' || selectedGender === '')  && productJson.data &&
                productJson.data.map((item, index) => (
                  <PersonItem item={item} key={index} />
                ))
                
                */
