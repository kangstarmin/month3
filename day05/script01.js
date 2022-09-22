
$(document).ready(function(){
  
  // 제이쿼리 선택자의 결과는 배열 형태를 띈다.
  
  console.log($("ul").contents())
  
  console.log($("ul").has("#dog"))
  console.log($("li").not("#dog"))
  console.log($("li").filter("#dog"))
  console.log($("ul").find("#dog"))
  
})