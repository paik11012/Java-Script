## 비동기함수의 처리

콜백함수 :  콜백 함수는 다른 함수에 인자로 넘어가서 실행될 로직을 담게 됩니다 

비동기(Asynchronous) 함수란 쉽게 설명하면 호출부에서 실행 결과를 가다리지 않아도 되는 함수입니다.
반대로 동기 함수(Synchronous) 함수는 호출부에서 실행 결과가 리턴될 때 까지 기다려야 하는 함수입니다 

* 비동기 함수 non-blocking

```json
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
```

python 동기함수 blocking

```python
from time import sleep
def sleep_3():
    sleep(3)
    print('wake up')

print('Start sleeping')
sleep_3()
print('End of program')
# blocking
# sleep은 블로킹한 함수
```

콜 스택

어느 함수가 시행될지 쌓아둠 , 주로 재귀 사용하는 경우: 스스로를 호출할 때

<img src="C:\Users\student\development\JavaScript\03\event-loop.gif" alt="event-loop" style="zoom: 50%;" />

비동기 함수는 웹API에서 실행이 된다

 http://latentflip.com/loupe/?code=ZnVuY3Rpb24gcHJpbnRIZWxsbygpIHsNCiAgICBjb25zb2xlLmxvZygnSGVsbG8gZnJvbSBiYXonKTsNCn0NCg0KZnVuY3Rpb24gYmF6KCkgew0KICAgIHNldFRpbWVvdXQocHJpbnRIZWxsbywgMzAwMCk7DQp9DQoNCmZ1bmN0aW9uIGJhcigpIHsNCiAgICBiYXooKTsNCn0NCg0KZnVuY3Rpb24gZm9vKCkgew0KICAgIGJhcigpOw0KfQ0KDQpmb28oKTs%3D!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D 

3초가 지난 시점에 무언가를 시행할 수 있도록 작업

<실행>

node title.js



##  XML HTTP REQUEST

 https://developer.mozilla.org/ko/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest 

전체 페이지의 새로고침없이도 URL 로부터 데이터를 받아올 수 있습니다. 이는 웹 페이지가 사용자가 하고 있는 것을 방해하지 않으면서 페이지의 일부를 업데이트할 수 있도록 해줍니다 

XHR 비동기적 특징 지님

우리가 이용하는 모든 서비스는 XHR을 이용하고 있다

* AJAX (XHR 이용)

```
AJAX (Asynchronous JavaScript And XML)는 HTML, CSS, JavaScript, DOM 조작, 와 XMLHttpRequest object를 활용한 프로그래밍 방식이다. AJAX는 전체 페이지가 다시 로드되지 않고 일부분만 업데이트하는 좀 더 복잡한 웹페이지를 만들 수 있게 해준다. 또한 AJAX를 사용하면 웹페이지 일부가 리로드 되는 동안에도 코드가 계속 실행되어 비동기식으로 작업할 수 있다.  (동기적으로 움직이는 코드와 비교하자면 웹페이지가 로딩이 끝날 때 까지 당신의 코드는 움직이지 않습니다.)
```

```javascript
const XHR = new XMLHttpRequest()
const url = 'https://jsonplaceholder.typicode.com/posts/1'
XHR.open('GET', url)
XHR.addEventListener('load', function(event) {  // 함수 정의
console.log(event)
})
XHR.send()

ProgressEvent {isTrusted: true, lengthComputable: false, loaded: 292, total: 0, type: "load", …}
bubbles: false
cancelBubble: false
cancelable: false
composed: false
currentTarget: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
defaultPrevented: false
eventPhase: 0
isTrusted: true
lengthComputable: false
loaded: 292
path: []
returnValue: true
srcElement: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
target: XMLHttpRequest {onreadystatechange: null, readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}
timeStamp: 293460.72000000277
total: 0
type: "load"
__proto__: ProgressEvent
```

target-respose 우리가 응답받은 객체

vscode - npm init

npm.axios - 가상환경 node_modules 엄청 무겁다 (올리지말기 .gitignore)



## AXIOS

Javascript에서 xhr을 만들어서 요청을 보내주는 툴(라이브러리)

요청을 보내는 역할을 한다

```javascript
const axios = require('axios')  // 라이브러리를 불러오겠다 import비슷
const url = 'https://jsonplaceholder.typicode.com/posts/1'
axios.get(url)  // 요청 보내기

$ node 02_axios_node.js
Promise { <pending> }
```

```javascript
const axios = require('axios')  // 라이브러리를 불러오겠다 import비슷
const url = 'https://jsonplaceholder.typicode.com/posts/1'

axios.get(url)
.then(function(response){ // 요청 보내기, 응답이 도착하면 이 함수를 실행시켜라
  console.log(response.data)
}) // 비동기적 함수 요청이 다 끝나면 무엇을 해라

$ node 02_axios_node.js
```

### axios불러오기

cdn import 후 사용

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- axios cdn -->
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <title>Use Axios</title>
</head>
<body>
  <script>
  const url = 'https://jsonplaceholder.typicode.com/posts/1'  // 요청 보낼 url 정의
  axios.get(url)
  .then(function(response){ // 응답이 도착한 다음 실행할 함수 정의
    console.log(response.data)
  })  
  </script>
</body>
</html>
```



## 실습:  버튼 누를 때마다 요청과 응답 (개고양이 사진 가져오기)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
  <!-- Axios -->
  <title>Cats and Dogs</title>
  <style>
    img {
      width: 300px;
      height: 300px;
    }
  </style>
</head>
<body>
  <h1>냥왈냥왈</h1>
  <button type="submit" id="dogButton">댕댕이 볼래</button>
  <button type="submit" id="catButton">냥이 볼래</button>
  <div class="animals"></div>

  <script>
    // axios를 통해 개 사진을 달라는 요청을 보낸다
    const DOG_API_URL = 'https://dog.ceo/api/breeds/image/random'
    const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search'
    const getDogImage = function(){  // 개 이미지 가져오는 함수 정의
      axios.get(DOG_API_URL)
    .then(function(response){  // 요청이 도착하면 함수 실행
      const dogImageUrl = response.data.message  // 응답받은 데이터에서 개 url을 꺼냄
      const dogImage = document.createElement('img')  // 태그 생성
      dogImage.src = dogImageUrl  // src에 넣어서 이미지 생성
      dogImage.alt = 'dog'
      // div.animals 안에 개 이미지태그를 하나씩 push
      const animalsList = document.querySelector('div.animals')
      animalsList.append(dogImage)
    })
    }
    
    const getCatImage = function(){  // 고양이 이미지 가져오는 함수 정의
      axios.get(CAT_API_URL)
    .then(function(response){  // 요청이 도착하면 함수 실행
      const catImageUrl = response.data[0].url 
      const catImage = document.createElement('img')  // 태그 생성
      catImage.src = catImageUrl  // src에 넣어서 이미지 생성
      catImage.alt = 'cat'
      // div.animals 안에 이미지태그를 하나씩 push
      const animalsList = document.querySelector('div.animals')
      animalsList.append(catImage)
    })
    }

    const dogButton = document.querySelector('#dogButton')  // 만든 버튼 정의하기
    dogButton.addEventListener('click', () =>{
      getDogImage()
    })
    const catButton = document.querySelector('#catButton')  // 만든 버튼 정의하기
    catButton.addEventListener('click', () =>{
      getCatImage()
    })
  </script>
</body>
</html>
```



