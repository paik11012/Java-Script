자바스크립트 마치 멀티쓰레딩 하듯이

## JAVA SCRIPT

open settings-json 

```
"[javascript]" : {"editor.tabSize": 2}
```

ctrl comma - detect indentation 끄기

### let 변수 할당

```javascript
<body>
    <div>
<!--1. ux적인 측면, 코드를 해석하는 데 시간이 오래 걸리기에 2. 실제 이벤트 등록 시 어떤 태그인지 알려주고 이벤트 실행해야 함-->
    </div>
    <script>
    let x = 1
        // 한 줄 짜리 주석
        /* 여러 줄 걸친 주석 let: 값을 재할당 할 수 있는 변수를 선언하는 키워드
        */
    </script>
</body>
```

```javascript
x
1
let y = 2
undefined // 반환하는 값이 없을 때
let x = 1    // 한 줄 짜리 주석    /* 여러 줄 걸친 주석 let: 값을 재할당 할 수 있는 변수를 선언하는 키워드    */x = 3    // 자바스크립트 모든 코드는 재선언 불가 그러나 재할당은 가능console.log(x)
```

자바스크립트 모든 코드는 재선언 불가 그러나 재할당은 가능

```javascript
    if (x === 3) {
        let message = '안녕하세요'
        console.log(message)
    }
    console.log(message)
```

```javascript
let y
console.log(y)
// 결과 undefined = 파이썬 none
```

결과: 안녕하세요 , not defined

블럭 안에 선언하면 그 안에서만 존재한다

안에서 밖 참조 가능, 밖에서 안 참조 불가

블럭: if for 함수

## javascript 호출하기

html

```
<script src="00_variable.js">
```

### const

값이 변하지 않는 재할당 할 수 없는 상수 선언, 블록 유효 범위

const 값이 변하지 않는 재할당 할 수 없는 상수 선언, 블록 유효 범위 "모든" 선언에서 가능한 상수를 사용해야 한다

```
const fy_f = 30
fy_f = 20
```

재할당시 에러 뜸 00_variable.js:24 Uncaught TypeError: Assignment to constant variable. 상수에 할당하려 하다니!

```javascript
  const fy = 30
  if (fy === 30) {
    const fy = 20
    console.log(fy)  // 20
}
  console.log(fy)  // 30
```

## 식별자

1. 반드시 문자, $, _로 시작해야 한다
2. 대소문자 구분 존재, class이름 제외하고는 대문자로 시작하지 않는다
3. 예약어 사용 불가 (const, let, class return)
4. 카멜케이스로 작성(camelCase) 객체, 함수, 변수



# types and operators

## primitive types

```javascript
// types and operators 타입과 연산자
// primitive types

// numbers
const a = 13
const b = -5
const c = 3.141592
const d = 2.8e8  // 큰 수 2.8 * 1- ^ 8
const e = Infinity
const f = -Infinity
const g = NaN  // not a number
console.log(a, b, c, d, e, f, g)
console.log(5 / '안녕하세요')  // NaN 할 수 없는 연산을 할 때
```

## strings

```javascript
// strings
const s1 = 'lets go'
const s2 = "lets go"
const s3 = `lets go`
console.log(s1)
console.log(s2)
console.log(s3)
```

싱글 코테이션 권장

```javascript
// 따옴표를 사용하면 줄바꿈이 안됨, 대신 escape sequence사용가능
const word = '반갑\n습니다'  // \t 탭
console.log(word)
// 가능 백틱으로 가능
const word2 = `안녕
하세요`
console.log(word2)

// template literal 사용 백틱일 때만 가능하다!
const age = 10
const message = `홍길동의 나이는 ${age}살 입니다`
console.log(message)

console.log('happy'+' hacking')
```

boolean

```
// boolean type 소문자로 표현
true
false
```

empty

```javascript
// empty value 값이 존재하지 않음을 표현하는 값
undefined
null

let firstName  // undefined 여기에는 값이 없는데?
let lastName = Null  // 우리가 의도적으로 값이 없음을 표시할 때(의미적으로) null은 자바스크립트가 우리에게 줄 리가 없다, 직접 우리가 넣는다
let students = {}
students.jason // undefined
```

연산자

