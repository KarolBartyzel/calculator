import { Icon } from '@fortawesome/fontawesome-svg-core';

export type BinaryOperationFunction = (a: number, b: number) => number;
export type UnaryOperationFunction = (a: number) => number;
export default interface Operation {
  repr: string | Icon;
  apply: ((a: number, b: number) => number) | ((a: number) => number);
}
