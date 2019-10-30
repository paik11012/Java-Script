console.log(add)
// 파일 제일 밑에 선언 되더라도 사용 가능
// console.log(sub)
// 표현식은 인식 불가


// 함수 선언식
function add(num1, num2) {
  return num1 + num2
}

// 함수 표현 식 (변수에 할당) 일반적으로 표현식 이용!
const sub = function(num1, num2) {
  return num1 - num2
}


// arrow functions
// ES6이후 문법, function 생략
let addOne = function(num){
  return num + 1
}

addOne = (num) => {
  return num + 1
}  // 익명함수만 쓸 수 있다, 이렇게 많이 쓸 예정
// 기능적 차이 존재

addOne = (num) => num + 1
addOne = num => num + 1  // 매개변수 하나면 괄호 없애기 가능
// 중괄호 제거는 바로 반환하겠다는 뜻



// name이라는 인자를 받아서 hello $name을 반환하는 함수를 선언식, 표현식, arrow로 만들기
// 선언식
function greeting(name) {
  return `hello ${name}`
}
// 표현식
greeting = function(name) {
  return `hello ${name}`
}
// arrow
greeting = (name) => `hello ${name}`



// object를 반환하는 arrow function
let makeObject = value => {
  return {'key': value}
}
makeObject = value => ({'key': value})  // 이 안에 들어가는 것은 값이라고 표현

const noArgs = () => 'No args'