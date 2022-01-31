import React from 'react';

import './index.css';

function Digit({
  digit,
  addDigit,
}: {
  digit: number;
  addDigit: (d: number) => void;
}): JSX.Element {
  function onClick() {
    addDigit(digit);
  }

  return (
    <button type="button" className="Digit" onClick={onClick}>
      {digit}
    </button>
  );
}

export default Digit;
