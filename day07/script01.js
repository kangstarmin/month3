
$(document).ready(function(){
  /*
  $(".box").mousemove(function(e){
    console.log(e.pageX, e.pageY)
    $(".position").text(`${e.pageX}, ${e.pageY}`)
  })

  $("#text").keyup(function(){
    
    // 이벤트 핸들러에서 this 는 이벤트가 발생한 요소를 뜻한다.
    console.log($(this).val())
    $(".current").text(this.value) */

    $(".box").dblclick(function(){
      $("#text").focus() // 핸들러 없는 포커스는 포커스 이동이 된다.
    })

    $("#text").focus(function(){
      this.value = "나에게 초점을 맞춰줘서 고마워"

    })
  })
