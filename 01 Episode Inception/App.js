//create react element using core react
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
