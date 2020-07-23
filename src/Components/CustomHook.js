import React, { useEffect, useState } from "react";
import { useFetch } from "./Hooks/useFetch";

const CounterOnceAgain = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [count, setCount] = useState(0);

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia?`);

  useEffect(() => {}, []);

  return (
    <div>
      <div>{loading ? "loading..." : data}</div>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment Me
      </button>
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
