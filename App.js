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

const root = ReactDOM.createRoot(document.getElementById("root"));

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "sib1" }, "sib1"),
    React.createElement("h2", { id: "sib2" }, "sib2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "sib1" }, "sib1"),
    React.createElement("h2", { id: "sib2" }, "sib2"),
  ]),
]);

root.render(parent);
