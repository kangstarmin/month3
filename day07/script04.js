$(document).ready(function(){

  const object = $("#object")
  const showBtn = $("#show")
  const hideBtn = $("#hide")
  const toggleBtn = $("#toggle")
  const fadeinBtn = $("#fadein")
  const fadeoutBtn = $("#fadeout")
  const fadetoggleBtn = $("#fadetoggle")
  const otherBtn = $("#other")


  // 제이쿼리 애니 효과 메소드의 이벤트의 듀레이션 기본값은 400ms
  // 선택적 두번째 인자는 바로 콜백함수 : 애니 효과 끝나고 나서의 동작
  hideBtn.on("click", function(){
    object.hide(400, function(){
      console.log("숨김 끝")
    })
  })

  showBtn.on("click", function(){
    object.show(400, function(){
      console.log("보여줌 끝")
    })
  })

  toggleBtn.on("click", function(){
    object.toggle(400,function(){
      console.log("토글 끝")
    })
  })

  fadeinBtn.on("click", function(){
    object.fadeIn(400, function(){
      console.log("숨김 끝")
    })
  })

  fadeoutBtn.on("click", function(){
    object.fadeOut(400, function(){
      console.log("숨김 끝")
    })
  })

  fadetoggleBtn.on("click", function(){
    object.fadeToggle(400, function(){
      console.log("숨김 끝")
    })
  })

  otherBtn.click(function(){
    // 투명도는 0부터 1사이의 실수
    object.fadeTo(1500, 0.2, function(){})
  })

  
})