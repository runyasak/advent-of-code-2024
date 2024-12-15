import { expect, test } from "vitest";
import { readFileSync } from "fs";

function totalDistance(textFile: string) {
  const arr1: number[] = [];
  const arr2: number[] = [];

  textFile.split("\n").forEach((text) => {
    const splitText = text.split("   ");
    arr1.push(parseInt(splitText[0], 10));
    arr2.push(parseInt(splitText[splitText.length - 1], 10));
  });

  const sortedArr1 = arr1.toSorted((a, b) => a - b);
  const sortedArr2 = arr2.toSorted((a, b) => a - b);

  return sortedArr1.reduce(
    (acc, cur, index) => acc + Math.abs(cur - sortedArr2[index]),
    0
  );
}

test("should return 11 from example", () => {
  const text = readFileSync("./day-1/example.txt", "utf8");
  expect(totalDistance(text)).toBe(11);
});

test("Part 1: should return 2430334 from input", () => {
  const text = readFileSync("./day-1/input.txt", "utf8");
  expect(totalDistance(text)).toBe(2430334);
});
