import React, { useCallback, useState } from "react";
import Button from "./Button";
import DataCount from "./DataCount";
import TitleClass from "./TitleClass";
import TitleFunc from "./TitleFunc";

const Parent = () => {
  console.log("Rendering Parent Component");
  const [age, setAge] = useState(10);
  const [salary, setSalary] = useState(100000);

  //useCallback hook returns the memoized function -
  //means previous func when there is no chnage if there is an changes then it re-rendeers the function
  const incrementAge = useCallback(() => {
    setAge(age + 5);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 100000);
  }, [salary]);

  return (
    <div>
      <TitleFunc />
      <TitleClass />
      <DataCount count={age} text="age" />
      <Button handleClick={incrementAge}>Increment click Age</Button>
      <DataCount count={salary} text="salary" />
      <Button handleClick={incrementSalary}>Increment click Salary</Button>
    </div>
  );
};

export default Parent;
