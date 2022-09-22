$(document).ready(function(){

  const object = $("#object")
  const showBtn = $("#show")
  const hideBtn = $("#hide")
  const toggleBtn = $("#toggle")
  const otherBtn = $("#other")

  hideBtn.click(function(){
    object.slideUp(1200)
  })
  showBtn.click(function(){
    object.slideDown(1200)
  })
  toggleBtn.click(function(){
    object.slideToggle(1200)
  })

})