const PersonItem = ({ item }) => {
  return (
    <div className="col-sm-4">
      <div className="card my-2">
        <img
          src="http://dummyimage.com/100x100.png/ff4444/ffffff"
          className="card-img-top"
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">
            {item?.brand} {item?.product_name}
          </h5>
          <p className="card-text">{item?.product_description}</p>
          <p className="card-text">{item?.product_sex?.toUpperCase()}</p>
          <p className="card-text">
            <span className="card-text">{item?.primary_color?.toUpperCase()}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonItem;
