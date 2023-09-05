import React from "react";
import ReactDOM from "react-dom/client";

//JSX(transpiled before it reaches the JS engine) - done by Babel which isinvoked by or managed by parcel

//JSX - babel transplies it to - React.createElement=>ReactElement is JS object => rendered into HTML element

const jsxHeading = (
  <h1 className="main-heading" tabIndex="5">
    Namaste React using JSX🚀
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
