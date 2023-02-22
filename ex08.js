/*
null : 데이터가 없다는 의미의 데이터
undefined : 데이터가 아직 정의 되지 않았다 

boolean : true, false 2가지 값만 존재하는 데이터 타입
= 요거는 대입임
*/

let data; // data를 선언만 함
console.log(data); // result : undefined
console.log(typeof data) // result : undefined

data = "Hello" // 문자열로 초기화
console.log(data); // result : Hello
console.log(typeof data) // result : string

data = null; // data가 없음을 나타내기 위해 사용하는 데이터
console.log(data); // result : null
console.log(typeof data) // result : object