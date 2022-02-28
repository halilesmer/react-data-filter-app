import { useEffect, useState } from "react";
import dayjs from "dayjs";

import "./App.css";
import PersonItem from "./components/PersonItem";
//import { data } from "./MOCK_DATA";
import FilterBar from "./components/FilterBar";
import useFetch from "./useFetch";

const isSameOrAfter = require("dayjs/plugin/isSameOrAfter");
const isSameOrBefore = require("dayjs/plugin/isSameOrBefore");
dayjs.extend(isSameOrBefore);
dayjs.extend(isSameOrAfter);



function App() {
  //const [allData, setAllData] = useState(data);
  const [allData, setAllData] = useState(null);
  const [printData, setPrintData] = useState(allData);
  const [genderJson, setGenderJson] = useState([]);
  const [colorJson, setColorJson] = useState([]);
  
  const { get } = useFetch("http://localhost:3000/");
  
  /* -------------- Products Json -------------- */
  useEffect(() => {
    get("products_get_product_filter")
    .then((data) => {
      setAllData(data.data);
      setPrintData(data.data);
      setColorJson(data.data);
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
  
  
  
  
  const generateGenderDataForDropdown = () => {
    /* return [...new Set(gender.map((item) => item.sex))]; */
    return [...new Set(genderJson.map((item) => item.sex.toUpperCase()))];
  };
  
  const generateColorDataForDropdown = () => {
    /* return [...new Set(gender.map((item) => item.sex))]; */
    return [
      ...new Set(colorJson.map((item) => item.primary_color.toUpperCase())),
    ];
  };
  
  const handleFilterName = (name) => {
    const filteredData = allData.filter((item) => {
      const fullName = `${item.brand} ${item.product_name}`;
      if (fullName.toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });

    setPrintData(filteredData);
  };
  /* email chainged to description */
  const handleFilterDescription = (description) => {
    const filteredData = allData.filter((item) => {
      if (
        item.product_description
          .toLowerCase()
          .includes(description.toLowerCase())
      ) {
        return item;
      }
    });

    setPrintData(filteredData);
  };
  const handleFilterGender = (gender) => {
    const filteredData = allData.filter((item) => {
      if (item.product_sex.toLowerCase() === gender.toLowerCase()) {
        return item;
      }
    });

    setPrintData(filteredData);
    console.log("printData: ", printData);
  };

  const handleFilterColors = (color) => {
    const filteredData = allData.filter((item) => {
      if (item.primary_color.toLowerCase() === color.toLowerCase()) {
        return item;
      }
    });

    setPrintData(filteredData);
    console.log("printData: ", printData);
  };

  /*  const handleFilterDate = (date, field) => {
    const filteredData = allData.filter((item) => {
      if (field === "from" && dayjs(item.date).isSameOrAfter(dayjs(date))) {
        return item;
      }
    });

    setPrintData(filteredData);
  }; */

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3">
          <FilterBar
            genders={generateGenderDataForDropdown()}
            colors={generateColorDataForDropdown()}
            onNameFilter={handleFilterName}
            onDescriptionFilter={handleFilterDescription}
            onColorsFilter={handleFilterColors}
            onGenderFilter={handleFilterGender}

            /*  onDateFilter={handleFilterDate} */
          />
        </div>
        <div className="col-sm-9">
          <div className="row mt-5">
            {printData &&
              printData.map((item) => (
                <PersonItem item={item} key={item.product_sale_id} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
