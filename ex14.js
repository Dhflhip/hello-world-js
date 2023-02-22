/*
for(초기식; 조건식; 반복식){조건이 true일때 실행}
초기식 : 반복 조건의 초기화 작업
반복식 + 반복이 한번 끝날 때마다 실행될 작업
초기식 -> 조건식 -> 실행문 -> 반복식 -> 조건식 -> 실행문 순으로 진행
*/
for(let i = 1; i <= 3; i += 1){
    console.log("計算中です");
    console.log(i);
}

console.log("!!!!!짝수일 경우에만 출력!!!!!")
for(i = 2; i <= 4; i += 1){
    if(i % 2 == 0){
    console.log(i)
    }
}

console.log("!!!!!2씩 빼기!!!!!")
for(i = 6; i >= 1; i -= 2){
    console.log(i)
}