let myBreed = "maltese"

$(document).ready(function(){

  // 셀렉트 요소의 선택이 바뀔 때
  $("#breed").change(function(){
    myBreed = $(this).val()
  })

  $("#dog").click(function(){
    // https://dog.ceo/api/breed/hound/images/random
    $.ajax({
      url: `https://dog.ceo/api/breed/${myBreed}/images/random`,
      type: "get",
      datatype: "json",
      success: function(response){
        const img = $("<img>")
        img.attr("src", response.message)
        $("body").append(img)
      }
    })

  })

})