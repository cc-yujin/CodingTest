function solution(num_list) {
  let zzak = num_list.filter((item) => item % 2 == 0).length;
  let holl = num_list.filter((item) => item % 2 != 0).length;

  let answer = new Array(zzak, holl);
  return answer;
}


// for..of
function solution(num_list) {
  var answer = [0,0];

  for(let a of num_list){
      answer[a%2] += 1 
  }

  return answer;
}