import React from "react";
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch,
} from "react-router-dom";
// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
// import components
import Navbar from "./components/Navbar";

import SingleProductContainer from "./components/MyProduct/Product/SingleProductContainer";

function App(props) {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home store={props.store} />
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
    </HashRouter>
  );
}

export default App;
