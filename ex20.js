const button = document.getElementById("push")
const div = document.getElementById("area")

button.addEventListener('click', function(){
    console.log("div 생성 중!")
    const newDiv = document.createElement("div")

    newDiv.style.backgroundColor = "red"
    newDiv.style.width = "50px"
    newDiv.style.height = "50px"

    div.appendChild(newDiv) //문자열 추가 불가, 반환값 출력
//    div.append(newDiv) 문자열 추가 가능, 반환값 출력 안됨
})