import React from "react";
import { useParams, Link } from "react-router-dom";
import MyPostsContainer from "../../Profile/MyPosts/MyPostsContainer";
import Product from "./Product";
import s from "./SingleProduct.module.scss";

function SingleProduct(props) {
  console.log(console.log(window.location.pathname));
  var el = window.location.pathname;
  var id = parseInt(el.match(/\d+/));
  console.log("id", id);
  console.log("id", props.id);

  const content = props.product.map((p) =>
    p.id === id ? (
      <section className="section cocktail-section">
        <h2 className="section-title">{p.name}</h2>
        <div className="drink">
          <div className={s.portfolio__cart_body}>
            <div
              className={s.portfolio__cart}
              style={{ backgroundImage: `url(${p.photo})` }}
            ></div>
          </div>
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span> {p.name}
            </p>
            <p>
              <span className="drink-data">count :</span> {p.count}
            </p>
				<p>
              <span className="drink-data">color :</span> {p.color}
            </p>
				<p>
              <span className="drink-data">Weight :</span> {p.weight}
            </p>
            <p>
              <span className="drink-data">instructons :</span> {p.description}
            </p>
          </div>
        </div>
      </section>
    ) : (
      ""
    )
  );

  return (
    <section className="section cocktail-section">
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
      {content}
		<MyPostsContainer/> 
    </section>
  );
}
export default SingleProduct;
