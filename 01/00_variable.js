  console.log('=======LET======')
  let x = 1
  // 한 줄 짜리 주석
  /* 여러 줄 걸친 주석 let: 값을 재할당 할 수 있는 변수를 선언하는 키워드
  */
  x = 3
  // 자바스크립트 모든 코드는 재선언 불가 그러나 재할당은 가능
  
  // console.log(x) // print랑 똑같다
  // 블럭 단위 scope를 갖는다(block scope)
  if (x === 3) {
    let message = '안녕하세요'
    console.log(message)
    console.log(x)
  }
  // console.log(message)
  let y
  console.log(y)
  console.log('======CONST======')
  /* const
   값이 변하지 않는 재할당 할 수 없는 상수 선언, 블록 유효 범위
   "모든" 선언에서 가능한 상수를 사용해야 한다 */
  const fy = 30
  if (fy === 30) {
    const fy = 20
    console.log(fy)
}
  console.log(fy)  // 30으로 인식
  
  
/* 식별자 = 변수명, 규칙이 존재함
   1. 반드시 문자, $, _로 시작해야 한다
   2. 대소문자 구분 존재, class이름 제외하고는 대문자로 시작하지 않는다
   3. 예약어 사용 불가 (const, let, class return)
   4. camelCase -  객체, 함수, 변수
  */

  // 이벤트 핸들러 보통 on으로시작
  const onClick = () => {}
  //  boolean값 보통 is로 시작(isAactivated)
  let isAvailable = false
  // 함수 이름
  funtion getUsename () {}
  
  // 파스칼케이스 class 생성자(upperCamelCase)
  UpperCamelCase = 3
  class User {}
  
  // 대문자 스네이크 케이스 - 상수 표현 시 사용
  const API_KEY = 'sjfpoi2sfjl';
  
  
  
  
  
  