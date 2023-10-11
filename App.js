/**
 * <div id='parent'>
 *
 *    <div id='child'>
 *        <h1> Hello World </h1>
 *        <h2> Sibling Example </h2>
 *    </div>
 *
 * </div>
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

// react element
const reactElement = React.createElement(
  "div",
  { id: "container" },
  React.createElement("h1", { id: "heading" }, "React using React Element")
);

// JSX expression for heading
const jsxheading = (
  <div id="container">
    <h1 className="heading" tabIndex="2">
      Namaste React using JSX 🚀
    </h1>
  </div>
);

const Title = () => {
  return (
    <div id="title">
      <h1> This is my title of the page</h1>
    </div>
  );
};

/**
 * Component Composition
 * Using one componenent inside the other component
 */
const Heading = () => {
  return (
    <div id="container">
      {Title()}
      {jsxheading}
      <h1> Reacting using functional component</h1>
    </div>
  );
};

root.render(<Heading />);
