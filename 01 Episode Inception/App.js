/*//create react element using core react
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React code"
);

console.log(heading);

//create a root element using the DOM of react by selecting html root id element
const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(root);

//render the heading into the root element
root.render(heading);
*/

//Consider we need to create some nested structure like below

/*
<div id="parent">
    <div id="child">
        <h1 id="mainHeading">I' a heading</h1>
        <h2 id="sub-heading1"> <I'm a sub heading</h2>
    </div>
</div>
*/

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
