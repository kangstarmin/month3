
$(document).ready(function(){

  $("#addr").click(function(){

    new daum.Postcode({
      oncomplete: function(result){
        $("#user-addr").text(result.jibunAddress)
        $("#addr").val(result.jibunAddress)
      }
    }).open()
  })

  $("#addr-detail").keyup(function(e){

    $("#user-addr-detail").text(e.target.value)
  })
})