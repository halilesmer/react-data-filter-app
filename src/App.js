import { useState } from "react";
import "./App.css";
import PersonItem from "./components/PersonItem";
//import { data } from "./MOCK_DATA";
import FilterBar from "./components/FilterBar";

import { productJson, genderJson} from './db.js'





function App() {

  const generateBrandsDataForDropdown = () => {
    /* return [...new Set(brandJson.data?.map((item) => item?.brand_name))]; */
   return [...new Set(productJson.data?.map((item) => item?.brand))];

   
  };

  const generateGenderDataForDropdown = () => {
    return [
      ...new Set(genderJson?.data.map((item) => item?.sex?.toUpperCase())),
    ];
  };
const generateColorDataForDropdown = () => {
  return [
    ...new Set(
      productJson?.data.map((item) => item?.primary_color?.toUpperCase())
    ),
  ];
};
  const generateCategoryDataForDropdown = () => {
    return [
      ...new Set(
        productJson?.data.map((item) => item?.sub_category?.toUpperCase())
      ),
    ];
  };

  /* -------- Search Select Brand and Gender Function----------- */

  const [printData, setPrintData] = useState([]);

  const handleFilter = (brand, gender, color, category ) => {

    const resultProducts = productJson.data
      .filter((obj) => {
        if (brand === "all") {
          return true;
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
      })
      .filter((obj) => {
        if (color === "all") {
          return obj;
        }
        return color !== ""
          ? obj.primary_color.toLowerCase() === color.toLocaleLowerCase()
          : true;
      })
      .filter((obj) => {
        if (category === "all") {
          return obj;
        }
        return category !== ""
          ? obj.sub_category.toLowerCase() === category.toLocaleLowerCase()
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
  


  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <FilterBar
            productJson={productJson.data}
            brands={generateBrandsDataForDropdown()}
            genders={generateGenderDataForDropdown()}
            colors={generateColorDataForDropdown()}
            categories={generateCategoryDataForDropdown()}
            onFilter={handleFilter}
            printData={printData}
          
          />
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            {!printData && (
              <div>
                <p style={{ width: "100px", margin: "0 auto" }}>
                  <strong>No Result</strong>
                </p>
              </div>
            )}
            {printData.map((item, index) => (
              <PersonItem item={item} key={index} />
            ))}

            {/*  {printData.length > 0
              ? printData.map((item, index) => (
                  <PersonItem item={item} key={index} />
                ))
              : productJson.data &&
                productJson.data.map((item, index) => (
                  <PersonItem item={item} key={index} />
                ))} */}
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
