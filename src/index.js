import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Home from "./Home";
import HomePage from "./container/HomePage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Routers, Route, Link, Routes } from "react-router-dom";
import Error404 from "./container/Error404";
import MerchantPage from "./container/MerchantPage";
import DetailPage from "./container/DetailPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="md:w-1/2 lg:w-1/3 mx-auto bg-slate-300">
      <Routers>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/:merchantName" element={<MerchantPage />} />
          <Route path="/:merchantName/:merchantSlug" element={<DetailPage />} />
          {/* <Route path=":merchantName" element={<CardProduct />}>
              <Route
                index
                element={
                  <main style={{ padding: "1rem" }}>
                    <p>Select an invoice</p>
                  </main>
                }
              />
              <Route path=":merchantSlug" element={<CardProduct />} />
            </Route> */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Routers>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