```javascript
// operators 연산자
let x = 0
x += 10
x -= 3
x *= 3  // 21
x++ // 22
x-- // 21

// 비교연산자
3 > 2 // true
2 > 3 // false

// 문자열 비교
// 영어 소문자가 대문자보다 큼, 알파벳은 오름차순, 한글비교도 가능
'A' < 'a'
'a' < 'c'

// 동등연산자 ==
// 서로 같은 값을 같도록 변환할 수 있으면 같다고 판단, 자바스크립트 엔진이 자동으로 형변환
// 동등연산자 사용은 지양
const a1 = 1
const b1 = '1'  // true
// 형이 다른데도 변환해서 비교하네 이러면 안되는데


// 일치연산자 === !==
1 === '1' // false
1 === Number('1') // true

// 논리연산자 and or not
true && true  // true
true && false // false
1 && 0 // 0
1 && 1 // 1

true || true // or - true 하나라도 참이면 true
true || false // true
false || false // false

!true  // not - false 단일연산자

// 삼항연산자
// 가장 앞 boolean값이 참 : 앞의 값 반환, 그렇지 않으면 뒤에 값 반환
let flag = true
result = flag ? '참':'거짓'
console.log(result)
```



## if

```javascript
const username = prompt('누구신가요');
let message = ''
if (username === '민주') {
  message = `<hi>안녕하세요 민주씨</hi>`
  } else if (username === 'admin') {
  message = `<h1>주인님의 뜻대로</h1>`
} else {
  message = `<h1>welcome ${username}</h1>`
}
document.write(message)
```

## switch

```javascript
// switch문
const username2 = prompt('당신 누구야');
let message2 = ''
switch(username2) {
  case '민주' : {message2 =  `<hi>안녕하세요 민주씨</hi>`
    console.log(message2)
    break
  }
  case 'admin' : {
    message2 = `<h1>주인님의 뜻대로</h1>`
    console.log(message2)
    break}
  default : {
    message2 = `<h1>welcome ${username2}</h1>`
    console.log(message2)
    break}
}
document.write(message2)
```

```javascript
switch(사용자.권한) {
  case '관리자': {
    사용자.권한 += '관리자 페이지 접근'
  }
  case '일반_사용자': {
    사용자.권한 += '쓰기'
  }
  default: {
    사용자.권한 += '읽기'
  }
}
```



## 반복문 for, while

```javascript
for (let i = 0; i < 5; i++) {
  // i = 0부터 시작, i가 5보다 작을 때 시작, 한 번 돌 때마다 1씩 증가
  console.log(i)
}
console.log("------------for-----------")
const numbers = [0, 1, 2, 3, 4, 5, 6, 7]
for (const number of numbers) {
  console.log(number)
}

console.log("------------while-----------")

let j = 0
while(j < 5){
  console.log(j)
  j++
}
```



## 함수

```javascript
console.log(add)
// 파일 제일 밑에 선언 되더라도 사용 가능
console.log(sub)
// 표현식은 인식 불가

// 함수 선언식
function add(num1, num2) {
  return num1 + num2
}
console.log(add(1, 2))

// 함수 표현 식 (변수에 할당) 일반적으로 표현식 이용!
const sub = function(num1, num2) {
  return num1 - num2
}
```

arrow function

```javascript
// ES6이후 문법, function 생략
let addOne = function(num){
  return num + 1
}

addOne = (num) => {
  return num + 1
}  // 익명함수만 쓸 수 있다, 이렇게 많이 쓸 예정
// 기능적 차이 존재

addOne = (num) => num + 1
```

실습

```javascript
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
```





## 배열 온갖 문법 정리 push pop shift includes indexOf join

```javascript
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
```



## 객체 정의하기

```javascript
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
const parsedData = JSON.parse(jsonData)  // 역직렬화 string을 js object로
```



## ARRAY HELPER METHOD (forEach, map)

```javascript
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
const rootNumbers = numbers2.map( number => {
  return Math.sqrt(number)
})
console.log(rootNumbers)
const rootNumbers2 = numbers2.map(number => Math.sqrt(number))
console.log(rootNumbers2)// 숫자가 담긴 배열을 받아 각 수의 제곱근이 들어있는 새로운 배열 만들기
const numbers2 = [4, 9, 16, 25]
const rootNumbers = numbers2.map(number => {
  return Math.sqrt(number)  // number ** 0.5
})
const rootNumbers2 = numbers2.map(number => Math.sqrt(number))
```

