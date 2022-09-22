
$(document).ready(function(){

  const box = $(".box")
  const button = $("#click")

  button.click(function(){
    // CSS 속성값을 변화시키는 메소드
    // 자바스크립트에서는 -가 빼기이므로 카멜표기법으로 변경
    // 체이닝(chaining) : 메소드 호출문 뒤에 있어서 메소드를 호출하는 것
    box.animate({
      width: 200
    }, 500).animate({
      width: 100
    }, 500)
  })

})