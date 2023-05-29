function solution(s) {
  return s
    .split('') // 문자 하나씩 떼어 배열 생성
    .filter((c) => s.split(c).length == 2) // 요소로 split 했을 때 length가 2면 문자가 한번만 등장한 것임
    .sort() // 정렬
    .join(''); // 문자열로 만들기
}
