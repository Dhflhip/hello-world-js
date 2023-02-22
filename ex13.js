//while(조건){조건이 true일때 실행}
let number = 1
while(number <= 5){
    console.log(number)
    number += 1
}
//confirm("message!") 확인을 누르면 true 아니면 false
//11번에서 false가 나오면 12번으로 넘어감
while(confirm("메세지!")){
    console.log("OK")
}
console.log("キャンセル")