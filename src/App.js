import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";
import SingleProduct from "./components/MyProduct/Product/SingleProduct";
import SingleProductContainer from "./components/MyProduct/Product/SingleProductContainer";

function App(props) {
  const [inputText, setInputText] = useState("");
  const [product, setProduct] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  console.log("pr", { product });
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home store={props.store} product={product} setProduct={setProduct} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/product/:id">
          <SingleProductContainer store={props.store} />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
