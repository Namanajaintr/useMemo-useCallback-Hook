import React from "react";

const Button = (handleClick, Children) => {
  console.log("Rendering Button component", Children);
  return (
    <div>
      Button
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Button;
