import { sample } from 'lodash-es'
import { nanoid } from 'nanoid'
import { randomBool, randomRange } from './utils'
import { shapeNames } from '../components/ShapeIcon'
import { randomColor } from '@chakra-ui/theme-tools'

export const noop = () => ({})

export interface ShapeSetting {
  id: string
  name: string
  odds: number
  scale: boolean
  rotate: boolean
  color: string
  isRandomColor: boolean
  isShadesColor: boolean
}

export interface Setting {
  width: number
  height: number
  cellSize: number
  strokeWidth: number
  backgroundColor: string
  seed?: string
}

export const randomShape = (): ShapeSetting => ({
  id: nanoid().toString(),
  name: sample(shapeNames) || 'circle',
  odds: randomRange(0, 50),
  scale: randomBool(),
  rotate: randomBool(),
  color: randomColor(),
  isRandomColor: randomBool(),
  isShadesColor: randomBool()
})

export type SettingName = 'width' | 'height' | 'cellSize' | 'strokeWidth'
export interface SliderSetting {
  name: SettingName
  label: string
  min: number
  max: number
  step?: number
}

export const rangeFieldsConfig: SliderSetting[] = [
  { label: 'Width', name: 'width', min: 1, max: 16, step: 1 },
  { label: 'Height', name: 'height', min: 1, max: 16, step: 1 },
  { label: 'Cell Size', name: 'cellSize', min: 4, max: 64, step: 4 },
  { label: 'Stroke Width', name: 'strokeWidth', min: 1, max: 10, step: 1 }
]

export const oddsFieldConfig = {
  label: 'Odds',
  name: 'odds',
  min: 1,
  max: 100,
  step: 1
}

export const initialShapes: ShapeSetting[] = [
  {
    id: 'efg',
    name: 'rectFill',
    odds: 10,
    scale: false,
    rotate: true,
    color: '#fafaaa',
    isRandomColor: false
  },
  {
    id: 'qrs',
    name: 'circle',
    odds: 30,
    scale: false,
    rotate: true,
    color: '#fafa',
    isRandomColor: true
  }
]

export const initialSettings: Setting = {
  width: 16,
  height: 9,
  cellSize: 36,
  strokeWidth: 2,
  backgroundColor: '#555555',
  seed: '100'
}
