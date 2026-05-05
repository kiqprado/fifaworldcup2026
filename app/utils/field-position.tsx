export type OnFieldOrientation = 'portrait' | 'landscape'

export interface Position {
  x: number
  y: number
}

export function TransformFieldPosition(position: Position, orientation: OnFieldOrientation): Position {
  if(orientation === 'landscape') {
    return {
      x: position.y,
      y: 100 - position.x
    }
  }

  return position
}