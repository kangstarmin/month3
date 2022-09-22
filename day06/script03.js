
$(document).ready(function(){

  const div = $("#container")
  const btn1 = $("#before")
  const btn2 = $("#after")
  const btn3 = $("#prepend")
  const btn4 = $("#append")
  const btn5 = $("#empty")
  const btn6 = $("#remove")

  btn1[0].addEventListener("click", function(){
    // const p = document.createElement("p")
    // p.textContent = "요소추가"
    
    // 제이쿼리로 요소 추가하기
    const p = $("<p></p>")
    p.text("요소추가")
    div.before(p)
  })

  btn2[0].addEventListener("click", function(){
    const p = $("<p></p>")
    p.text("요소추가")
    div.after(p)
  })

  btn3[0].addEventListener("click", function(){
    const p = $("<p></p>")
    p.text("요소추가")
    div.prepend(p)
  })

  btn4[0].addEventListener("click", function(){
    const p = $("<p></p>")
    p.text("요소추가")
    div.append(p)
  })

  btn5[0].addEventListener("click", function(){
    div.empty() // 하위 요소 전부 제거
  })

  btn6[0].addEventListener("click", function(){
    div.remove() // 자기 자신 아예 제거
  })
})