import chroma from "chroma-js";
import { get, toPath, isNil } from "lodash-es";
/**
 * Ported from https://www.codeproject.com/Articles/1221341/The-Vogel-Spiral-Phenomenon
 * @param {number} n amount of elements
 * @param {number} size diameter of a circle
 * @param {number} offset change the rotation of the spirals
 * @returns {Array<Record<'x' | 'y', number>>}
 */
export const distributeRandomPoints = (n, size, offset = 0) => {
  const cc = size / 2;
  const sc = 140;
  return Array.from({ length: n })
    .fill(0)
    .map((_, i) => {
      const t = Math.PI * (1 - Math.sqrt(3)) * i + offset;
      const r = Math.sqrt(i / n);
      const x = sc * r * Math.cos(t) + cc;
      const y = sc * r * Math.sin(t) + cc;
      return { x, y };
    });
};

/**
 * Decimal Rounding of a random number
 * @param {number} d
 * @returns {number}
 */
export const randomNumber = (min, max) => Math.random() * (max - min) + min;
export const randomRange = (min, max) => Math.floor(randomNumber(min, max));
export const randomBool = (percentile = 1 / 2) => Math.random() < percentile;

export const roundRandom = (d = 2) => Math.floor(Math.random() * Math.pow(10, d)) / Math.pow(10, d);

export const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


export const randomItem = (array, probability = 1) =>
  array[randomRange(0, array.length)] * probability;

export const jprint = (input, spacing = 2) => {
  console.log(JSON.stringify(input, null, spacing));
};

export const compose = (...funcs) => {
  const index = funcs.findIndex((f) => typeof f !== "function");
  if (index !== -1) {
    console.log("[compose] error: " + JSON.stringify(funcs[index]) + " is not a function");
    return;
  }
  return funcs.reduceRight(
    (curr, acc) =>
      (...args) =>
        acc(curr(...args))
  );
};

export function memoize(f) {
  const memo = (window["memo_" + f.name] = {});
  return (...args) => {
    const key = args.join("");
    if (!memo.hasOwnProperty(key)) {
      memo[key] = f.apply(null, args);
    }
    return memo[key];
  };
}

export const getCurrentTimeFormatted = () => {
  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const milliseconds = currentTime.getMilliseconds();
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
};

export function joinPath(path1, path2) {
  return [...toPath(path1), ...toPath(path2)];
}

export function applyRecipe(draft, field, recipe) {
  if (typeof recipe === "function") {
    const currentValue = get(draft, field);
    // Apply the recipe to the current value of the field
    const newValue = recipe(currentValue);
    // If it's a pure function, update the draft with the new value
    if (!isNil(newValue)) {
      draft[field] = newValue;
    }
    // Otherwise, assume it mutated the draft directly
  } else {
    // If received a value, just set that field in the draft
    draft[field] = recipe;
  }
}
