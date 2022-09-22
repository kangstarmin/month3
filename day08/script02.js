
$(document).ready(function(){

  $("#first").animate({
    width: 200
  })
  $("#first").stop()

  // ms 단위의 수치를 지정
  $("#second").delay(2000).animate({
    marginLeft: 200
  })

  const a = $("#third").animate({marginLeft: 100}, 1000)
  .animate({marginLeft: 200}, 1000)
  .animate({marginLeft: 300}, 1000).queue(function(){
    $(this).css({backgroundColor: "red"})
  })
  $("#third").clearQueue()
  $("#third").dequeue()
  
  console.log(a)
})