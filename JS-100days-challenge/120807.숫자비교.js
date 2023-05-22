function solution(num1, num2) {
    var answer = 0;
    if (num1 == num2) {
        answer = 1;
    } else if (num1 != num2) {
        answer = -1;
    }
    return answer;
}


// 삼항연산자
function solution(num1, num2) {
  return num1 == num2 ? 1 : -1;
}