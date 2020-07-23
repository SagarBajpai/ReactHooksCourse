import React, { useEffect, useState } from "react";
import Hello from "./Hello";

const CounterOnceAgain = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [showHello, setShowHello] = useState(false);

  useEffect(() => {
    const handleMouse = (e) => {
      console.log(e);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => {
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);
  //componentWillUnmount

  return (
    <div>
      {/* Try to Toogle Hello component to see unMounting phase of hello.js */}
      {showHello ? <Hello /> : ""}

      <button onClick={() => setShowHello(!showHello)}>Show Me Hello!</button>
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
