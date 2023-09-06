/** 오름차순 */
// const solution = (arr) => arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)];
// console.log(solution([1, 2, 7, 10, 11]));
// console.log(solution([9, -1, 0]));

/** 짝수는 싫어요 */
// const solution = (n) => {
//   const arr = [];
//   for (let i = 1; i <= n; i++) {
//     arr.push(i);
//   }
//   return arr.filter((a) => a % 2 !== 0);
// };
// const solution = (n) =>
//   Array.from({ length: n }, (_, i) => i + 1).filter((a) => a % 2 !== 0);
// console.log(solution(10));

/** 최빈값 구하기 */

// const solution = (arr) => {
//   if (arr.length === 1) return arr[0];

//   const duplicates = [];
//   const count = {};
//   for (const num of arr) {
//     count[num] = (count[num] || 0) + 1;
//     if (count[num] === 2) {
//       duplicates.push(num);
//     }
//   }
//   return duplicates.length > 1 ? -1 : duplicates[0];
// };

const solution = (array) => {
  const count = {};
  let maxCount = 0;
  let mode = -1;

  for (const num of array) {
    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }

    if (count[num] > maxCount) {
      maxCount = count[num];
      mode = num;
    } else if (count[num] === maxCount && num !== mode) {
      console.log(count[num], maxCount, num, mode);
      mode = -1;
    }
  }

  return mode;
};

console.log(solution([1, 2, 1, 3]));
