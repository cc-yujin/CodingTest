function solution(array, n) {
    array.sort((a,b) => a-b)
    let newArr = new Array();
    let inf = Infinity; // 절댓값이 같을 경우 더 작은 수 return 위함
    
    for(let i = 0; i<array.length; i++){
        if(Math.abs(array[i])-n < inf)
        newArr.push(Math.abs(array[i] - n));
    }
    let minValue = Math.min(...newArr); // 배열에서 가장 작은 수 정의 
    let index = newArr.indexOf(minValue); // 인덱스 구하기
    return array[index];
}