import { useState, useEffect, useRef, useReducer } from "react";
import chroma from "chroma-js";
import { randomNumber } from "../lib/utils";

const sliders:any = [
  {
    label: "Width",
    id: "width",
    min: 0,
    max: 64,
    step: 1,
  },
  {
    label: "Height",
    id: "height",
    min: 1,
    max: 64,
    step: 1,
  },
  {
    label: "Grid Cell Size",
    id: "cellSize",
    min: 4,
    max: 256,
    step: 4,
  },
];

const addSvgThing = (svgThing:any) => ({
  name: svgThing.name, // "linesHorizontal", "rect",
  odds: Math.round(randomNumber(0, 30)),
  offset: false,
  noiseScale: false,
  rotate: false,
});

const svgThingSlider = {
  label: "Odds",
  id: "svgThing",
  min: 0,
  max: 101,
  step: 1,
};

const initialState: any = {
  backgroundColor: "rgba(0, 0, 27, 1)",
  seed: "koda",
  cellSize: 24,
  height: 8,
  width: 10,
  strokeWidth: [1, 3],
  // strokeWidthMin: 1,
  // strokeWidthMax: 10,
};

let angles30 = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360];
let angles45 = [0, 45, 90, 135, 180, 225, 270, 315, 360];
let angles = angles45;

const calcuateTransform = (cell:any) => {
  const { x, y, size, scale, rotate } = cell;

  const xPos = x * size
  const yPos = y * size

  const midOffset = `translate(-${size / 2},-${size / 2})`;
  let expression = "";

  // if (options.offset) {
  //   const offset = Number(options.offset) || size / 2;
  //   expression = `translate(${offset},${offset})`;
  // }
  if (scale) {
    // expression += `translate(${xPos},${yPos})`;
    let randomScale = randomNumber(0.5, 1.5);
    expression += `scale(${randomScale})`;
    // expression += `translate(-${size / 2},-${size / 2})`;
  }
  if (rotate) {
    // const degress = angles[randomNumber(0, angles.length-1)]
    // expression += `translate(${x},${y})`
    // expression += `rotate(${randomNumber(-90, 90)})`;
    // expression += `translate(-${size / 2},-${size / 2})`
    expression += `rotate(${randomNumber(0, 360)},${xPos + size / 2},${yPos + size / 2})`;
  }
  return expression;
};

function makeGrid2D(rows:any, cols:any, size:any) {
  const grid = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid.push({ x: j, y: i, size, color: chroma.random(), type: "" });
    }
  }
  return grid;
}

export default function App() {
  const [settings, setSettings] = useState({ ...initialState });
  const seedRef = useRef("omg");

  // const reSeed = (e:any) => {
  //   e.preventDefault();
  //   seedRef.current.value = Math.random() * 10000;
  // };

  const changeSetting = (id:any) => (e:any) => {
    e.preventDefault();
    setSettings((prevState:any) => ({ ...prevState, [id]: e.target.value }));
  };

  const { height, width, cellSize } = settings;

  const grid = makeGrid2D(height, width, cellSize);

  return (
    <div className="flex h-screen bg-pink-200">
      <div className="w-96 max-w-96 h-full px-4 py-6 flex-none bg-slate-200">
        <div className="flex flex-row items-center">
          <label htmlFor="seed">Seed</label>
          <input
            ref={seedRef as any}
            id="seed"
            type="text"
            value={settings.seed}
            onChange={changeSetting("seed")}
          />
          Refresh
        </div>

        <div className="flex flex-col justify-center space-x-2">
          {sliders.map(({ id, label, ...props }:any) => (
            <div key={id}>
              <label htmlFor={id}>{label}</label>
              <input type="range" value={settings[id]} onChange={changeSetting(id)} {...props} />
              <input
                type="number"
                id={id}
                value={settings[id]}
                onChange={changeSetting(id)}
                {...props}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex-grow w-auto h-screen min-h-fit overflow-y-auto bg-white">
        <main className="block">
          <svg
            className="block relative max-w-full mx-auto mt-0 overflow-visible bg-slate-800"
            width={width * cellSize}
            viewBox={`0 0 ${width * cellSize} ${height * cellSize}`}
          >
            <symbol id="circle" width="20" height="20" viewBox="0 0 22 22">
              <circle cx="10" cy="10" r="10" fill="none" />
            </symbol>
            <symbol id="rect" width="20" height="20"  viewBox="0 0 22 22">
              <rect x="0" y="0" width="20" height="20" fill="none" />
            </symbol>
            <symbol id="circleInverse" width="20" height="20"  viewBox="0 0 22 22">
              <rect height={20} width={20} rx={0} ry={0} />
              <circle
                cx={10}
                cy={10}
                r={10}
                stroke="currentColor"
                strokeLinecap="round"
                fill="none"
              />
            </symbol>
            <symbol id="circleQuad" width="20" height="20"  viewBox="0 0 22 22">
              <g strokeLinecap="round" fill="none">
                <circle cx={5} cy={5} r={5} />
                <circle cx={5} cy={15} r={5} />
                <circle cx={15} cy={5} r={5} />
                <circle cx={15} cy={15} r={5} />
              </g>
            </symbol>

            {/* <line x1="0" x2="16" y1="0" y2="0" stroke-width="1" stroke="black" stroke-linecap="square"></line> */}
            <symbol id="linesVertical" width="20" height="20" viewBox="0 0 22 22">
              <g strokeLinecap="square">
                <line x1="0" x2="0" y1="0" y2="20"></line>
                <line x1="2.5" x2="2.5" y1="0" y2="20"></line>
                <line x1="5" x2="5" y1="0" y2="20"></line>
                <line x1="7.5" x2="7.5" y1="0" y2="20"></line>
                <line x1="10" x2="10" y1="0" y2="20"></line>
                <line x1="12.5" x2="12.5" y1="0" y2="20"></line>
                <line x1="12.5" x2="12.5" y1="0" y2="20"></line>
                <line x1="15" x2="15" y1="0" y2="20"></line>
                <line x1="17.5" x2="17.5" y1="0" y2="20"></line>
                <line x1="20" x2="20" y1="0" y2="20"></line>
              </g>
            </symbol>

            {grid.map((cell, i) => {
              return (
                <use
                  key={i}
                  href="#rect"
                  x={cell.x * cellSize}
                  y={cell.y * cellSize}
                  width={cellSize}
                  height={cellSize}
                  stroke={cell.color.toString()}
                  transform={calcuateTransform({ ...cell, scale: false, rotate: false })}
                />
              );
            })}
          </svg>
        </main>
      </div>
    </div>
  );
}
function roundNumber(arg0: number, arg1: number) {
  throw new Error("Function not implemented.");
}

