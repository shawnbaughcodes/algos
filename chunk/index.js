export const chunk = (array, size) => {
  let tempArray = [];
  const finalArray = [];
  for (let i = 0; i < array.length; i++) {
    if (tempArray.length === size) {
      finalArray.push(tempArray);
      tempArray = [];
    }

    tempArray.push(array[i]);

    if (i === array.length - 1 && tempArray.length > 0) {
      finalArray.push(tempArray);
    }
  }

  return finalArray;
}