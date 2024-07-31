import * as React from 'react'
import { ShapeProps } from './ShapeIcon'

export const SIZE = 20

export interface SvgShapeProps {
  size?: number
  strokeWidth?: number
  stroke?: string
  fill?: string
  transform?: string
  x?: number
  y?: number
}

export const Circle = ({
  x = 0,
  y = 0,
  size = SIZE,
  stroke,
  strokeWidth = 1,
  transform = ''
}: SvgShapeProps) => (
  <circle
    cx={size / 2}
    cy={size / 2}
    r={size / 2}
    strokeWidth={strokeWidth}
    stroke={stroke}
    transform={transform}
    strokeLinecap="round"
    fill="none"
  />
)

export const RectFill = ({
  x = 0,
  y = 0,
  size = SIZE,
  fill,
  stroke,
  strokeWidth = 0,
  transform = ''
}: SvgShapeProps) => (
  <rect
    height={size}
    width={size}
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    transform={transform}
  />
)

export const Line = ({
  size = SIZE,
  stroke,
  strokeWidth = 1,
  transform
}: SvgShapeProps) => (
  <line
    x1={0}
    x2={size}
    y1={size / 2}
    y2={size / 2}
    transform={transform}
    strokeWidth={strokeWidth}
    stroke={stroke}
    strokeLinecap="square"
  />
)

export const LineVertical = ({
  size = SIZE,
  stroke,
  strokeWidth = 1,
  transform
}: SvgShapeProps) => (
  <line
    x1={size / 2}
    x2={size / 2}
    y1={0}
    y2={size}
    strokeWidth={strokeWidth}
    stroke={stroke}
    strokeLinecap="square"
    transform={transform}
  />
)

export const LinePlus = ({
  size = SIZE,
  stroke,
  strokeWidth = 1,
  transform
}: SvgShapeProps) => (
  <g
    transform={transform}
    strokeWidth={strokeWidth}
    stroke={stroke}
    strokeLinecap="square"
  >
    <line x1={0} x2={size} y1={size / 2} y2={size / 2} />
    <line x1={size / 2} x2={size / 2} y1={0} y2={size} />
  </g>
)

export const CircleInverse = ({
  size = SIZE,
  fill,
  strokeWidth = 1,
  transform
}: SvgShapeProps) => (
  <g transform={transform}>
    <rect x={0} y={0} height={size} width={size} fill={fill} strokeWidth={0} />
    <circle
      cx={size / 2}
      cy={size / 2}
      r={size / 2}
      strokeWidth={strokeWidth}
      stroke="currentColor"
      strokeLinecap="round"
      fill="none"
    />
  </g>
)

export const ArcBottomLeft = ({
  size = SIZE,
  strokeWidth = 1,
  stroke,
  transform
}: SvgShapeProps) => (
  <path
    d={`M 0 ${size / 2}  A ${size / 2} ${size / 2} 0 0 0 ${
      size / 2
    } ${size} V ${size / 2} Z`}
    stroke={stroke}
    strokeWidth={strokeWidth}
    fill="none"
    transform={transform}
  />
)

const LINES = 8
export const LinesVertical = ({
  size = SIZE,
  stroke,
  strokeWidth = 1,
  transform = '',
  x = 0,
  y = 0
}: SvgShapeProps) => {
  const sizeUnit = size / 8
  return (
    <g
      transform={transform}
      strokeWidth={strokeWidth}
      strokeLinecap="square"
      stroke={stroke}
    >
      <line x1={x} x2={x} y1={y} y2={y + size} />
      <line x1={x + sizeUnit * 1} x2={x + sizeUnit * 1} y1={y} y2={y + size} />
      <line x1={x + sizeUnit * 2} x2={x + sizeUnit * 2} y1={y} y2={y + size} />
      <line x1={x + sizeUnit * 3} x2={x + sizeUnit * 3} y1={y} y2={y + size} />
      <line x1={x + sizeUnit * 4} x2={x + sizeUnit * 4} y1={y} y2={y + size} />
      <line x1={x + sizeUnit * 5} x2={x + sizeUnit * 5} y1={y} y2={y + size} />
      <line x1={x + sizeUnit * 5} x2={x + sizeUnit * 5} y1={y} y2={y + size} />
      <line x1={x + sizeUnit * 6} x2={x + sizeUnit * 6} y1={y} y2={y + size} />
      <line x1={x + sizeUnit * 7} x2={x + sizeUnit * 7} y1={y} y2={y + size} />
      <line x1={x + sizeUnit * 8} x2={x + sizeUnit * 8} y1={y} y2={y + size} />
    </g>
  )
}

export const TriangleUp = ({
  size = SIZE,
  stroke,
  strokeWidth = 1,
  transform = ''
}: SvgShapeProps) => {
  return (
    <polygon
      points={`0,${size} ${size},${size} ${size / 2},0`}
      fill="none"
      strokeWidth={strokeWidth}
      stroke={stroke}
      strokeLinecap="square"
      transform={transform}
    />
  )
}
