import { expect, test } from "vitest";
import { readFileSync } from "fs";

function parseTextFileToArrays(textFile: string) {
  const arr1: number[] = [];
  const arr2: number[] = [];

  textFile.split("\n").forEach((text) => {
    const splitText = text.split("   ");
    arr1.push(parseInt(splitText[0], 10));
    arr2.push(parseInt(splitText[splitText.length - 1], 10));
  });

  return {
    arr1,
    arr2,
  };
}

function totalDistance(textFile: string) {
  const { arr1, arr2 } = parseTextFileToArrays(textFile);

  const sortedArr1 = arr1.toSorted((a, b) => a - b);
  const sortedArr2 = arr2.toSorted((a, b) => a - b);

  return sortedArr1.reduce(
    (acc, cur, index) => acc + Math.abs(cur - sortedArr2[index]),
    0
  );
}

function totalSimilarityScore(textFile: string) {
  const { arr1, arr2 } = parseTextFileToArrays(textFile);

  return arr1.reduce(
    (acc, cur, index) =>
      acc + cur * arr2.filter((value) => value === cur).length,
    0
  );
}

test("Part 1: should return 11 from example", () => {
  const text = readFileSync("./day-1/example.txt", "utf8");
  expect(totalDistance(text)).toBe(11);
});

test("Part 1: should return 2430334 from input", () => {
  const text = readFileSync("./day-1/input.txt", "utf8");
  expect(totalDistance(text)).toBe(2430334);
});

test("Part 2: should return 31 from example", () => {
  const text = readFileSync("./day-1/example.txt", "utf8");
  expect(totalSimilarityScore(text)).toBe(31);
});

test("Part 2: should return 28786472 from input", () => {
  const text = readFileSync("./day-1/input.txt", "utf8");
  expect(totalSimilarityScore(text)).toBe(28786472);
});
