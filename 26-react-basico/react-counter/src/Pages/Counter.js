import React, { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [contador, setContador] = useState(0);

  const handleOnClick = (operador) => {
    let novoContador = operador === '+' ? contador + 1 : contador - 1;

    setContador(novoContador);
  };

  return (
    <div className='counter'>
      <button className='button' onClick={() => handleOnClick('-')}>
        −
      </button>
      <div className='input-wrapper'>
        <input className='input' value={contador} />
      </div>
      <button className='button' onClick={() => handleOnClick('+')}>
        +
      </button>
    </div>
  );
};

export default Counter;
