import React, { useState, useEffect} from 'react';

export default function Game() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Naciśnięto ${count} razy`;
  });

  return (
    <div>
      <p>Naciśnięto {count} razy</p>
      <button onClick={() => setCount(count + 1)}>
        Naciśnij mnie
      </button>
    </div>
  );
}
