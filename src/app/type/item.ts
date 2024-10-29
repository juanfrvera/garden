export interface Item {
  position: Coordinate;
  size: Coordinate;
  active?: boolean;
}

export interface Coordinate {
  x: number;
  y: number;
}
