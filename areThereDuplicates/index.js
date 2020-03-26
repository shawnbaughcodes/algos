const findDups = (...args) => {
  let i = 0;
  let scout = 1;
  let areDuplicates = false;
  const sortedArgs = args.sort();
  while (scout < sortedArgs.length) {
    if (sortedArgs[scout] === sortedArgs[i]) {
      areDuplicates = true;
      console.log(areDuplicates);
      return areDuplicates;
    }
    i++;
    scout++;
  }
  console.log(areDuplicates);

  return areDuplicates;
};

findDups(1, 2, 3);
findDups(1, 2, 2);
findDups("a", "b", "c", "a");
