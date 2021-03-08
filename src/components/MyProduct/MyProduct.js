import React, { useEffect, useState } from "react";
import ModalAddContainer from "../ModalAddContainer";
import Product from "./Product/Product";
import s from "./Product/Product.module.scss";

const MyProduct = (props) => {

  useEffect(() => {
    setProducts(props.product);
  }, [props]);
  const [products, setProducts] = useState([]);

  let productElement = products.map((c) => (
    <Product
      id={c.id}
      name={c.name}
      photo={c.photo}
      count={c.count}
      weight={c.weight}
      description={c.description}
      key={c.id}
      delid={c.id}
      products={products}
      setProducts={setProducts}

    />
  ));

  return (
    <div className={s.portfolio__body}>
      {productElement}
      <div className={s.portfolio__cartAdd}>
        <span>
          Додати товар
          <ModalAddContainer store={props.store} />
        </span>
      </div>
    </div>
  );
};

export default MyProduct;
