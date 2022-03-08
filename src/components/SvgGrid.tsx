import * as React from "react";

import { Setting } from "../lib/helpers";
import { Shape, ShapeProps } from "./ShapeIcon";

interface Props {
  settings: Setting
  shapesList: ShapeProps[]
}

export const SvgGrid = ({settings, shapesList} : Props) => {
  const { height, width, cellSize, backgroundColor } = settings;

  return (
    <svg
      id="svg-grid"
      width={width * cellSize}
      viewBox={`0 0 ${width * cellSize} ${height * cellSize}`}
      style={{
        backgroundColor,
        overflow: "visible",
        display: 'block',
        position: 'relative',
      }}
    >
      {shapesList.map(({ name, x, y, size, color, strokeWidth, scale, rotate }, index) => {
        return (
          <Shape
            key={index}
            name={name}
            x={x}
            y={y}
            size={size}
            strokeWidth={strokeWidth}
            color={color}
            scale={scale}
            rotate={rotate}
          />
        );
      })}
    </svg>
  );
};
