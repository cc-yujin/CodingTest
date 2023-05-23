function solution(n) {
  let pi = parseInt(n / 7);
  let zza = n % 7;

  if (zza > 1) {
    zza = 1;
  }

  let pizza = pi + zza;
  return pizza;
}

//Math.ceil() 함수는 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 integer 로 반환합니다.
Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4


function solution(n) {
  return Math.ceil(n / 7);
}
