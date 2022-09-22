
$(document).ready(function(){

  // 하나 이상의 이벤트 핸들러 등록 가능
  /* $(".box").on({
    click: function(){
      console.log("나는 문어")
    },
    mouseenter: function(){
      console.log("ㅠㅠ")
    },
    mouseleave: function(){
      console.log("ㅎㅎ")
    }
  }) */

  /* $("body").delegate("div", function(){
    console.log("델리게이트")
  }) */

  /* $(".box").one("click mouseenter mouseleave", function(){
    console.log("단 한번의 외침")
  }) */

  $(".box").on({
    click: function(){
      console.log("클릭")
    },
    mouseenter: function(){
      console.log("마우스엔터")
    },
    mouseleave: function(){
      console.log("마우스리브")
    }
  })

  $("#click").click(function(){
    $(".box").off("click")
  })
  $("#enter").click(function(){
    $(".box").off("mouseenter")
  })
  $("#leave").click(function(){
    $(".box").off("mouseleave")
  })
  $("#all").click(function(){
    $(".box").off()
  })


})