import React from "react";
import Product1 from "../Product copy/Product1";

const ProductHover = ({ products }) => {
  return (
    <React.Fragment>
      <div className="Products__Heading">
        <h2>More To Buy Best Product in the Market </h2>
        <p>Now available for sale in our Store</p>
      </div>

      <div className="Products__Containers__Container">
        <div className="grad-left"></div>
        <div className="Products__Container">
          {products.map((item) => (
            <Product1 key={item._id} product={item} />
          ))}
        </div>
        <div className="grad-right"></div>
      </div>
    </React.Fragment>
  );
};

export default ProductHover;
