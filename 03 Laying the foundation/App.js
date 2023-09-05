import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const ele = (
  <span id="span-ele">This element which will be addded in component</span>
);
const Title = () => {
  return (
    <div className="component">
      <h1 className="main-heading" tabIndex="5">
        Namaste React using JSX🚀
      </h1>
      {ele}
    </div>
  );
};

const HeadingComponent = () => {
  return (
    <div className="container">
      <Title />
      <h2>Namste React from Functional component</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
