const solution = (array) => {
  const count = {};
  let maxCount = 0;
  let mode = -1;

  for (const num of array) {
    console.log(num);
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }

    console.log(count[num], "Dsd");

    if (count[num] > maxCount) {
      maxCount = count[num];
      mode = num;
      console.log("mode업뎃");
    } else if (count[num] === maxCount && num !== mode) {
      console.log(count[num], maxCount, num, mode);
      mode = -1;
      console.log("mode업뎃2");
    }
  }

  console.log(mode, 1212);
  return mode;
};

console.log(solution([1]));
