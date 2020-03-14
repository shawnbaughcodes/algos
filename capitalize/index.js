export const capitalize = str => {
  const splitString = str.split(" ").map(word => {
    const splitWord = word.split("");
    const splicedWord = splitWord.splice(0, 1);
    splitWord.unshift(splicedWord[0].toUpperCase());
    return splitWord.join("");
  });

  return splitString.join(" ");
};
