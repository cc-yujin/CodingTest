function solution(my_string) {
  return my_string.split('').reverse().join('');
}

// spread
function solution(my_string) {
  var answer = [...my_string].reverse().join("");
  return answer;
}