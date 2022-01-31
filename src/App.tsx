import React from 'react';
import classnames from 'classnames';
import { library, Icon } from '@fortawesome/fontawesome-svg-core';

import {
  faBackspace,
  faPercent,
  faDivide,
  faTimes,
  faMinus,
  faPlus,
  faExpandAlt,
  faCompressAlt,
} from '@fortawesome/free-solid-svg-icons';

import Operation from './Classes/Operation';
import BinaryOperation from './Classes/BinaryOperation';
import UnaryOperation from './Classes/UnaryOperation';

import Digit from './Components/Digit';
import BinaryOperator, {
  BinaryOperationType,
} from './Components/BinaryOperator';
import UnaryOperator, { UnaryOperationType } from './Components/UnaryOperator';
// import SpecialOperator, {
//   SpecialOperationType,
// } from './Components/SpecialOperator';

import Operator from './Components/Operator';

import './App.css';

library.add(
  faBackspace,
  faPercent,
  faDivide,
  faTimes,
  faMinus,
  faPlus,
  faExpandAlt,
  faCompressAlt
);

enum Type {
  Simple = 'SIMPLE',
  Scientific = 'SCIENTIFIC',
}

// interface Operator {
//   icon: string;
//   operation: BinaryOperationType;
// }

function App(): JSX.Element {
  const [type, setType] = React.useState(Type.Simple);
  // const [result, setResult] = React.useState(0);
  const [operations, setOperations] = React.useState<
    Array<BinaryOperation | UnaryOperation>
  >([]);

  const [number, setNumber] = React.useState(0);
  const [mathOperations, setMathOperations] = React.useState<
    Array<number | Operation>
  >([]);

  const addOperation = React.useCallback(
    (op: Operation) => {
      console.log('Add');
      setMathOperations((prevOperations) => [...prevOperations, number, op]);
      setNumber(0);
      console.log('End');
    },
    [number]
  );

  const result = React.useMemo(() => {
    interface X {
      value: number;
      operator: Operation | null;
    }

    const res = mathOperations.reduce<X>(
      ({ operator, value }, nextValue) => {
        if (typeof nextValue === 'number') {
          if (operator === null) {
            return {
              value: nextValue,
              operator: null,
            };
          }
          if (operator instanceof BinaryOperation) {
            return {
              value: operator.apply(value, nextValue),
              operator: null,
            };
          }
          // if (operator instanceof UnaryOperation) {
          // }
          return { operator, value };
        }
        return {
          value,
          operator: nextValue,
        };

        // if (nextValue instanceof BinaryOperation) {
        // }
      },
      { value: number, operator: null }
    );

    return res.value;
  }, [number, mathOperations]);

  React.useEffect(() => {
    console.log(result);
  }, [result]);

  const addDigit = (d: number) => {
    setNumber((prevNumber) => (prevNumber === 0 ? d : 10 * prevNumber + d));
  };

  const add: BinaryOperationType = (a, b) => a + b;
  const subtract: BinaryOperationType = (a, b) => a - b;
  const multiply: BinaryOperationType = (a, b) => a * b;
  const divide: BinaryOperationType = (a, b) => a / b;
  const percent: UnaryOperationType = (a) => a / 100;
  // const clear: SpecialOperationType = () => {
  //   console.log('lala');
  // };
  // const clearAll: SpecialOperationType = () => {
  //   console.log('lala');
  // };
  // const backspace: SpecialOperationType = () => {
  //   console.log('lala');
  // };
  // const switchType: SpecialOperationType = () => {
  //   console.log('lala');
  // };
  // const addComma: SpecialOperationType = () => {
  //   console.log('lala');
  // };
  // const calculate: SpecialOperationType = () => {
  //   console.log('lala');
  // };

  const boardCells = React.useMemo(() => {
    if (type === Type.Simple) {
      return [
        // <SpecialOperator
        //   operator={{ text: 'C', operation: clear }}
        //   addOperation={addOperation}
        // />,
        // <SpecialOperator
        //   operator={{ icon: 'backspace', operation: backspace }}
        //   addOperation={addOperation}
        // />,
        // <UnaryOperator
        //   operator={{ icon: 'percent', operation: percent }}
        //   addOperation={addOperation}
        // />,
        // <BinaryOperator
        //   operator={{ icon: 'divide', operation: divide }}
        //   addOperation={addOperation}
        // />,
        <Digit digit={7} addDigit={addDigit} />,
        <Digit digit={8} addDigit={addDigit} />,
        <Digit digit={9} addDigit={addDigit} />,
        // <BinaryOperator
        //   operator={{ icon: 'times', operation: multiply }}
        //   addOperation={addOperation}
        // />,
        <Digit digit={4} addDigit={addDigit} />,
        <Digit digit={5} addDigit={addDigit} />,
        <Digit digit={6} addDigit={addDigit} />,
        // <BinaryOperator
        //   operator={{ icon: 'minus', operation: subtract }}
        //   addOperation={addOperation}
        // />,
        <Digit digit={1} addDigit={addDigit} />,
        <Digit digit={2} addDigit={addDigit} />,
        <Digit digit={3} addDigit={addDigit} />,
        <Operator
          repr={<Icon icon="plus" />}
          icon="plus"
          operation={new BinaryOperation(add, <Icon icon="plus" />)}
          addOperation={addOperation}
        />,
        // <SpecialOperator
        //   operator={{ icon: 'expand-alt', operation: switchType }}
        //   addOperation={addOperation}
        // />,
        <Digit digit={0} addDigit={addDigit} />,
        // <SpecialOperator
        //   operator={{ text: ',', operation: addComma }}
        //   addOperation={addOperation}
        // />,
        // <SpecialOperator
        //   operator={{ text: '=', operation: calculate }}
        //   addOperation={addOperation}
        // />,
      ];
    }
    if (type === Type.Scientific) {
      return [];
    }
    return [];
  }, [addOperation, type]);

  return (
    <div className="Calculator">
      <section className="History" />
      <section className="Operation">
        <p>
          {mathOperations.map((value) =>
            typeof value === 'number' ? value : value.repr
          )}
        </p>
      </section>
      <section className="Result">
        <p>{result}</p>
      </section>
      <section
        className={classnames('Board', {
          'Board--Simple': type === Type.Simple,
          'Board--Scientific': type === Type.Scientific,
        })}
      >
        {boardCells.map((Cell) => (
          <div className={classnames('Board-Cell')}>{Cell}</div>
        ))}
      </section>
    </div>
  );
}

export default App;
