function solution(numbers, direction) {
  if (direction == 'right') {
    numbers.unshift(numbers[numbers.length - 1]);
    numbers.pop();
  } else if (direction == 'left') {
    numbers.push(numbers[0]);
    numbers.shift();
  }
  return numbers;
}

//요소를 반환한다는 것 알기!!
function solution(numbers, direction) {
  if (direction == 'right') {
    numbers.unshift(numbers.pop());
  } else {
    numbers.push(numbers.shift());
  }
  return numbers;
}