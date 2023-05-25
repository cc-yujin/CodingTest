function solution(my_string) {
  let set = new Set(my_string); // set 객체 생성
  let newArr = [...set]; // Array로 변경
  return newArr.join('');
}

// 한줄 코드
function solution(my_string) {
  return [...new Set(my_string)].join('');
}

