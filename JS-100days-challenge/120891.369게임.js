function solution(order) {
  let num = order.toString().split(''); // 숫자가 하나씩 분리 되어 배열에 저장
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] == '3' || num[i] == '6' || num[i] == '9') {
      sum++;
    }
  }
  return sum;
}

//match
function solution(order) {
  return order.toString().match(/[369]/g).length;
}

//테스트케이스 통과
function solution(order) {
  let value = order.toString().match(/[369]/g) ?? [];
  return value.length;
}

// set
function solution(order) {
  const s = new Set('369');
  return order.toString().split('').filter(v => s.has(v)).length;
}