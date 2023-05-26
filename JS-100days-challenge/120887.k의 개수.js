function solution(i, j, k) {
  let num = [];
  for (let n = i; n <= j; n++) {
    num.push(n); // i부터 j까지 배열에 넣기
  }
  return num
    .join('') // 모든 배열 요소를 하나의 문자열로 만들었다가
    .split('') // 한 자리씩 떼어내기
    .filter((v) => v == k).length; // k와 같은 요소의 개수 반환
}
