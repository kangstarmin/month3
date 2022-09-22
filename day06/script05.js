$(document).ready(function(){

  const input = $("#text")

  input.keydown(function(e){
    console.log("누름")
    console.log(e.key) // 내가 뭘 눌렀다
    console.log(e.keyCode) // 해당 문자에 대한 숫자 코드
  })

  input.keyup(function(e){
    console.log("뗐음")
    console.log(e.key)
  })
})