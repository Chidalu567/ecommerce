import React from "react";
import Rating from "./rating";

const Product = ({ price, image, numReviews, rating, _id }) => {
  return (
    <div className="card" key={_id}>
      {/*image section on card as a link*/}
      <a href={`/products/${_id}`}>
        <img src={image} className="card-image" alt="mens pant" />
      </a>

      {/*card body section contianing containers of name, rating and price*/}
      <div className="card-body">
        {/*product name as link*/}
        <div className="name">
          <a href={`/products/${_id}`}>
            <h2>Mens pant</h2>
          </a>
        </div>

        {/*Rating usisng font awesome*/}
        <Rating rating={rating} numReviews={numReviews}  />

        {/*Price*/}
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default Product; //export for external file to use
