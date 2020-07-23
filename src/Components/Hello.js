import React, { useEffect } from "react";

const Hello = () => {
  useEffect(() => {
    console.log("Hello component");
    return () => {
      console.log("I m unmounting");
    };
  }, []);
  return <div>Hey, I'm Hello</div>;
};

export default Hello;
