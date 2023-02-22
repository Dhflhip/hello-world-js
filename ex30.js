/*
객체 리터럴은 가장 일반적인고 간단한 방법
*/
const cat = {
    name : "tom", //, 다음에 공백 유무 관계없음
    color : "gray", // key(이름) : value(값)
    color : "white", // key 값은 중복이 안됨
    eat : function(){  //속성값이 합수일 경우 메소드가 됨
        console.log("食べる")
    }
}
// .찍고 바로 
console.log(typeof cat) // 출력 : object
console.log(cat)
console.log(cat.name)
console.log(cat.color) // 마지막값인 white만 출력
console.log(cat["color"]) // 대괄호 쓰면 문자열로 넣어

cat.eat()
// 객체 쓰기 tom -> 도라에몽, white -> blue
cat.name = "도라에몽"
cat.color = "blue"
console.log(cat)