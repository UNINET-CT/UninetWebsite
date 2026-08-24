export type CircleState = 'unobserved' | 'green' | 'red';

export interface Circle {
  id: number;
  x: number;
  y: number;
  speed: number;
  state: CircleState;
}
