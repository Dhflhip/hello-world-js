const twice = ["나연", "사나", "지효", "다현"]

twice.forEach(function(member){
    console.log(member)
})
// P 추가
twice.forEach(function(member){
    const p = document.createElement('p')
    p.textContent = member
    document.body.appendChild(p)
})
// 번호 추가
twice.forEach(function(member, index){
    const p = document.createElement('p')
    p.textContent = `${index + 1}번째 멤버 ${member}`
    document.body.appendChild(p)
})
// map을 쓰면 콜백 함수의 결과를 모아서 배열을 만들어 줌(원본은 그대로)
const result = twice.map(function(member, index){
    return `아름다운 ${member}`
})
console.log(twice)
console.log(result)

// filter 조건부 필터링을 한 true를 반환
const result2 = twice.filter(function(member, index){
    return member === "사나"
})

console.log(result2)