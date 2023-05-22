function solution(numbers) {
  let answer = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  return answer;
}

// for...of
function solution(numbers) {
  let answer = 0;
  for(i of numbers){
    answer += i;
  }
  return answer / numbers.length;
}