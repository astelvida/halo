import chroma from 'chroma-js'
import seedrandom from 'seedrandom'
import SimplexNoise from 'simplex-noise'
import { Setting, ShapeSetting } from './helpers'
import { ShapeProps } from '../components/ShapeIcon'
import { randomColor } from '@chakra-ui/theme-tools'
import Values from 'values.js'
console.log(new Values('#faa'))
export function getShapesList({
  settings,
  shapes
}: {
  settings: Setting
  shapes: ShapeSetting[]
}) {
  const { height, width, cellSize, strokeWidth, seed = '100' } = settings
  const shapesList: ShapeProps[] = []
  let random = seedrandom(seed)
  const scaleSimplex = new SimplexNoise(seed)
  const rotateSimplex = new SimplexNoise(seed)

  const shapesCount = {}
  const shapesColors = {}

  for (const shape of shapes) {
    shapesColors[shape.name] = shape.color
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const dart = random()
        const scale = Math.abs(scaleSimplex.noise2D(x / width, y / height))
        const rotate = 180 * rotateSimplex.noise2D(x / width, y / height)

        // console.log(shades[y * width + x]?.hex)

        if (dart < shape.odds / 100) {
          if (shapesCount[shape.name] === undefined) {
            shapesCount[shape.name] = 0
          }
          shapesCount[shape.name]++
          shapesList.push({
            x,
            y,
            name: shape.name,
            size: cellSize,
            strokeWidth,
            color: shape.color,
            scale: (shape.scale && scale) || 0,
            rotate: (shape.rotate && rotate) || 0
          })
        }
      }
    }
  }

  const shapesShades = {}
  for (let shape in shapesCount) {
    shapesShades[shape] = new Values(shapesColors[shape]).all(
      Math.ceil(100 / shapesCount[shape])
    )
    console.log(shapesShades[shape])
  }
  const shapeCounter = {}
  for (let i = 0; i < shapesList.length; i++) {
    const { name } = shapesList[i]
    if (shapeCounter[name] === undefined) {
      shapeCounter[name] = 0
    }

    shapesList[i].color = '#' + shapesShades[name][shapeCounter[name]]?.hex
    shapeCounter[name]++
  }

  console.log(shapesList)

  return shapesList
}

// let shades
// if (shape.isShadesColor) {
//   shades = new Values(shape.color)
// }

// console.log(shades)

// console.log(shades)
// console.log(y * width + x)
// const shapeColor = shape.isShadesColor
//   ? `#${shades.shade(y * width + x).hex}`
//   : shape.color
