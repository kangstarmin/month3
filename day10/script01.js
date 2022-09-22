
$(document).ready(function(){

  $("#calendar").datepicker({
    showButtonPanel : true,
    closeText : "CLOSE"
  })

  $("#beverage").selectmenu({
    width: 200,    
  })
  $("#beverage").on("selectmenuchange", function(e, ui){
    // e : 이벤트 객체
    // ui : DOM 정보
    console.log(ui.item.label)
  })

  $("#beverage").selectmenu("open")
})