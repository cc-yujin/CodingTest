function solution(s1, s2) {
  let answer = 0;

  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] == s2[j]) {
        answer++;
      }
    }
  }
  return answer;
}

//filter, includes
function solution(s1, s2) {
  var answer = 0;
  return s1.filter((v) => s2.includes(v)).length;
}

//set으로 교집합 갯수 구하기
function solution(s1, s2) {
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
}
