const sushi = ["マグロ", "中トロ", "大トロ", "いわし", "カツオ"]

console.log(sushi)
sushi.push("ツナマヨ", "ねぎとろ") // 배열의 끝에 추가
console.log(sushi)
sushi.pop() // 마지막꺼 제거
console.log(sushi)
let result = sushi.indexOf("大トロ") //大トロ 몇번째야?
console.log(result)
sushi.splice(4) //인자 값을 포함해서 전부 제거한다
console.log(sushi)
sushi.splice(0, 3) //0부터 3개까지 제거한다.
console.log(sushi)
sushi.splice(0, 1, "いくら軍艦") 
//0부터 1개까지 제거 후 3번째 인자 추가
console.log(sushi)

const pet = ["강아지", "고양이", "앵무새", "원숭이"]
console.log(pet)
pet.forEach(function(){
    console.log("!")
})
pet.forEach(function(param){
    console.log(param)
})