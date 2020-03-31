const countDown = num => {
  if (num <= 0) {
    console.log("done");
    return;
  }
  console.log(num);
  return countDown((num -= 1));
};

countDown(5);
