function sleep(){
  setTimeout(function(){
    console.log('wake up')
  }, 3000)
}
// set time out - 비동기함수
// 삼 초 기다리는 동안 함수가 다른 데 가있고, 그 아래 함수들은 실행된다
console.log('start sleeping')
sleep()
console.log('end of program')