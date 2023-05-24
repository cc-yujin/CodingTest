function solution(rsp) {
  let input = rsp.split('');
  let output = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] == 2) {
      output[i] = 0;
    } else if (input[i] == 0) {
      output[i] = 5;
    } else {
      output[i] = 2;
    }
  }
  const answer = output.toString().replaceAll(',', '');

  return answer;
}

// 객체, map
function solution(rsp) {
  let answer = { 0: '5', 2: '0', 5: '2' };
  return [...rsp].map((v) => answer[v]).join('');
}
