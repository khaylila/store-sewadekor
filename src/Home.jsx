// import logo from "./logo.svg";
import { Fragment } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CardProduct from "./component/CardProduct";
import HomePage from "./container/HomePage";
import "./index.css";

function Home() {
  return (
    <BrowserRouter>
      {/* <HomePage /> */}
      <Route path="/detail" element={<Coba />}></Route>
    </BrowserRouter>
  );
}

function Coba(){
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

export default Home;
