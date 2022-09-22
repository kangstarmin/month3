
// 제이쿼리 실행문은 문서가 다 로드되고 난 이후에 실행된다.
$(document).ready(function(){

  const jsInput = document.getElementById("text")
  const input = $("#text")
  const p = $("#current")

  // 입력 요소의 입력값이 변할 때의 이벤트 처리
  // 입력 요소에서 값을 읽을 때는 val()
  // 출력 요소에서 값을 읽을 때는 text()
  jsInput.addEventListener("change", function(){
    const value = input.val()
    p.text(value)
  })

  const box = $(".box")

  // 인자 전달 안하면 읽기, 하면 덮어쓰기(px 단위의 수치 넣기)
  console.log(box.width())
  console.log(box.height())
  console.log(box.innerWidth())
  console.log(box.innerHeight())
  console.log(box.outerWidth())
  console.log(box.outerWidth())
  console.log(box.outerHeight())


})