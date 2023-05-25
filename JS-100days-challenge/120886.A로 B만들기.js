function solution(before, after) {
  if (after.split('').sort().join('') == before.split('').sort().join('')) {
    return 1;
  } else return 0;
}

// 삼항연산자 익숙해지기
function solution(before, after) {
  return after.split('').sort().join('') == before.split('').sort().join('')
    ? 1
    : 0;
}
