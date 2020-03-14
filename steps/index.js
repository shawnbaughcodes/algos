export const steps = (n, row = 0, stair = "") => {
  if (n === row) return;
  if (n === stair.length) {
    steps(n, row + 1);
  }
  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  stair(n, row, stair);
};
