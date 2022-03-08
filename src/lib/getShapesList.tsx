import chroma from "chroma-js";
import seedrandom from "seedrandom";
import SimplexNoise from "simplex-noise";
import { Setting, ShapeSetting } from "./helpers";
import { ShapeProps } from "../components/ShapeIcon";

export function getShapesList({ settings, shapes }: { settings: Setting; shapes: ShapeSetting[] }) {
  const { height, width, cellSize, strokeWidth, seed = "100" } = settings;
  const shapesList: ShapeProps[] = [];
  let random = seedrandom(seed);
  const scaleSimplex = new SimplexNoise(seed);
  const rotateSimplex = new SimplexNoise(seed);

  for (const shape of shapes) {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const dart = random();
        const scale = Math.abs(scaleSimplex.noise2D(x / width, y / height));
        const rotate = 180 * rotateSimplex.noise2D(x / width, y / height);
        const color = '#' + Math.floor(random()*16777215).toString(16).padStart(6, "0");
        if (dart < shape.odds / 100) {
          shapesList.push({
            x,
            y,
            name: shape.name,
            size: cellSize,
            strokeWidth,
            color,
            scale: shape.scale && scale || 0,
            rotate: shape.rotate && rotate || 0,
          });
        }
      }
    }
  }
  return shapesList;
}
