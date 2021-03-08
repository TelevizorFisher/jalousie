import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ModalDeleteButton from "../../Modal";
import s from "./Product.module.scss";

const Product = (props) => {
  const [filteredProduct, setFilteredProduct] = useState([]);
  console.log("pr", props.products);
  const deleteHandler = () => {
    props.setProducts(props.products.filter((el) => el.id !== props.one.id));
  };

  return (
    <div>
      <div>
        <div className={s.portfolio__cart_body}>
          <div
            className={s.portfolio__cart}
            style={{ backgroundImage: `url(${props.photo})` }}
          >
            <div>{props.name}</div>
            <div className={s.portfolio__text}>{props.description}</div>
            <div className={s.portfolio__img}>
              <div className={(s.portfolio__text, s.text__portfolio)}>
                <div className={s.portfolio__text_name}>
                  <span>{props.name}</span>
                </div>
                <div className={s.portfolio__text_count}>
                  Кількість товару - {props.count}
                </div>
                <div className={s.portfolio__text_weight}>
                  <div>{props.weight}</div>
                </div>
              </div>
              <NavLink
                to={"/product/" + props.id}
                className={s.portfolio__button}
              >
                {" "}
                <span>Деталі</span>
              </NavLink>
            </div>
          </div>
        </div>
        <ModalDeleteButton deleteHandler={deleteHandler} />
      </div>
    </div>
  );
};
export default Product;
