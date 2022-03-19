import React, { useState, createContext } from "react";
import { productJson, genderJson } from "../db.js";

export const AppContext = createContext();

export function AppProvider(props) {
  const [brand, setBrand] = useState("");
  const [gender, setGender] = useState("");
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [variant, setVariant] = useState("outlined");
  const [printData, setPrintData] = useState([]);

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

  /* -------- Search Function for Selects----------- */

  const handleFilter = (brand, gender, color, category) => {
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
      resultProducts
    );
  };

    
  console.log('printData: ', printData);
    
    
  const filterBrandsInPrintData = [
    ...new Set(printData && printData.map((item) => item?.brand.toLowerCase())),
  ];

  const filterGendersInPrintData = [
    ...new Set(printData && printData.map((item) => item?.product_sex)),
  ];
  const filterColorsInPrintData = [
    ...new Set(
      printData && printData.map((item) => item?.primary_color.toLowerCase())
    ),
  ];
  const filterCategoriesInPrintData = [
    ...new Set(
      printData && printData.map((item) => item?.sub_category.toLowerCase())
    ),
  ];

  const reset = () => {
    setBrand("");
    setGender("");
    setColor("");
    setCategory("");
    setVariant("outlined");
  };

  const value = {
    reset,
    brand,
    setBrand,
    gender,
    setGender,
    category,
    setCategory,
    color,
    setColor,
    variant,
    setVariant,
    filterBrandsInPrintData,
    filterGendersInPrintData,
    filterColorsInPrintData,
    filterCategoriesInPrintData,
    printData,
    setPrintData,
    generateBrandsDataForDropdown,
    generateCategoryDataForDropdown,
    generateGenderDataForDropdown,
    generateColorDataForDropdown,
   onfilter: handleFilter,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
}
