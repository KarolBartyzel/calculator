import { Icon } from '@fortawesome/fontawesome-svg-core';
import Operation, { BinaryOperationFunction } from './Operation';

export default class BinaryOperation implements Operation {
  public repr: string | Icon;

  private f: BinaryOperationFunction;

  constructor(f: BinaryOperationFunction, repr: string | Icon) {
    this.f = f;
    this.repr = repr;
  }

  apply = (a: number, b: number): number => {
    return this.f(a, b);
  };
}
