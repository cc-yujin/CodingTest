function solution(array, height) {
  let result = 0;
  for (i = 0; i < array.length; i++) {
    if (array[i] > height) {
      result++;
    }
  }
  return result;
}

//filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
function solution(array, height) {
  var answer = array.filter(item => item > height);
  return answer.length;
}