import React, { useState, useEffect} from 'react';
import MainBoard from './MainBoard.jsx'

export default function Game() {
  //const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = `Naciśnięto ${count} razy`;
  // });

  return (
    <div className="game">
      {/* <p>Naciśnięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Naciśnij mnie
      </button> */}
      <MainBoard />
    </div>
  );
}
