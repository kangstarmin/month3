
$(document).ready(function(){

  /*
  const result = $("body").html()
  console.log(result)
  $("body").html("안녕하세요")
  */

 /*$("#dog").css("color", "#ff0000")
  $("#dog").attr("id")*/

  const button = document.querySelector("button")

  button.addEventListener("click", function(){
    const h1 = $("h1")
    h1.toggleClass("apple")

    $(".samsung").text("삼성")
    $(".apple").text("애플")

  })
  const input = document.querySelector("input[type]")
  input.addEventListener("click", function(){
    console.log($("select").val())
  })
})