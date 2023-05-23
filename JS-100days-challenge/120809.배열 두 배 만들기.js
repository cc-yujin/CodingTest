function solution(numbers) {
  var answer = [];
  
  for(let a of numbers){
      answer.push(a*2);
  }
  
  return answer;
}

// reduce
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

//map() 메서드는 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
function solution(numbers) {
  return numbers.map(v => v*2)
}