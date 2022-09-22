
$(document).ready(function(){

  $("#dog").on("click", function(){

    $.ajax({
      // 요청을 보낼 대상 서버
      url: "https://dog.ceo/api/breeds/image/random/5",
      type: "get",
      dataType: "json",
      success: function(response){
        const photos = []
        response.message.forEach(function(e){
          photos.push(e)
        })
        photos.forEach(function(e){
          const img = $("<img>")
          img.width = 200
          img.height = 200
          img.attr("src", e)
          $("body").append(img)
        })
        
      }
    })
  })

})