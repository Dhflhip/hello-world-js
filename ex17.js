console.log("매개변수 X, 반환 x")
function sayAnything1(){
    console.log("何か言って")
}
sayAnything1()
sayAnything1()
console.log("--------------------")

console.log("매개변수 O, 반환 x")
function sayAnything2(ant){
    console.log(ant)
}
sayAnything2("はい")
sayAnything2("わかりました")

function sayAnything3(ant, number){
    for(let i = 0; i < number; i++){
        console.log(ant)
    }
}
sayAnything3("いいえ", 6)
sayAnything3("帰りたい", 2)
console.log("--------------------")

console.log("매개변수 O, 반환 O")
function oddEven(number){
    if(number % 2 == 1){
        return "奇数(홀수)"
    }else{
        return "偶数(짝수)"
    }
}
console.log(oddEven(10))
console.log(oddEven(7))
console.log("--------------------")