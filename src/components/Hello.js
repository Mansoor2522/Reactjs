import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h2>Your Learning React.js</h2>
  //     </div>
  //   );

  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },

    React.createElement("h1", null, "Hello React.js")
  );
};

export default Hello;
