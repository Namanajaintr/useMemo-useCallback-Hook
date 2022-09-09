import React, { useMemo, useState } from "react";

const Counter = () => {
  console.log("Rendering Counter Component");

  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const incrementCounter1 = () => {
    setCounter1(counter1 + 1);
  };

  const incrementCounter2 = () => {
    setCounter2(counter2 + 1);
  };

  const isEven = useMemo(() => {
    console.log("isEven executed");
    let i = 0;
    while (i < 200000) {
      i++;
    }
    return counter2 % 2 === 0;
  }, [counter2]);

  return (
    <div>
      <h1>Counter1 - {counter1}</h1>
      <h1>Counter2 - {counter2}</h1>
      <span>{isEven ? "Even" : "odd"}</span>
      <button onClick={incrementCounter1}>increment1</button>
      <button onClick={incrementCounter2}>increment2</button>
    </div>
  );
};

export default Counter;
