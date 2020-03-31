const basicStringSearch = (str, item) => {
  let itemIndex = 0;
  let count = 0;
  let matchString = "";

  for (const i in str) {
    let strEl = str[i];

    if (strEl === item[itemIndex]) {
      matchString = matchString.concat(strEl);
      itemIndex += 1;
    } else {
      matchString = "";
      itemIndex = 0;
    }

    if (matchString === item) {
      count += 1;
    }
  }

  return count;
};

console.log(basicStringSearch("baby aby yahdab", "ab"));
