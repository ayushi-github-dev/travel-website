import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router";
import Home from "./Components/pages/Home";
import Services from "./Components/pages/Services";
import Products from "./Components/pages/Products";
import SignUp from "./Components/pages/SignUp";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}>
          
        </Route>
        <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={SignUp} />
      </Switch>
    </>
  );
}

export default App;
