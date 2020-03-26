const sameFrequency = (num1, num2) => {
  const stringNum1 = `${num1}`;
  const stringNum2 = `${num2}`;

  if (stringNum1.length !== stringNum2.length) {
    console.log(false);
    return false;
  }

  const numOneMap = createStringMap(stringNum1);
  for (const s2 of stringNum2) {
    if (numOneMap[s2]) {
      numOneMap[s2]--;
    } else {
      console.log(false);
      return false;
    }
  }
  console.log(true);

  return true;
};

const createStringMap = str => {
  const map = {};
  for (const s of str) {
    map[s] = map[s] ? ++map[s] : 1;
  }
  return map;
};

sameFrequency(182, 281);
sameFrequency(34, 14);
sameFrequency(3589578, 5879385);
sameFrequency(22, 222);
