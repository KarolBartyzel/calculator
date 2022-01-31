import React from 'react';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconName } from '@fortawesome/fontawesome-svg-core';

import './index.css';

export type SpecialOperationType = () => void;

export interface SpecialOperatorType {
  icon?: IconName;
  text?: string;
  operation: SpecialOperationType;
}

function SpecialOperator({
  operator,
  addOperation,
}: {
  operator: SpecialOperatorType;
  addOperation: (operation: SpecialOperationType) => void;
}): JSX.Element {
  function onClick() {
    addOperation(operator.operation);
  }

  return (
    <button
      type="button"
      className={classnames('Operator', 'Operator-Special')}
      onClick={onClick}
    >
      {operator.icon && <FontAwesomeIcon icon={operator.icon} />}
      {operator.text}
    </button>
  );
}

export default SpecialOperator;
