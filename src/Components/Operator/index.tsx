import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon, IconName } from '@fortawesome/fontawesome-svg-core';

import Operation from '../../Classes/Operation';

import './index.css';

function Operator({
  repr,
  operation,
  addOperation,
}: {
  repr: string | Icon;
  operation: Operation;
  addOperation: (operation: Operation) => void;
}): JSX.Element {
  function onClick() {
    addOperation(operation);
  }

  return (
    <button
      type="button"
      className={classnames('Operator', 'Operator-Binary')}
      onClick={onClick}
    >
      {repr}
    </button>
  );
}

export default Operator;
