import { Icon } from '@fortawesome/fontawesome-svg-core';
import Operation, { UnaryOperationFunction } from './Operation';

export default class BinaryOperation implements Operation {
  public repr: string | Icon;

  private f: UnaryOperationFunction;

  constructor(f: UnaryOperationFunction, repr: string | Icon) {
    this.f = f;
    this.repr = repr;
  }

  apply = (a: number): number => {
    return this.f(a);
  };
}
