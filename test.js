const stars = (n) => {
  let str = "";

  for (let i = 0; i < n; i++) {
    str += "*".repeat(i + 1) + "\n";
  }

  return str;
};

console.log(stars(5));

const gugudan = (n) => {
  for (let j = 1; j <= 9; j++) {
    console.log(n * j);
  }
};

gugudan(2);

console.log(gugudan(2));
function printPattern(count) {
  // count가 양수인지 확인
  if (count > 0) {
    // count만큼 반복하면서 패턴 출력
    for (let i = 1; i <= count; i++) {
      let stars = "";
      for (let j = 0; j < i; j++) {
        stars += "*";
      }
      console.log(stars);
    }
  } else {
    console.log("유효한 숫자를 입력하세요."); // 음수 또는 0이 입력된 경우
  }
}

// 예제: '*' 패턴 출력 (5줄)
printPattern(5);

// 예제: '*' 패턴 출력 (3줄)
printPattern(3);

// 예제: 음수 입력 시 메시지 출력
printPattern(-2);
