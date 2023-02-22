/*
함수를 쓰는 이유는 효율성(코드 작성 및 유지 보수의 용이)
인자(argument) -> 매개변수(parameter) -> 함수(function) -> 출력(return)
변수는 데이터를 대입, 함수는 코드를 대입

선언식과 표현식은 
함수 선언식 : function 함수명(){함수 구문}
함수 표현식 : const 함수명 = function 함수명(){함수 구문}

함수 호출 : 함수명()

함수 이름 지을떄 : 동사로 지을 것, 첫문자는 소문자, 카멜표기법
함수 안의 변수는 함수 안에서만 적용 밖에서는 쓸 수 없음
*/

sayHello() // 함수 선언식은 위치와 관계 없이 적용(호이스팅이 가능하다)

function sayHello(){
    console.log("Hello")
    console.log("안녕하세요")
    console.log("こんにちは")
}

sayHello() // 함수 선언식은 위치와 관계 없이 적용(호이스팅이 가능하다)

const sayBye = function(){
    console.log("good bye~")
}

sayBye() // 함수 표현식은 반드시 마지막에 와야 적용됨