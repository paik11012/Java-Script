const axios = require('axios')  // 라이브러리를 불러오겠다 import비슷
const url = 'https://jsonplaceholder.typicode.com/posts/1'

axios.get(url)
.then(function(response){ // 요청 보내기, 응답이 도착하면 이 함수를 실행시켜라
  console.log(response.data)
}) // 비동기적 함수 요청이 다 끝나면 무엇을 해라
