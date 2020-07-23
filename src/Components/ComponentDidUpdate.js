import React, { useEffect, useState } from "react";

const CounterOnceAgain = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("render");
  }, [name, password]); //componentDidMount  - intialRender
  //componenDidUpdate - update

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
    </div>
  );
};

export default CounterOnceAgain;
