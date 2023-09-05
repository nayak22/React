import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const heading = (
  <h1 className="main-heading" tabIndex="5">
    Namaste React using JSX🚀
  </h1>
);

//React Components

/* 2 types
  -- Class based Components
  -- Functional based Components*/

/* Functional based Components - Normal javascript function*/
const headingComponent = () => {
  return <h2>Namste React from Functional component</h2>;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
