export const anagram = (str1, str2) => {
  const strOneObj = buildCharacterMap(str1);
  const strTwoObj = buildCharacterMap(str2);

  if (Object.keys(strOneObj).length !== Object.keys(strTwoObj).length) {
    return false;
  }

  for (let key in strOneObj) {
    if (strTwoObj[key] !== strOneObj[key]) {
      return false
    }
  }

  return true;
}

const buildCharacterMap = (string) => {
  let stringObj = {};
  const parsedString = string.replace(/[^\w]/g, "").toLowerCase();

  for (let str of parsedString) {
    if (!stringObj[str]) {
      stringObj[str] = 0;
    }

    stringObj[str]++;
  }

  return stringObj;
}