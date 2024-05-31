import * as React from 'react'
import {
  ArcBottomLeft,
  Circle,
  CircleInverse,
  Line,
  LinePlus,
  LinesVertical,
  RectFill,
  TriangleUp
} from './Shapes'

export const SIZE = 20

export const shapesMap: Record<string, any> = {
  circle: Circle,
  circleInverse: CircleInverse,
  rectFill: RectFill,
  linePlus: LinePlus,
  arcBottomLeft: ArcBottomLeft,
  linesVertical: LinesVertical,
  triangleUp: TriangleUp,
  line: Line
}

export const shapeNames = Object.keys(shapesMap)

export interface ShapeProps {
  name: string
  color: string
  x?: number
  y?: number
  rotate?: number
  scale?: number
  size: number
  strokeWidth: number
}

export function Shape({
  name,
  x = 0,
  y = 0,
  rotate,
  scale,
  color = 'currentColor',
  size,
  strokeWidth
}: ShapeProps) {
  const xFull = x * size
  const yFull = y * size
  let transform = `translate(${xFull},${yFull})`
  if (rotate || scale) {
    transform = `translate(${xFull + size / 2},${yFull + size / 2})`
    if (rotate) {
      transform += ` rotate(${rotate})`
    }
    if (scale) {
      transform += ` scale(${scale})`
    }
    transform += ` translate(${-size / 2},${-size / 2})`
  }

  const Component = shapesMap[name]

  return Component ? (
    <Component
      size={size}
      fill={color}
      stroke={color}
      strokeWidth={strokeWidth}
      transform={transform}
      // x={0}
      // y={0}
    />
  ) : null
}

export interface ShapeIconProps {
  name: keyof typeof shapesMap
  color: string
  size: number
  viewBox?: string
  strokeWidth?: number
  transform?: string
}

export const ShapeIcon = ({
  color = '#000000',
  name,
  size = SIZE,
  viewBox
}: ShapeIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox || `0 0 ${SIZE + 2} ${SIZE + 2}`}
      aria-label={name}
      color={color}
      overflow="visible"
    >
      <Shape
        name={name}
        x={0}
        y={0}
        color={color}
        size={SIZE}
        strokeWidth={1}
      />
    </svg>
  )
}
