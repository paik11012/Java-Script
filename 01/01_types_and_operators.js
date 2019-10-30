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

// strings
const s1 = 'lets go'
const s2 = "lets go"
const s3 = `lets go`
console.log(s1)
console.log(s2)
console.log(s3)

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

// boolean type 소문자로 표현
true
false

// empty value 값이 존재하지 않음을 표현하는 값
undefined
null

// let firstName  // undefined 여기에는 값이 없는데?
// let lastName = Null  // 우리가 의도적으로 값이 없음을 표시할 때(의미적으로) null은 자바스크립트가 우리에게 줄 리가 없다, 직접 우리가 넣는다

let students = {}
students.jason // undefined

// typeof 무언가 type을 알려주는 함수
typeof null // object
typeof undefined  // undefined


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

