const button = document.querySelector('button')
/*
setTimeout(function(){
    console.log("Timeout")
},2000)
// 정해진 시간(2초) 경과 후 함수 실행
setInterval(function(){
    console.log("interval")
},5000)
// 정해진 시간 간격(5초)에서 반복 실행
*/
let interId;
interId = setInterval(function(){
    console.log("hello")
},1000)
console.log(interId)

button.addEventListener('click', function(){
    clearInterval(interId)
})
// clearInterval 메소드는 해당하는 타이머를 제거