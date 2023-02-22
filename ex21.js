const textInput = document.getElementById("text")
const button = document.getElementById("button")

button.addEventListener("click", function(){
    console.log(textInput.value)
 // textInput.value = "누른다가 뭐 달라질 것 같냐"
})
/*
const form = document.querySelector("form")

form.addEventListener("submit",function(e){
    e.preventDefault()
    console.log(form.name.value)
    console.log(form.town.value)
})
*/