function solution(n, k) {
  var answer = 0;
  
  if (n < 10){
      answer = n*12000 + k*2000;
  }else if (n >= 10) {
      answer = n*12000 + k*2000 - parseInt(n/10)*2000;
  }
  
  return answer;
}

//비트연산자 + 더 깔끔한 코드
function solution(n, k){
  if (n>= 10){
    k -= ~~(n/10)
  }
  return 12000 * n + 2000 * k;
}