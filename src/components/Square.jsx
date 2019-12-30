import React from 'react';

export default function Square(props) {
  let sign;
  const number = props.sign;
  switch (true){
    case (number === 0):
      sign = <i className="fas fa-heart redHeart"></i>;
      break;
    case (number === 1):
      sign = <i className="fas fa-play greenTriangle"></i>;
      break;
    case (number === 2):
      sign = <i className="fas fa-circle orangeCircle"></i>;
      break;
    case (number === 3):
      sign = <i className="fas fa-square blueSquare"></i>;
      break;
    case (number === 4):
      sign = <i className="fas fa-star yellowstar"></i>;
      break;
    case (number === 5):
      sign = <i className="fas fa-certificate purpleCertificate"></i>
      break;
    case (number === 6):
      sign = <i className="fas fa-crown gradientCrown"></i>;
      break;
    default:
      sign = <i className="fas fa-heart redHeart"></i>;
  }

  return (
    <button id={props.id} className={"square " + (props.squareClicked ? "clicked" : "")} onClick={props.onClick}>
      {sign} {props.squareClicked}
    </button>
  );
}