
const messi = {
    name : "Lionel Andrés Messi Cuccittini",
    'age' : 34,
    team : "Paris Saint-Germain FC",
    'nation' : "Argentine Republic",
    friends:["AAA", "BBB", "CCC"],
    kick : function(){
        console.log("shoot!")
    }
}
//문자열로 변환됨, 함수는 무시됨
console.log(typeof JSON.stringify(messi))
console.log(JSON.stringify(messi))

//JSON 가져오기(작은 따옴표 사용 불가, 마지막꺼 쉼표 불가)
const mejot = `
    {
    "name":"Lionel Andrés Messi Cuccittini",
    "age":34,"team":"Paris Saint-Germain FC",
    "nation":"Argentine Republic",
    "friends":["AAA","BBB","CCC"]
    }
`
console.log(JSON.parse(mejot))