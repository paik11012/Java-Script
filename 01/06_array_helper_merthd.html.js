// array helper method

// forEach - loop를 대신 돌아 줌
const colors = ['red', 'green', 'blue', 'salmon']
for (const color of colors) {
  // console.log(color)
}

colors.forEach(function(color) { // colors라는 배열이 갖고 있는 method
  console.log(color) // 배열 내에 있는 아이템 한 바퀴 돌면서 아이템 이름 찍기
});

// arrow function 작성 가능 위랑 똑같다
colors.forEach(color => console.log(color))

// map - 배열 내의 모든 요소에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 return
// 일정한 형식의 새로운 배열을 만들 때 사용

const numbers = [1, 2, 3, 4]
const doubleNumbers = numbers.map(number => {
  return number * 2   // return 'B${number}' -> B1, B2, B3, B4
})
console.log(doubleNumbers)

const doubleNumbers2 = numbers.map(number => number * 2)


// 숫자가 담긴 배열을 받아 각 수의 제곱근이 들어있는 새로운 배열 만들기
const numbers2 = [4, 9, 16, 25]
const rootNumbers = numbers2.map(number => {
  return Math.sqrt(number)  // number ** 0.5
})
const rootNumbers2 = numbers2.map(number => Math.sqrt(number))


// FILTER 주어진 함수의 테스트를 통과하는 모든 요소를 모아서 새로운 배열 반환
numbers.filter(number => {
  return number % 2 === 0
})  // (2) [2, 4]

const products = [
  { name: 'cucumber', type:'vege' },
  { name: 'carrot', type:'vege' },
  { name: 'apple', type:'fruit' },
  { name: 'blueberry', type:'fruit' },  // object 선언시 앞뒤 띄어쓰기
]
const fruits = products.filter(product => {
  return product.type === 'fruit'
})


// map헬퍼를 이용해 distance/time(속도)를 저장하는 배열 speeds 만들기
const trips= [
  {distance: 34, time:10},
  {distance:90, time:50},
  {distance:59, time:25},
]
const speeds = trips.map(trip => {  // trips의 인자 하나씩 받아오겠다
    return trip.distance / trip.time
})

// filter 이용해 나이가 50이상인 사람들 필터
const ages = [15, 25, 35, 45, 55, 65, 75, 85, 95]
const oldAges = ages.filter((age, index, self) => {
  console.log(age, index, self)
  return age >= 50
})


// find 주어진 판별 함수를 만족하는 첫번째 요소 반환, 없으면 undefined 반환
const users = [
  {name: 'Tony Stark', ages:45},
  {name: 'Steve Rogers', age:32},
  {name: 'Thor', age:40}
]
const tony = users.find(user =>{
return user.name === 'Tony Stark'
})
// some & every
// some: 배열 안의 어떤 요소라도 ===가 true인게 하나라도 있으면 boolean 반환 (true)
// every 모두 true이어야지 true 반환
const arr = [1, 2, 3, 4, 5]
const oneEven = arr.some(one =>{  // 하나라도 짝수면 true 아니면 false
  return one % 2 === 0
})
const everyEven = arr.every(one =>{  // 모두 짝수면 true 아니면 false
  return one % 2 === 0
})

// request배열에서 각 요청들 중 pending이 있는지 확인
const requests = [
  {url: '/photos', status: 'complete'},
  {url: '/albums', status: 'pending'},
  {url: '/users', status: 'failed'},
]
const isInProgress = requests.some(request =>{
  return request.status === 'pending'
})

/* reduce 배열의 각 요소에 대해 주어진 reducer함수를 실행하고 하나의 값을 반환
 reduce는 배열 내의 총합, 평균 계산 등 여러개의 값을 하나로 줄임
 첫 번째 매개변수는 누적 값(전 단계의 결과) */
const tests = [90, 99, 78, 80]
const sum = tests.reduce((total, test) => { // 누적 값, 하나의 아이템 이름 => {} 초기화값0(무엇에 더할 것인지)
  total += test
  return total // 다음 루프로 누적 값을 넘김!!!!!
}, 0)
// 어렵다!! 두배 만들기 push 이용
const doubleTests = tests.reduce((double, test) =>{
  double.push(test * 2)
  console.log(double)
  return double
}, [])


const doubleTestss = tests.reduce((double, test) =>{
  console.log(double, test)  // 두번째 루프부터 undefined, return이 없기 때문에
  // return double
}, [])

