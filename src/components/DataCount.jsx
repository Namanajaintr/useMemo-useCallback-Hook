import React from "react";

const DataCount = ({ count, text }) => {
  console.log(`rendering the ${text} from DataCount component `);
  return (
    <h1>
      DataCount {text} = {count}
    </h1>
  );
};

export default DataCount;
