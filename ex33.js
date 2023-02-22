// 저장하기(한번 저장하면 영구적으로 보관됨 단, 문자열만)
/*
const myName = "Yun"
console.log(myName)
localStorage.setItem("myName",myName)
*/

//불러오기
const myName = localStorage.getItem("myName")
//alert(myName)

// 여러개 저장하기
localStorage.setItem("cat","ねこ")
localStorage.setItem("dog","いぬ")
localStorage.setItem("myName","ゆん")

//1개씩 지우기
localStorage.removeItem("dog")

//전부 지우기
localStorage.clear()