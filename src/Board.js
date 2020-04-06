import React, { useState } from "react";
import CircleColumn from "./CircleColumn";

const Board = () => {
  const [restart, setRestart] = useState("false");
  const [count, setCount] = useState("0");
  const [fill1, setFill1] = useState("false");
  const [fill2, setFill2] = useState("false");
  const [fill3, setFill3] = useState("false");
  const [fill4, setFill4] = useState("false");
  const [fill5, setFill5] = useState("false");
  const [fill6, setFill6] = useState("false");
  const [fill7, setFill7] = useState("false");
  const [fill8, setFill8] = useState("false");
  const [fill9, setFill9] = useState("false");
  const [fill10, setFill10] = useState("false");
  const [fill11, setFill11] = useState("false");
  const [fill12, setFill12] = useState("false");
  const [fill13, setFill13] = useState("false");
  const [fill14, setFill14] = useState("false");
  const [fill15, setFill15] = useState("false");
  const [fill16, setFill16] = useState("false");
  const [fill17, setFill17] = useState("false");
  const [fill18, setFill18] = useState("false");
  const [fill19, setFill19] = useState("false");
  const [fill20, setFill20] = useState("false");
  const [fill21, setFill21] = useState("false");
  const [fill22, setFill22] = useState("false");
  const [fill23, setFill23] = useState("false");
  const [fill24, setFill24] = useState("false");
  const [fill25, setFill25] = useState("false");
  const [fill26, setFill26] = useState("false");
  const [fill27, setFill27] = useState("false");
  const [fill28, setFill28] = useState("false");
  const [fill29, setFill29] = useState("false");
  const [fill30, setFill30] = useState("false");
  const [fill31, setFill31] = useState("false");
  const [fill32, setFill32] = useState("false");
  const [fill33, setFill33] = useState("false");
  const [fill34, setFill34] = useState("false");
  const [fill35, setFill35] = useState("false");
  const [fill36, setFill36] = useState("false");
  const [fill37, setFill37] = useState("false");
  const [fill38, setFill38] = useState("false");
  const [fill39, setFill39] = useState("false");
  const [fill40, setFill40] = useState("false");
  const [fill41, setFill41] = useState("false");
  const [fill42, setFill42] = useState("false");
  const [color1, setColor1] = useState("white");
  const [color2, setColor2] = useState("white");
  const [color3, setColor3] = useState("white");
  const [color4, setColor4] = useState("white");
  const [color5, setColor5] = useState("white");
  const [color6, setColor6] = useState("white");
  const [color7, setColor7] = useState("white");
  const [color8, setColor8] = useState("white");
  const [color9, setColor9] = useState("white");
  const [color10, setColor10] = useState("white");
  const [color11, setColor11] = useState("white");
  const [color12, setColor12] = useState("white");
  const [color13, setColor13] = useState("white");
  const [color14, setColor14] = useState("white");
  const [color15, setColor15] = useState("white");
  const [color16, setColor16] = useState("white");
  const [color17, setColor17] = useState("white");
  const [color18, setColor18] = useState("white");
  const [color19, setColor19] = useState("white");
  const [color20, setColor20] = useState("white");
  const [color21, setColor21] = useState("white");
  const [color22, setColor22] = useState("white");
  const [color23, setColor23] = useState("white");
  const [color24, setColor24] = useState("white");
  const [color25, setColor25] = useState("white");
  const [color26, setColor26] = useState("white");
  const [color27, setColor27] = useState("white");
  const [color28, setColor28] = useState("white");
  const [color29, setColor29] = useState("white");
  const [color30, setColor30] = useState("white");
  const [color31, setColor31] = useState("white");
  const [color32, setColor32] = useState("white");
  const [color33, setColor33] = useState("white");
  const [color34, setColor34] = useState("white");
  const [color35, setColor35] = useState("white");
  const [color36, setColor36] = useState("white");
  const [color37, setColor37] = useState("white");
  const [color38, setColor38] = useState("white");
  const [color39, setColor39] = useState("white");
  const [color40, setColor40] = useState("white");
  const [color41, setColor41] = useState("white");
  const [color42, setColor42] = useState("white");
  const [player, setPlayer] = useState("1");
  // console.log(fill1)
  let colorArr = [
    [color1, color7, color13, color19, color25, color31, color37],
    [color2, color8, color14, color20, color26, color32, color38],
    [color3, color9, color15, color21, color27, color33, color39],
    [color4, color10, color16, color22, color28, color34, color40],
    [color5, color11, color17, color23, color29, color35, color41],
    [color6, color12, color18, color24, color30, color36, color42],
  ];
  let fillArr = [
    [fill1, fill7, fill13, fill19, fill25, fill31, fill37],
    [fill2, fill8, fill14, fill20, fill26, fill32, fill38],
    [fill3, fill9, fill15, fill21, fill27, fill33, fill39],
    [fill4, fill10, fill16, fill22, fill28, fill34, fill40],
    [fill5, fill11, fill17, fill23, fill29, fill35, fill41],
    [fill6, fill12, fill18, fill24, fill30, fill36, fill42],
  ];

  console.log(fillArr);
  console.log(colorArr);
  const verticalWin = () => {
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (
          colorArr[r][c] === colorArr[r - 1][c] &&
          colorArr[r][c] === colorArr[r - 2][c] &&
          colorArr[r][c] === colorArr[r - 3][c] &&
          colorArr[r][c] !== "white" &&
          colorArr[r - 1][c] !== "white" &&
          colorArr[r - 2][c] !== "white" &&
          colorArr[r - 3][c] !== "white"
        ) {
          return "true";
        }
      }
    }
  };
  const horizontalWin = () => {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (
          colorArr[r][c] === colorArr[r][c + 1] &&
          colorArr[r][c] === colorArr[r][c + 2] &&
          colorArr[r][c] === colorArr[r][c + 3] &&
          colorArr[r][c] !== "white" &&
          colorArr[r][c + 1] !== "white" &&
          colorArr[r][c + 2] !== "white" &&
          colorArr[r][c + 3] !== "white"
        ) {
          return "true";
        }
      }
    }
  };
  const diagonalLeftWin = () => {
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (
          colorArr[r][c] === colorArr[r - 1][c - 1] &&
          colorArr[r][c] === colorArr[r - 2][c - 2] &&
          colorArr[r][c] === colorArr[r - 3][c - 3] &&
          colorArr[r][c] !== "white" &&
          colorArr[r - 1][c - 1] !== "white" &&
          colorArr[r - 2][c - 2] !== "white" &&
          colorArr[r - 3][c - 3] !== "white"
        ) {
          return "true";
        }
      }
    }
  };
  const diagonalRightWin = () => {
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (
          colorArr[r][c] === colorArr[r - 1][c + 1] &&
          colorArr[r][c] === colorArr[r - 2][c + 2] &&
          colorArr[r][c] === colorArr[r - 3][c + 3] &&
          colorArr[r][c] !== "white" &&
          colorArr[r - 1][c + 1] !== "white" &&
          colorArr[r - 2][c + 2] !== "white" &&
          colorArr[r - 3][c + 3] !== "white"
        ) {
          return "true";
        }
      }
    }
  };

  const win = () => {
    let vert = verticalWin();
    let horz = horizontalWin();
    let diagL = diagonalLeftWin();
    let diagR = diagonalRightWin();
    if (vert || horz || diagL || diagR) {
      return "true";
    }
  };

  let winner = win();
  if (winner) {
    console.log("winner");
  }

  const handleFill1 = (event) => {
    if (
      (fill1 === "false" ||
        fill2 === "false" ||
        fill3 === "false" ||
        fill4 === "false" ||
        fill5 === "false" ||
        fill6 === "false") &&
      !winner
    ) {
      if (fill6 === "false") {
        setFill6("true");
      } else if (fill5 === "false") {
        setFill5("true");
      } else if (fill4 === "false") {
        setFill4("true");
      } else if (fill3 === "false") {
        setFill3("true");
      } else if (fill2 === "false") {
        setFill2("true");
      } else if (fill1 === "false") {
        setFill1("true");
      }

      if (player === "1") {
        setPlayer("2");
      } else {
        setPlayer("1");
      }
    }
  };
  const handleFill2 = (event) => {
    if (
      (fill7 === "false" ||
        fill8 === "false" ||
        fill9 === "false" ||
        fill10 === "false" ||
        fill11 === "false" ||
        fill12 === "false") &&
      !winner
    ) {
      if (fill12 === "false") {
        setFill12("true");
      } else if (fill11 === "false") {
        setFill11("true");
      } else if (fill10 === "false") {
        setFill10("true");
      } else if (fill9 === "false") {
        setFill9("true");
      } else if (fill8 === "false") {
        setFill8("true");
      } else if (fill7 === "false") {
        setFill7("true");
      }

      if (player === "1") {
        setPlayer("2");
      } else {
        setPlayer("1");
      }
    }
  };
  const handleFill3 = (event) => {
    if (
      (fill13 === "false" ||
        fill14 === "false" ||
        fill15 === "false" ||
        fill16 === "false" ||
        fill17 === "false" ||
        fill18 === "false") &&
      !winner
    ) {
      if (fill18 === "false") {
        setFill18("true");
      } else if (fill17 === "false") {
        setFill17("true");
      } else if (fill16 === "false") {
        setFill16("true");
      } else if (fill15 === "false") {
        setFill15("true");
      } else if (fill14 === "false") {
        setFill14("true");
      } else if (fill13 === "false") {
        setFill13("true");
      }

      if (player === "1") {
        setPlayer("2");
      } else {
        setPlayer("1");
      }
    }
  };
  const handleFill4 = (event) => {
    if (
      (fill19 === "false" ||
        fill20 === "false" ||
        fill21 === "false" ||
        fill22 === "false" ||
        fill23 === "false" ||
        fill24 === "false") &&
      !winner
    ) {
      if (fill24 === "false") {
        setFill24("true");
      } else if (fill23 === "false") {
        setFill23("true");
      } else if (fill22 === "false") {
        setFill22("true");
      } else if (fill21 === "false") {
        setFill21("true");
      } else if (fill20 === "false") {
        setFill20("true");
      } else if (fill19 === "false") {
        setFill19("true");
      }

      if (player === "1") {
        setPlayer("2");
      } else {
        setPlayer("1");
      }
    }
  };
  const handleFill5 = (event) => {
    if (
      (fill25 === "false" ||
        fill26 === "false" ||
        fill27 === "false" ||
        fill28 === "false" ||
        fill29 === "false" ||
        fill30 === "false") &&
      !winner
    ) {
      if (fill30 === "false") {
        setFill30("true");
      } else if (fill29 === "false") {
        setFill29("true");
      } else if (fill28 === "false") {
        setFill28("true");
      } else if (fill27 === "false") {
        setFill27("true");
      } else if (fill26 === "false") {
        setFill26("true");
      } else if (fill25 === "false") {
        setFill25("true");
      }

      if (player === "1") {
        setPlayer("2");
      } else {
        setPlayer("1");
      }
    }
  };
  const handleFill6 = (event) => {
    if (
      (fill31 === "false" ||
        fill32 === "false" ||
        fill33 === "false" ||
        fill34 === "false" ||
        fill35 === "false" ||
        fill36 === "false") &&
      !winner
    ) {
      if (fill36 === "false") {
        setFill36("true");
      } else if (fill35 === "false") {
        setFill35("true");
      } else if (fill34 === "false") {
        setFill34("true");
      } else if (fill33 === "false") {
        setFill33("true");
      } else if (fill32 === "false") {
        setFill32("true");
      } else if (fill31 === "false") {
        setFill31("true");
      }

      if (player === "1") {
        setPlayer("2");
      } else {
        setPlayer("1");
      }
    }
  };
  const handleFill7 = (event) => {
    if (
      (fill37 === "false" ||
        fill38 === "false" ||
        fill39 === "false" ||
        fill40 === "false" ||
        fill41 === "false" ||
        fill42 === "false") &&
      !winner
    ) {
      if (fill42 === "false") {
        setFill42("true");
      } else if (fill41 === "false") {
        setFill41("true");
      } else if (fill40 === "false") {
        setFill40("true");
      } else if (fill39 === "false") {
        setFill39("true");
      } else if (fill38 === "false") {
        setFill38("true");
      } else if (fill37 === "false") {
        setFill37("true");
      }

      if (player === "1") {
        setPlayer("2");
      } else {
        setPlayer("1");
      }
    }
  };
  const Restart = () => {
    // setRestart("true");
    // setCount(count+1)
    // setRestart("false")

    window.location.reload();

    // setPlayer(1);
  };

  return (
    <div>
      <div className="board">
        <CircleColumn
          count={count}
          restart={restart}
          key={"1"}
          onClick={handleFill1}
          fill1={fill1}
          fill2={fill2}
          fill3={fill3}
          fill4={fill4}
          fill5={fill5}
          fill6={fill6}
          player={player}
          setFill1={setFill1}
          setFill2={setFill2}
          setFill3={setFill3}
          setFill4={setFill4}
          setFill5={setFill5}
          setFill6={setFill6}
          color1={color1}
          color2={color2}
          color3={color3}
          color4={color4}
          color5={color5}
          color6={color6}
          setColor1={setColor1}
          setColor2={setColor2}
          setColor3={setColor3}
          setColor4={setColor4}
          setColor5={setColor5}
          setColor6={setColor6}
        />
        <CircleColumn
          count={count}
          restart={restart}
          key={"2"}
          onClick={handleFill2}
          fill1={fill7}
          fill2={fill8}
          fill3={fill9}
          fill4={fill10}
          fill5={fill11}
          fill6={fill12}
          player={player}
          setFill1={setFill7}
          setFill2={setFill8}
          setFill3={setFill9}
          setFill4={setFill10}
          setFill5={setFill11}
          setFill6={setFill12}
          color1={color7}
          color2={color8}
          color3={color9}
          color4={color10}
          color5={color11}
          color6={color12}
          setColor1={setColor7}
          setColor2={setColor8}
          setColor3={setColor9}
          setColor4={setColor10}
          setColor5={setColor11}
          setColor6={setColor12}
        />
        <CircleColumn
          count={count}
          restart={restart}
          key={"3"}
          onClick={handleFill3}
          fill1={fill13}
          fill2={fill14}
          fill3={fill15}
          fill4={fill16}
          fill5={fill17}
          fill6={fill18}
          player={player}
          setFill1={setFill13}
          setFill2={setFill14}
          setFill3={setFill15}
          setFill4={setFill16}
          setFill5={setFill17}
          setFill6={setFill18}
          color1={color13}
          color2={color14}
          color3={color15}
          color4={color16}
          color5={color17}
          color6={color18}
          setColor1={setColor13}
          setColor2={setColor14}
          setColor3={setColor15}
          setColor4={setColor16}
          setColor5={setColor17}
          setColor6={setColor18}
        />
        <CircleColumn
          count={count}
          restart={restart}
          key={"4"}
          onClick={handleFill4}
          fill1={fill19}
          fill2={fill20}
          fill3={fill21}
          fill4={fill22}
          fill5={fill23}
          fill6={fill24}
          player={player}
          setFill1={setFill19}
          setFill2={setFill20}
          setFill3={setFill21}
          setFill4={setFill22}
          setFill5={setFill23}
          setFill6={setFill24}
          color1={color19}
          color2={color20}
          color3={color21}
          color4={color22}
          color5={color23}
          color6={color24}
          setColor1={setColor19}
          setColor2={setColor20}
          setColor3={setColor21}
          setColor4={setColor22}
          setColor5={setColor23}
          setColor6={setColor24}
        />
        <CircleColumn
          count={count}
          restart={restart}
          key={"5"}
          onClick={handleFill5}
          fill1={fill25}
          fill2={fill26}
          fill3={fill27}
          fill4={fill28}
          fill5={fill29}
          fill6={fill30}
          player={player}
          setFill1={setFill25}
          setFill2={setFill26}
          setFill3={setFill27}
          setFill4={setFill28}
          setFill5={setFill29}
          setFill6={setFill30}
          color1={color25}
          color2={color26}
          color3={color27}
          color4={color28}
          color5={color29}
          color6={color30}
          setColor1={setColor25}
          setColor2={setColor26}
          setColor3={setColor27}
          setColor4={setColor28}
          setColor5={setColor29}
          setColor6={setColor30}
        />
        <CircleColumn
          count={count}
          restart={restart}
          key={"6"}
          onClick={handleFill6}
          fill1={fill31}
          fill2={fill32}
          fill3={fill33}
          fill4={fill34}
          fill5={fill35}
          fill6={fill36}
          player={player}
          setFill1={setFill31}
          setFill2={setFill32}
          setFill3={setFill33}
          setFill4={setFill34}
          setFill5={setFill35}
          setFill6={setFill36}
          color1={color31}
          color2={color32}
          color3={color33}
          color4={color34}
          color5={color35}
          color6={color36}
          setColor1={setColor31}
          setColor2={setColor32}
          setColor3={setColor33}
          setColor4={setColor34}
          setColor5={setColor35}
          setColor6={setColor36}
        />
        <CircleColumn
          count={count}
          restart={restart}
          key={"7"}
          onClick={handleFill7}
          fill1={fill37}
          fill2={fill38}
          fill3={fill39}
          fill4={fill40}
          fill5={fill41}
          fill6={fill42}
          player={player}
          setFill1={setFill37}
          setFill2={setFill38}
          setFill3={setFill39}
          setFill4={setFill40}
          setFill5={setFill41}
          setFill6={setFill42}
          color1={color37}
          color2={color38}
          color3={color39}
          color4={color40}
          color5={color41}
          color6={color42}
          setColor1={setColor37}
          setColor2={setColor38}
          setColor3={setColor39}
          setColor4={setColor40}
          setColor5={setColor41}
          setColor6={setColor42}
        />
      </div>

      {winner && (
        <h2 className="Footer">
          {player === "1" ? "Yellow" : "Red"} is the winner!
        </h2>
      )}
      {
        <div className="Button">
          <button onClick={Restart}>Restart Game</button>
        </div>
      }
    </div>
  );
};
export default Board;
