export const maxChar = (char) => {
  let charObject = {};
  let max = 0;
  let maxChar = '';

  for (let c of char) {
    if (!charObject[c]) {
      charObject[c] = 0;
    }
    let newCount = charObject[c]++;
    if (newCount > max) {
      max = newCount;
      maxChar = c;
    }
  }
  return maxChar;
}