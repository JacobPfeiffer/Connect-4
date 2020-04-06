import React from "react";
import Circle from "./Circle";

const CircleColumn = ({
  onClick,
  fill1,
  fill2,
  fill3,
  fill4,
  fill5,
  fill6,
  setFill1,
  setFill2,
  setFill3,
  setFill4,
  setFill5,
  setFill6,
  color1,
  color2,
  color3,
  color4,
  color5,
  color6,
  setColor1,
  setColor2,
  setColor3,
  setColor4,
  setColor5,
  setColor6,
  player,
  restart,
  count
}) => {
  let circleArr = [
    <Circle
      count={count}
      restart={restart}
      color={color1}
      setColor={setColor1}
      fill={fill1}
      setFill={setFill1}
      player={player}
    />,
    <Circle
      count={count}
      restart={restart}
      color={color2}
      setColor={setColor2}
      fill={fill2}
      setFill={setFill2}
      player={player}
    />,
    <Circle
      count={count}
      restart={restart}
      color={color3}
      setColor={setColor3}
      fill={fill3}
      setFill={setFill3}
      player={player}
    />,
    <Circle
      count={count}
      restart={restart}
      color={color4}
      setColor={setColor4}
      fill={fill4}
      setFill={setFill4}
      player={player}
    />,
    <Circle
      count={count}
      restart={restart}
      color={color5}
      setColor={setColor5}
      fill={fill5}
      setFill={setFill5}
      player={player}
    />,
    <Circle
      count={count}
      restart={restart}
      color={color6}
      setColor={setColor6}
      fill={fill6}
      setFill={setFill6}
      player={player}
    />
  ];
  return (
    <div onClick={onClick} className="col">
      {circleArr.map(circle => (
        <div className="divCirc">{circle}</div>
      ))}
    </div>
  );
};

export default CircleColumn;
