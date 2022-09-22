// map의 콜백함수에서 반환한 값은 결과물(배열)의 멤버가 된다.
/*
const animal = [
  "고양이",
  "강아지",
  "앵무새",
  "거북이",
  "햄스터"
]

const result = animal.map(function(element){
  let pet = "귀여운 " + element
  return pet
})

console.log(result) */

//filter의 콜백함수에서 true가 반환된 요소만 멤버가 될 수 있다.
/*
const characters = [
  "짱구","꿈돌이","짱구","자두","짱구"
]

const result = characters.filter(function(element){
  let isZZanggu = element === "짱구"
  return isZZanggu
})

console.log(result) */

const singer = ["ABBA", "QUEEN", "박효신", "성시경", "오마이걸", "레인보우"]
const one = document.getElementById("one")
const two = document.getElementById("two")
const three = document.getElementById("three")

one.addEventListener("click",function(){
  
  const result = singer.filter(function(element){
    if(singer.indexOf(element) == 0 || singer.indexOf(element) == 1){
      return true
    }
    else{
      return false
    }
  })
  result.forEach(function(element){
    const p = document.createElement("p")
    p.textContent = element
    document.body.appendChild(p)
  })
})

two.addEventListener("click",function(){

  const result = singer.filter(function(element){
    if(singer.indexOf(element) == 2 || singer.indexOf(element) == 3){
      return true
    }
    else{
      return false
    }
  })
  result.forEach(function(element){
    const p = document.createElement("p")
    p.textContent = element
    document.body.appendChild(p)
  })
})

three.addEventListener("click", function(){

  const result = singer.filter(function(element){
    if(singer.indexOf(element) == 4 || singer.indexOf(element) == 5){
      return true
    }
    else{
      return false
    }
  })
  result.forEach(function(element){
    const p = document.createElement("p")
    p.textContent = element
    document.body.appendChild(p)
  })
})