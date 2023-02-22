/*
!!! 비교 연산자 !!! 
== 같다. != 같지 않다. ※ 자료형 확인 x, 추상적 비교
=== 완전히 같다. !== 완전히 같지 않다. ※ 자료형 o, 엄격한 비교
>, < 크다, 작다
>=, <= 크거나 같다, 작거나 같다
!!! 논리 연산자 !!!
&& : and
|| : or
*/

let num1 = 3;
let num2 = 5;

console.log("3>=5, ", num1 >= num2 ); //result : false
console.log("3<=5, ", num1 <= num2 ); //result : true

num1 = '3';
num2 = 3;

console.log("'3'==3, ", num1 == num2 ); //result : true 
console.log("'3'===3, ", num1 === num2 ); //result : false