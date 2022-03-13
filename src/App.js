import { useEffect, useState } from "react";
import "./App.css";
import PersonItem from "./components/PersonItem";
//import { data } from "./MOCK_DATA";
import FilterBar from "./components/FilterBar";
import useFetch from "./useFetch";

function App() {
  const [allData, setAllData] = useState(null);

  const [genderJson, setGenderJson] = useState([]);
  const [brand, setBrand] = useState([]);
  

  const { get } = useFetch("http://localhost:3000/");

  /* -------------- Products Json -------------- */
  useEffect(() => {
    get("products_get_product_filter")
      .then((data) => {
        setAllData(data.data);
        setBrand(data.data);
      })
      .catch((error) => console.log("Could not load product details", error));
  }, []);

  /* -------------- Gender Json -------------- */
  useEffect(() => {
    get("common_get_gender")
      .then((data) => {
        setGenderJson(data.data);
      })
      .catch((error) => console.log("Could not load product details", error));
  }, []);
  /* -------------- Color Json -------------- */

  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedGender, setSelectedGender] = useState("");

  const generateBrandsDataForDropdown = () => {
    return [...new Set(brand?.map((item) => item?.brand))];
  };

  const generateGenderDataForDropdown = () => {
    return [
      ...new Set(genderJson?.map((item) => item?.sex?.toUpperCase())),
    ];
  };

  const generateColorDataForDropdown = () => {
    /* return [...new Set(gender.map((item) => item.sex))]; */

  };

  /* -------- Search Select Brand and Gender Function----------- */

  const [printData, setPrintData] = useState([]);

  const handleFilter = (brand = selectedBrand, gender = selectedGender) => {
    setSelectedBrand(brand);

    setSelectedGender(gender);

    const resultProducts =
      allData &&
      allData
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

  /*

  console.log("selectedBrrand: ", selectedBrand);
  console.log("selectedGender: ", selectedGender);
  
  */
  console.log("printData: ", printData);
  console.log("genderJson: ", genderJson);
  

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <FilterBar
            brands={generateBrandsDataForDropdown()}
            genders={generateGenderDataForDropdown()}
            onFilter={handleFilter}
          
            selectedBrand={selectedBrand}
            selectedGender={selectedGender}

            printData={printData}
            allData={allData}
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
                allData &&
                allData.map((item, index) => (
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
              : (selectedBrand === '' || selectedGender === '')  && allData &&
                allData.map((item, index) => (
                  <PersonItem item={item} key={index} />
                ))
                
                */
