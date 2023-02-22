/*
템플릿 리터럴은 따옴표 대신 백틱(`)을 사용함
🌟플레이스 홀더'${}'를 사용해서 코드의 가독성 향상🌟

var a = 20;
var b = 8;
var c = "자바스크립트";

var str = "저는 " + (a + b) + "살이고 " + c + "를 좋아합니다.";
console.log(str);

↓

let str = `저는 ${a+b}살이고 ${c}를 좋아합니다.`;
console.log(str);

*/

let str = "따옴표 문자열";
console.log(str);
str = `백틱 문자열!!??`
console.log(str);

let number = 10;
let player = "messi";

console.log(
    `내가 좋아하는 선수는 ${player}, 그의 등번호는 ${number}`
)

let Cristiano = prompt("싫어하는 축구 선수는?");
console.log(
    `제가 싫어하는 축구선수는 ${Cristiano}, 그는 ${10}`
)