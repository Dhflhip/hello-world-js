/*
return(데이터의 반환 즉, 출력)
return문은 함수에서 결괏값을 반환 또는 함수를 끝내기 위해 사용됨
※　데이터는 하나만 반환되며 종료됨
*/

function noReturn(){ //함수 선언
    console.log("반환하지 않는다")
}
const result = noReturn() // 함수 표현
console.log(result) // result : undefined 변수는 있지만 데이터는 없는 상태

function thereIsReturn(){ //함수 선언
    console.log("반환한다")
    return 10;
}
const result2 = thereIsReturn() // 함수 표현
console.log(result2) // result : return값 10이 반환