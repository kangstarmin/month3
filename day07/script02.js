
$(document).ready(function(){

  $(window).scroll(function(e){
    console.log(this)
  })
  
  $("#menu").change(function(e){
    console.log($(this).val())
    const p = $("<p></p>")
    p.text($(this).val())
    $(".long").append(p)
  })
})