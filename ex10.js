/*
document.querySelector
문서의 첫번째 요소를 반환, 없으면 null을 반환
document.querySelector("p") 
p태그 선택
document.querySelector("#text") 
id가 text인 요소 선택
document.querySelector(".text") 
class가 text인 요소 선택
*/
console.log("!!!querySelector!!!")
console.log(document.querySelector("h1"))
console.log(document.querySelector("p"))
console.log(document.querySelector("#text"))
console.log(document.querySelector(".paragraph"))
console.log(document.querySelector(".널"))
/*
document.getElementById
id를 인자로 전달받아 요소를 반환, 없으면 null을 반환 
document.getElementById("text")
id가 text인 요소를 선택
document.getElementById("image")
id가 image인 요소를 선택
*/
console.log("!!!getElementById!!!")
console.log(document.getElementById("text"))
console.log(document.getElementById("p"))
/*
textContent
텍스트 컨텐츠를 표현하는 속성으로 읽기 및 변경 가능
???.textContent <- html에서의 ???를 의미함
*/
console.log("!!!!!!!!!!!!!!!!!!!!")
const h1 = document.querySelector("h1")
const p = document.getElementById("text")

console.log(h1.textContent) //h1을 찾아서 출력(console)
h1.textContent = "h1 바뀌었습니다." //h1을 데이터 변경(html)

p.textContent = "p.#text 바뀌었습니다." // p값을 변경(html)
console.log(p.textContent) // p값을 출력(console)