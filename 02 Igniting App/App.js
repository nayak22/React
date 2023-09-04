import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "mainHeading" }, "I' a heading"),
    React.createElement("h2", { id: "sub-heading1" }, "I'm a sub heading"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
