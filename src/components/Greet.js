import React from "react";

// function Greet() {
//   return <h1>Hello World!</h1>;
// }

//  const Greet = () => <h1>Good to Learn REACT.JS</h1>;

const Greet = props => {
  const {name,heroName} = props
  // console.log(props);
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {/* {props.children} */}
    </div>
  );
};
export default Greet;
