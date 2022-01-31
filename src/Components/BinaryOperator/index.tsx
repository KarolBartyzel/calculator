import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import './index.css';

interface IBinaryOperator {
  icon: IconName;
  operation: BinaryOperationType;
}

export type BinaryOperationType = (a: number, b: number) => number;

function BinaryOperator({
  operator,
  addOperation,
}: {
  operator: IBinaryOperator;
  addOperation: (operation: BinaryOperationType) => void;
}): JSX.Element {
  function onClick() {
    addOperation(operator.operation);
  }

  return (
    <button
      type="button"
      className={classnames('Operator', 'Operator-Binary')}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={operator.icon} />
    </button>
  );
}

export default BinaryOperator;
