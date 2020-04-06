import React, { useEffect } from "react";

const Circle = ({ color, setColor, fill, player, setFill, restart, count }) => {
  useEffect(() => {
    if (restart === "false") {
      if (player === "2") {
        setColor("red");
      } else {
        setColor("yellow");
      }
    }
  }, [fill]);

  useEffect(() => {
    setColor("white");
  }, []);
  useEffect(() => {
    setColor("white");
  }, [count]);
  useEffect(() => {
    setFill("false");
  }, [count]);

  return <div style={{ backgroundColor: color }} className="circle"></div>;
};

export default Circle;
