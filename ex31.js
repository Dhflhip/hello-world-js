// 스프레드 연산(...)은 대괄호 안의 배열을 그대로 출력

const animal = ["호랑이","코끼리","코뿔소"]
console.log(animal.length)
console.log(...animal) //문자열 순서대로 출력
const animalPlus =[...animal, "살쾡이", "다람쥐"] // 살쾡이, 다람쥐 추가
console.log(animalPlus.length)
console.log(...animalPlus)

function printNames(param1, param2, param3){
    console.log(param1, param2, param3)
}

printNames(...animal) //합수의 인자로서도 활용이 가능하다
console.log("--------------------------")
const person = {
    name : "yun",
    job : "student",
    eat : function(){
        console.log("i have a juice")
    }
}

const teacher = {
    ...person,
    job : "teacher",  // 수정가능
    teach : function(){
        console.log("teach")
    }
}

console.log(person)
console.log(teacher)