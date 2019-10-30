const numbers = [1, 2, 3, 4]

numbers[0]  // 1
numbers[-1]  // undefined
console.log(numbers.length)

// 배열 뒤집기
numbers.reverse()  // 뒤집혀서 반환되고 원본까지 뒤집힘
numbers.reverse()  // 다시 되돌리기

// 배열 마지막에 아이템 추가하기
numbers.push(5)
numbers.push('abc')
// 아이템 추가 후의 배열의 길이 반환
numbers.push('def')  // 숫자가 반환, 배열의 길이가 7이 되어서 길이 값을 반환
// numbers
// (7) [1, 2, 3, 4, 5, "abc", "def"]

// 배열 가장 마지막 요소 삭제
numbers.pop()  // 'def'반환하고 길이가 6이 됨

// 가장 앞에 요소 추가
numbers.unshift(0)  // (7) [0, 1, 2, 3, 4, 5, "abc"]
//  배열 첫번째 요소 제거 후 반환
numbers.shift()  // (6) [1, 2, 3, 4, 5, "abc"]

// 특정 아이템이 배열에 있는가?
numbers.includes(2)  // true

// indexOf 특정 아이템의 index를 찾아서 반환
numbers.indexOf(4)  // 3

numbers.push(5)  // (7) [1, 2, 3, 4, 5, "abc", 5]
numbers.indexOf(5)  // 결과: 4, 첫 번째 인덱스 반환
numbers.indexOf(100)  // -1 없다

// join 원본은 바뀌지 않는다
numbers.join() // "1,2,3,4,5,abc,5" 콤마 기준으로 합쳐서 문자열로 반환
numbers.join('-')  // "1-2-3-4-5-abc-5"  - separator


// OBJECT 객체 정의하기
const name = '코냥이'

const me = {
  name,  // 변수의 이름과 key의 이름이 같으면 name:name => name으로 생략 가능 (object literal)
  age: 20,
  'phone number': '010-2222-4444',
  appleProducts: {
    macbook: '2018pro',
    phone: '8'
  }
}
// me.name, me['name'], me['phone number'] 접근 가능
//me.appleProducts.macbook - "2018pro"


// JSON OBJECT
const jsonData = JSON.stringify(me)   // 직렬화 js object를 string값으로 serialize
const parsedData = JSON.parse(jsonData)  // 역직렬화 string을 js object로 deserialize

// ARRAY HELPER METHODS , ES6이후


conCat = (str1, str2) => `${str1}-${str2}`

const checkLongStr = function(string){
  if (string.length > 10) {
    return true
  } else {
    return false
  }
}
if (checkLongStr(conCat('Happy', 'Hacking'))) {
  console.log('LONG STRING')
} else {
  console.log('SHORT STRING')
}