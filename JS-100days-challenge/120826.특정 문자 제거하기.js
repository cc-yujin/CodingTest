function solution(my_string, letter) {
  let arr = my_string.split('');
  return arr.filter((item) => item != letter).join('');
}

//split의 인자를 기준으로 분리
function solution(my_string, letter) {
  const answer = my_string.split(letter).join('')
  return answer;
}
