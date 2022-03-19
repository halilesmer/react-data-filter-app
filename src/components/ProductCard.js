import * as React from "react";
import { useContext } from "react";
import { AppContext } from "./AppContext";
import PersonItem from "./PersonItem";

const ProductCard = () => {
  const app = useContext(AppContext);

  return (
    <div className="col-sm-9">
      <div className="row mt-5">
        {!app.printData && (
          <div>
            <p style={{ width: "100px", margin: "0 auto" }}>
              <strong>No Result</strong>
            </p>
          </div>
        )}
        {app.printData.map((item, index) => (
          <PersonItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
