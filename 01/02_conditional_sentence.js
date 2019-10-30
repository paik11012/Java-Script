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


// switch문
// const username2 = prompt('당신 누구야');
// let message2 = ''
// switch(username2) {
//   case '민주' : {message2 =  `<hi>안녕하세요 민주씨</hi>`
//     console.log(message2)
//     break
//   }
//   case 'admin' : {
//     message2 = `<h1>주인님의 뜻대로</h1>`
//     console.log(message2)
//     break}
//   default : {
//     message2 = `<h1>welcome ${username2}</h1>`
//     console.log(message2)
//     break}
// }
// document.write(message2)
//
//
//
// switch(사용자.권한) {
//   case '관리자': {
//     사용자.권한 += '관리자 페이지 접근'
//   }
//   case '일반_사용자': {
//     사용자.권한 += '쓰기'
//   }
//   default: {
//     사용자.권한 += '읽기'
//   }
// }