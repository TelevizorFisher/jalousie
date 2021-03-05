import React from "react";
import Product from "./Product/Product";
import s from "./Product/Product.module.scss";

const MyProduct = (props ) => {
  let productElement = props.product.map((c) => (
    <Product
	 	id={c.id}
      name={c.name}
      photo={c.photo}
		count={c.count}
		weight={c.weight}
		description={c.description}
		key={c.id}
    />
  ));

  return <div className={s.portfolio__body}>{productElement}</div>;
};

export default MyProduct;
