// 함수는 호출될 때 실행되므로, ready 밖에 정의해도 상관없다
// 이벤트명을 인자로 받아서 화면에 표시하는 함수
function showEvent(eventName){
  const p = $("<p></p>")
  p.text(eventName)
  $("body").append(p)
}
$(document).ready(function(){

  const sample = $("#sample")

  sample.width(200)
  sample.height(200)
  sample.css("background", "orange")

  sample.click(function(e){
     showEvent("click")
    
  })
  sample.dblclick(function(e){
    showEvent("dblclick")
  })
  sample.hover(function(e){
    showEvent("hover")
  })
  sample.mouseup(function(){
    showEvent("mouseup")
  })
  sample.mousedown(function(){
    showEvent("mousedown")
  })
  sample.mousemove(function(){
    showEvent("mousemove")
  })
})