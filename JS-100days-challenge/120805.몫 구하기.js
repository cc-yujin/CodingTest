function solution(num1, num2) {
  var answer = parseInt(num1 / num2);
  return answer;
}

// 다른 사람의 풀이
//틸트 연산자
function solution(num1, num2) {
  return ~~(num1 / num2);
}

//Math.floor
function solution(num1, num2) {
  return Math.floor(num1 / num2);
}

// 큰 수에서는 type number에 string이 들어가는 경우도 있기 때문에, 소수점 이하를 절삭하여 정수 값을 return하려는 목적으로 Math.floor 대신에 parseInt를 사용해서는 안 됩니다.
