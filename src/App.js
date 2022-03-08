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

  const [printData, setPrintData] = useState([]);

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

  const generateBrandsDataForDropdown = () => {
    return [...new Set(brand?.map((item) => item?.brand))];
  };

  const generateGenderDataForDropdown = () => {
    return [...new Set(genderJson?.map((item) => item?.sex?.toUpperCase()))];
    /* if (printData.length <= 0) {
      return [...new Set(genderJson?.map((item) => item?.sex?.toUpperCase()))];
    } else {
      return [
        ...new Set(printData?.map((item) => item?.product_sex?.toUpperCase())),
      ];
    }
    */
  }; 

  const generateColorDataForDropdown = () => {
    /* return [...new Set(gender.map((item) => item.sex))]; */
    return printData.length <= 0
      ? [...new Set(allData?.map((item) => item?.primary_color?.toUpperCase()))]
      : [
          ...new Set(
            printData?.map((item) => item?.primary_color?.toUpperCase())
          ),
        ];
  };

  /* -------- Search Input Brand Function----------- */
  /* const handleFilterBrand = (brand) => {
    setSelectedBrand(brand);

    if (searchedGenderOutcome.length === 0 || brand === "all") {
      setSearchedBrandOutcome([]);

      return setSearchedBrandOutcome([
        ...allData.filter(
          (item) => item?.brand?.toLowerCase() === brand?.toLowerCase()
        ),
      ]);
    } else if (searchedGenderOutcome.length >= 1 && selectedGender === "all") {
      setSearchedBrandOutcome([]);

      return setSearchedBrandOutcome([
        ...printData.filter(
          (item) => item?.brand?.toLowerCase() === brand?.toLowerCase()
        ),
      ]);
    }

  }; */

  /* -------- Search Select Brand and Gender Function----------- */

  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedGender, setSelectedGender] = useState('');
 
  const handleFilter = (brand=selectedBrand, gender=selectedGender) => {
    setSelectedBrand(brand);
    setSelectedGender(gender);

    const resultProducts = allData.filter(
      (item) =>
      (brand === "all" ||
      brand === "" ||
      item.brand.toLowerCase() === brand.toLowerCase()) &&
      (gender === "all" ||
      gender === "" ||
      item.product_sex.toLowerCase() === gender.toLowerCase())
      );
      setPrintData([...resultProducts]);

    console.log(
      "brand",
      brand,
      "gender: ",
      gender,
      "resultProducts",
      resultProducts,
      "data",
      printData
    );

  };

    console.log("selectedBrand: ", selectedBrand);
    console.log("printData: ", printData);

  return (

    
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <FilterBar
            brands={generateBrandsDataForDropdown()}
            genders={generateGenderDataForDropdown()}
            // colors={generateColorDataForDropdown()}
            // onBrandFilter={handleFilterBrand}
            // onDescriptionFilter={handleFilterDescription}
            //onColorsFilter={handleFilterColors}
            onFilter={handleFilter}
            //data={allData}
            /*  onDateFilter={handleFilterDate} */
          />
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            {printData.length === 0
              ? allData &&
                allData.map((item, index) => (
                  <PersonItem item={item} key={index} />
                ))
              : printData &&
                printData.map((item, index) => (
                  <PersonItem item={item} key={index} />
                ))}
          </div>
        </div>
      </div>
      </div>

  );
}

export default App;
