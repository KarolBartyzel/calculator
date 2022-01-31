import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import './index.css';

export type UnaryOperationType = (a: number) => number;

export type UnaryOperatorType = {
  icon: IconName;
  operation: UnaryOperationType;
};

function UnaryOperator({
  operator,
  addOperation,
}: {
  operator: UnaryOperatorType;
  addOperation: (operation: UnaryOperationType) => void;
}): JSX.Element {
  function onClick() {
    addOperation(operator.operation);
  }

  return (
    <button
      type="button"
      className={classnames('Operator', 'Operator-Unary')}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={operator.icon} />
    </button>
  );
}

export default UnaryOperator;
