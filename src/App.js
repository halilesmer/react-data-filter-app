import { useEffect, useState } from "react";

import "./App.css";
import PersonItem from "./components/PersonItem";
//import { data } from "./MOCK_DATA";
import FilterBar from "./components/FilterBar";
import useFetch from "./useFetch";

/* const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter); */

function App() {
  const [allData, setAllData] = useState(null);

  const [genderJson, setGenderJson] = useState([]);
  //const [colorJson, setColorJson] = useState([]);
  const [brand, setBrand] = useState([]);

  const [searchedBrandOutcome, setSearchedBrandOutcome] = useState([]);
  const [searchedGenderOutcome, setSearchedGenderOutcome] = useState([]);

  const [selectedBrand, setSelectedBrand] = useState("");

  const [selectedGender, setSelectedGender] = useState("");

  const [printData, setPrintData] = useState([]);

  /* const [mergeData, setMergeData] = useState([
    { ...searchedBrandOutcome },
    { ...searchedDescriptionOutcome },
  ]); */
  /* -------------- SetPrint --------------------------- */
  useEffect(() => {
    setPrintData([...searchedBrandOutcome, ...searchedGenderOutcome]);
    console.log("searchedGenderOutcome-1: ", searchedGenderOutcome);
  }, [searchedBrandOutcome, searchedGenderOutcome]);

  const { get } = useFetch("http://localhost:3000/");

  /* -------------- Products Json -------------- */
  useEffect(() => {
    get("products_get_product_filter")
      .then((data) => {
        setAllData(data.data);

        //setColorJson(data.data);
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
    /* return [...new Set(gender.map((item) => item.sex))]; */
    if (printData.length <= 0) {
      return [...new Set(genderJson?.map((item) => item?.sex?.toUpperCase()))];
    } else {
      return [
        ...new Set(printData?.map((item) => item?.product_sex?.toUpperCase())),
      ];
    }
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
  const handleFilterBrand = (brand) => {
    setSelectedBrand(brand);
    const filteredData =
      searchedGenderOutcome.length === 0 || brand === "all"
        ? allData.filter(
            (item) => item?.brand?.toLowerCase() === brand?.toLowerCase()
          )
        : printData.filter(
            (item) => item?.brand?.toLowerCase() === brand?.toLowerCase()
          );

    setSearchedBrandOutcome([...filteredData]);
  };

  /* const filteredData =
      printData.length === 0 ? allData.filter(item => item?.brand?.toLowerCase().includes(brand.toLowerCase()))
      
        :
        printData.filter(item => item?.brand?.toLowerCase().includes(brand?.toLowerCase()));

    if (filteredData.length === 0) {
        return false
    } else {
      
       setPrintData([
          ...printData,
          ...filteredData,
       ]);
      
    } */

  /* -------- Search Select Gender Function----------- */
  const handleFilterGender = (genders) => {
    setSelectedGender(genders);

    const filteredData =
      selectedBrand === "all" || selectedBrand === ""
        ? allData.filter(
            (item) =>
              //item?.product_sex?.toLowerCase().includes(genders.toLowerCase())
              item?.product_sex?.toLowerCase() === genders.toLowerCase()
          )
        : printData &&
          printData.filter(
            (item) => item?.product_sex?.toLowerCase() === genders.toLowerCase()
          );
    
    setSearchedGenderOutcome([...filteredData]);
    console.log("filteredData-gender: ", filteredData);

    /*  const filteredData =
      printData.length === 0 ? allData.filter((item) => item?.product_sex?.toLowerCase().includes(gender.toLowerCase()))
        :
        printData.filter((item) => item?.gender?.toLowerCase().includes(gender?.toLowerCase()));
   
    setPrintData([...printData, ...filteredData ]); */
  };

  /* -------- Search Select Color Function----------- */
  const handleFilterColors = (color) => {
    const filteredData = allData.filter((item) => {
      if (item.primary_color.toLowerCase() === color.toLowerCase()) {
        return item;
      }
    });
    // setPrintData([{...searchedBrandOutcome},{...filteredData}]);
  };

  /*  const handleFilterDate = (date, field) => {
    const filteredData = allData.filter((item) => {
      if (field === "from" && dayjs(item.date).isSameOrAfter(dayjs(date))) {
        return item;
      }
    });

    setPrintData(filteredData);
  }; */

  /*  useEffect(() => {
     if (searchedBrandOutcome.length >= 1) {
       setPrintData([
         { ...searchedBrandOutcome },
         { ...searchedDescriptionOutcome },
       ]);
     }
   }, [
     searchedBrandOutcome,
     searchedDescriptionOutcome,
     selectedColorOutcome,
     selectedGenderOutcome,
   ]); */

  console.log("printData: ", printData);
  console.log("searchedGenderOutcome-2: ", searchedGenderOutcome);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <FilterBar
            brands={generateBrandsDataForDropdown()}
            genders={generateGenderDataForDropdown()}
            colors={generateColorDataForDropdown()}
            onBrandFilter={handleFilterBrand}
            // onDescriptionFilter={handleFilterDescription}
            onColorsFilter={handleFilterColors}
            onGenderFilter={handleFilterGender}
            data={allData}
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
