import React from "react";

function Title() {
  console.log("Rendering Title Functional component");
  return <h3>TitleFunc Component uses memomethod</h3>;
}

export default React.memo(Title);
// memo method from react makes the components pure
// where it prevents unnedessary re-rendering of child components when there is no state or props change in that particular component
