import React from 'react';
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/core';

// const bounce = keyframes`
//   from, 20%, 53%, 80%, to {
//     transform: translate3d(0,0,0);
//   }

//   40%, 43% {
//     transform: translate3d(0, -30px, 0);
//   }

//   70% {
//     transform: translate3d(0, -15px, 0);
//   }

//   90% {
//     transform: translate3d(0,-4px,0);
//   }
// css={css`animation: ${bounce} 1s ease infinite;`} 
// `
const moveColor = keyframes`
from {top: 0px;}
to {top: 100px;}
`

const styles = css`
  position: relative;
  animation: ${moveColor} 2s infinite;
`

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
    <button id={props.id} className={"square " + (props.squareClicked ? "clicked" : "")} css={css`${props.styles}`} onClick={ (event) => props.onClick(event)}>
      {sign} {props.squareClicked}
    </button>
  );
}
