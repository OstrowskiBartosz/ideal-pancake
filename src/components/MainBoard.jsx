import React, { useState, useEffect} from 'react';
import Square from './Square.jsx'

function Newcolorszzz(boardColors){
  let modifiedBoardColors = boardColors;
  for(let number in boardColors){
    switch (true){
      case (boardColors[number] > 19 && boardColors[number] < 30):
        modifiedBoardColors[number] = 0;
        break;
      case (boardColors[number] > 29 && boardColors[number] < 40):
        modifiedBoardColors[number] = 1;
        break;
      case (boardColors[number] > 39 && boardColors[number] < 50):  
        modifiedBoardColors[number] = 2;
        break;
      case (boardColors[number] > 49 && boardColors[number] < 60):
        modifiedBoardColors[number] = 3;
        break;
      case (boardColors[number] > 59 && boardColors[number] < 70):
        modifiedBoardColors[number] = 4;
        break;
      case (boardColors[number] > 69 && boardColors[number] < 80):
        modifiedBoardColors[number] = 5;
        break;
      case (boardColors[number] > 79 && boardColors[number] < 81):
        modifiedBoardColors[number] = 6;
        break;
      default:
        continue;
    }
  }
  return modifiedBoardColors;
}

const Board = () => {
  
  const [boardColors, setBoardColors] = useState(Array.from({length: 100}, () => Math.floor(Math.random() * 61) + 20));
  useEffect(() => {
    let modifiedBoardColors = Newcolorszzz(boardColors);
    setBoardColors(modifiedBoardColors);
  }, [boardColors]);

  const [boardClicks, setBoardClicks] = useState(Array(100).fill(false));
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [next, setNext] = useState(0);

  function RenderSquare(i){
    return(
    <Square id={i} sign={boardColors[i]} squareClicked={boardClicks[i]} onClick={() => handleSquareClick(i)}/>
    );
  }

  function handleSquareClick(i) 
  {
    if(next === 0){
      setFirst(i);
      setSecond(null);
      setBoardColors(boardColors);

      let modifiedBoardClicks = boardClicks;
      modifiedBoardClicks[i] = true;
      setBoardClicks(modifiedBoardClicks);
      setNext(1);
    }else if(next === 1){
      setFirst(first);
      setSecond(i);
      setBoardColors(boardColors);

      let modifiedBoardClicks = boardClicks;
      modifiedBoardClicks[i] = true;
      setBoardClicks(modifiedBoardClicks);
      setNext(2);
      if(
         i === first + 1
      || i === first - 1
      || i === first - 10
      || i === first + 10
      ){
        Transition(i);
      }
      else{
        failedTransition(); // THINK ABOUT THIS
      }
       
    };
  }

  function Transition(i) 
  {
    let modifiedBoardColors = boardColors;
    let helper = modifiedBoardColors[first];
    modifiedBoardColors[first] = boardColors[i];
    modifiedBoardColors[i] = helper;
    setFirst(null);
    setSecond(null);
    setBoardColors(modifiedBoardColors);
    setBoardClicks(Array(100).fill(false));
    setNext(0);
    checkColors(i);
  }
  function failedTransition() 
  {
    setFirst(null);
    setSecond(null);
    setBoardColors(boardColors);
    setBoardClicks(Array(100).fill(false));
    setNext(0);
  }
  function checkColors(i){
    // console.log("0");
    // console.log("kek",i);
    // console.log(boardColors[i]);
    // console.log(boardColors[i+1]);
    // console.log(boardColors[i+2]);
    if(boardColors[i] === boardColors[i + 1] && boardColors[i + 1] === boardColors[i + 2]){
      // console.log("1");
      let modifiedBoardColors = boardColors;
      modifiedBoardColors[i] = null;
      modifiedBoardColors[i + 1] = null;
      modifiedBoardColors[i + 2] = null;
      setBoardColors(modifiedBoardColors);
      setNewColors();
    }else if(boardColors[i] === boardColors[i - 1] && boardColors[i - 1] === boardColors[i - 2]){
      // console.log("2");
      let modifiedBoardColors = boardColors;
      modifiedBoardColors[i] = null;
      modifiedBoardColors[i - 1] = null;
      modifiedBoardColors[i - 2] = null;
      setBoardColors(modifiedBoardColors);
      setNewColors();
    }else if(boardColors[i] === boardColors[i + 10] && boardColors[i + 10] === boardColors[i + 20]){
      // console.log("3");
      let modifiedBoardColors = boardColors;
      modifiedBoardColors[i] = null;
      modifiedBoardColors[i + 10] = null;
      modifiedBoardColors[i + 20] = null;
      setBoardColors(modifiedBoardColors);
      setNewColors();
    }else if(boardColors[i] === boardColors[i - 10] && boardColors[i - 10] === boardColors[i - 20]){
      // console.log("4");
      let modifiedBoardColors = boardColors;
      modifiedBoardColors[i] = null;
      modifiedBoardColors[i - 10] = null;
      modifiedBoardColors[i - 20] = null;
      setBoardColors(modifiedBoardColors);
      setNewColors();
    }
  }

  function setNewColors(){
    let modifiedBoardColors = boardColors;
    for(let number in boardColors){
      if(boardColors[number] === null){
        modifiedBoardColors[number] = Math.floor(Math.random() * 81) + 20;
        console.log(number, modifiedBoardColors[number]);
      }
    }
    setBoardColors(modifiedBoardColors);
    modifiedBoardColors = Newcolorszzz(boardColors);
    setBoardColors(modifiedBoardColors);
  }
  return ( 
    <div className="game">
      <div className="board">
        <div className="row">
          {RenderSquare(0, boardColors[0], false)}
          {RenderSquare(1, boardColors[1], false)}
          {RenderSquare(2, boardColors[2], false)}
          {RenderSquare(3, boardColors[3], false)}
          {RenderSquare(4, boardColors[4], false)}
          {RenderSquare(5, boardColors[5], false)}
          {RenderSquare(6, boardColors[6], false)}
          {RenderSquare(7, boardColors[7], false)}
          {RenderSquare(8, boardColors[8], false)}
          {RenderSquare(9, boardColors[9], false)}
        </div>
        <div className="row">
          {RenderSquare(10, boardColors[10], false)}
          {RenderSquare(11, boardColors[11], false)}
          {RenderSquare(12, boardColors[12], false)}
          {RenderSquare(13, boardColors[13], false)}
          {RenderSquare(14, boardColors[14], false)}
          {RenderSquare(15, boardColors[15], false)}
          {RenderSquare(16, boardColors[16], false)}
          {RenderSquare(17, boardColors[17], false)}
          {RenderSquare(18, boardColors[18], false)}
          {RenderSquare(19, boardColors[19], false)}
        </div>
        <div className="row">
          {RenderSquare(20, boardColors[20], false)}
          {RenderSquare(21, boardColors[21], false)}
          {RenderSquare(22, boardColors[22], false)}
          {RenderSquare(23, boardColors[23], false)}
          {RenderSquare(24, boardColors[24], false)}
          {RenderSquare(25, boardColors[25], false)}
          {RenderSquare(26, boardColors[26], false)}
          {RenderSquare(27, boardColors[27], false)}
          {RenderSquare(28, boardColors[28], false)}
          {RenderSquare(29, boardColors[29], false)}
        </div>
        <div className="row">
          {RenderSquare(30, boardColors[30], false)}
          {RenderSquare(31, boardColors[31], false)}
          {RenderSquare(32, boardColors[32], false)}
          {RenderSquare(33, boardColors[33], false)}
          {RenderSquare(34, boardColors[34], false)}
          {RenderSquare(35, boardColors[35], false)}
          {RenderSquare(36, boardColors[36], false)}
          {RenderSquare(37, boardColors[37], false)}
          {RenderSquare(38, boardColors[38], false)}
          {RenderSquare(39, boardColors[39], false)}
        </div>
        <div className="row">
          {RenderSquare(40, boardColors[40], false)}
          {RenderSquare(41, boardColors[41], false)}
          {RenderSquare(42, boardColors[42], false)}
          {RenderSquare(43, boardColors[43], false)}
          {RenderSquare(44, boardColors[44], false)}
          {RenderSquare(45, boardColors[45], false)}
          {RenderSquare(46, boardColors[46], false)}
          {RenderSquare(47, boardColors[47], false)}
          {RenderSquare(48, boardColors[48], false)}
          {RenderSquare(49, boardColors[49], false)}
        </div>
        <div className="row">
          {RenderSquare(50, boardColors[50], false)}
          {RenderSquare(51, boardColors[51], false)}
          {RenderSquare(52, boardColors[52], false)}
          {RenderSquare(53, boardColors[53], false)}
          {RenderSquare(54, boardColors[54], false)}
          {RenderSquare(55, boardColors[55], false)}
          {RenderSquare(56, boardColors[56], false)}
          {RenderSquare(57, boardColors[57], false)}
          {RenderSquare(58, boardColors[58], false)}
          {RenderSquare(59, boardColors[59], false)}
        </div>
        <div className="row">
          {RenderSquare(60, boardColors[60], false)}
          {RenderSquare(61, boardColors[61], false)}
          {RenderSquare(62, boardColors[62], false)}
          {RenderSquare(63, boardColors[63], false)}
          {RenderSquare(64, boardColors[64], false)}
          {RenderSquare(65, boardColors[65], false)}
          {RenderSquare(66, boardColors[66], false)}
          {RenderSquare(67, boardColors[67], false)}
          {RenderSquare(68, boardColors[68], false)}
          {RenderSquare(69, boardColors[69], false)}
        </div>
        <div className="row">
          {RenderSquare(70, boardColors[70], false)}
          {RenderSquare(71, boardColors[71], false)}
          {RenderSquare(72, boardColors[72], false)}
          {RenderSquare(73, boardColors[73], false)}
          {RenderSquare(74, boardColors[74], false)}
          {RenderSquare(75, boardColors[75], false)}
          {RenderSquare(76, boardColors[76], false)}
          {RenderSquare(77, boardColors[77], false)}
          {RenderSquare(78, boardColors[78], false)}
          {RenderSquare(79, boardColors[79], false)}
        </div>
        <div className="row">
          {RenderSquare(80, boardColors[80], false)}
          {RenderSquare(81, boardColors[81], false)}
          {RenderSquare(82, boardColors[82], false)}
          {RenderSquare(83, boardColors[83], false)}
          {RenderSquare(84, boardColors[84], false)}
          {RenderSquare(85, boardColors[85], false)}
          {RenderSquare(86, boardColors[86], false)}
          {RenderSquare(87, boardColors[87], false)}
          {RenderSquare(88, boardColors[88], false)}
          {RenderSquare(89, boardColors[89], false)}
        </div>
        <div className="row">
          {RenderSquare(90, boardColors[90], false)}
          {RenderSquare(91, boardColors[91], false)}
          {RenderSquare(92, boardColors[92], false)}
          {RenderSquare(93, boardColors[93], false)}
          {RenderSquare(94, boardColors[94], false)}
          {RenderSquare(95, boardColors[95], false)}
          {RenderSquare(96, boardColors[96], false)}
          {RenderSquare(97, boardColors[97], false)}
          {RenderSquare(98, boardColors[98], false)}
          {RenderSquare(99, boardColors[99], false)}
        </div>
      </div>
    </div>
  );
}

export default Board;