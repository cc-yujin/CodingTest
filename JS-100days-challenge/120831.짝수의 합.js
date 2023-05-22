function solution(n) {
  let answer = 0;
  for (i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      // 짝수일 때만 더한다
      answer += i;
    }
  }
  return answer;
}

// Array
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, c) => a + c, 0);
}
