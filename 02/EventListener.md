변수, 인수, 반환값 = 일급객체

javascript의 함수는 일급객체다

## EventListener

* DOM Document object model

  보여지는 문서 자체를 조작할 수 있는 객체 모델

* DOM TREE

html안에 head body존재 등등 tree처럼 생겼다

### 요소 선택 및 변수에 할당 가능

document라는 object를 통해 선택 가능

아무것도 안 적었을 때: 태그 네임

####은 id

.은 클래스

1) 선택 가능

```
document.querySelector('div.bg')  // 배경 선택
```

2) 변수 할당 가능

```
 const bg = document.querySelector('.bg')
```

해당 element가 그대로 들어가 있다

3) bg를 통해 자식요소 다시 선택 가능

```
bg.querySelector('#dino')
const dino = bg.querySelector('#dino')  // 재할당
```

즉 모든 element에는 queryselector가 존재한다

element의 속성도 변경 가능(src)

## 요소 삭제

```javascript
dino.style.height = '500px'
// 삭제하기
dino.remove()  // 대상을 직접 삭제
document.querySelector('#dino').remove()  
bg.firstElementChild.remove()  // 대상의 자식 요소 삭제하기 / lastElementChild
```

```javascript
bg.removeChild(bg.firstElementChild)
bg.removeChild(bg.lastElementChild)  // 괄호 안에 자식요소 넣기
bg.removeChild(dino)  // 특정 자식 삭제
```

실습 : body에 자식 element가 하나도 없을 때까지 element를 삭제, 힌트: while 이용

```javascript
  // 실습 body에 자식 element가 하나도 없을 때까지 element를 삭제, 힌트: while 이용
  // 아무것도 없을 때 element child불러오면 null
  const body = document.querySelector('body')  // document.body 가능
  while (body.firstElementChild !== null){
    body.firstElementChild.remove()  // null.remove가 되어 에러가 뜬다
  }
```

## 요소 추가

```javascript
document.createElement('span')  // span태그 만들기
const newDino = document.createElement('img')    // img태그 만들기
newDino.id = 'newDino'
newDino.alt = 'dinosaur'
newDino.src = 'https://store-images.s-microsoft.com/image/apps.38351.14426311725358695.736eb785-1d29-478c-a909-1900849773e9.4247f5ee-1daa-4c97-96c2-23868f1fbc45?mode=scale&q=90&h=200&w=200&background=%230078D7'

bg.appendChild(newDino)    // 대상에 요소 추가하기, 가장 마지막에 추가하기
bg.insertBefore(newDino, bg.firstElementChild) // 무엇을 어디에 처음에 추가하겠다
```

## Event Listener

```
  //Event Listener
  dino.addEventListener('click',() => {
    console.log('아야')
  })
  // 'click', event => {console.log(event)}
```

```
MouseEvent {isTrusted: true, screenX: 736, screenY: 569, clientX: 736, clientY: 466, …}
altKey: false
bubbles: true
button: 0
buttons: 0
cancelBubble: false
cancelable: true
clientX: 736
clientY: 466
composed: true
ctrlKey: true
currentTarget: null
defaultPrevented: false
detail: 1
eventPhase: 0
fromElement: null
isTrusted: true
layerX: 736
layerY: 466
metaKey: false
movementX: 0
movementY: 0
offsetX: 46
offsetY: 40
pageX: 736
pageY: 466
path: (6) [img#dino, div.bg, body, html, document, Window]
relatedTarget: null
returnValue: true
screenX: 736
screenY: 569
shiftKey: false
sourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}
srcElement: img#dino
target: img#dino
timeStamp: 81869.85999999888
toElement: img#dino
type: "click"
view: Window {parent: Window, postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, …}
which: 1
x: 736
y: 466
__proto__: MouseEvent
```

```javascript
  // 방향키를 눌렀을 때만 EVENT를 출력할 수 있도록 조건문 작성
  document.addEventListener('keydown', event => {
    if(event.key === 'ArrowUp') {
      console.log('위')
      dino.style.marginBottom = '20px'
    } else if (event.key === 'ArrowDown') {
      console.log('아래')
      dino.style.marginTop = '20px'
    } else if (event.key === 'ArrowRight') {
      console.log('오른쪽')
      dino.style.marginLeft = '20px'
    } else if (event.key === 'ArrowLeft') {
      console.log('왼쪽')
      dino.style.marginRight = '20px'
    }
  })
```

움직이는 공룡

```javascript
  let x = 0
  let y = 0
  document.addEventListener('keydown', event => {
    if(event.key === 'ArrowUp') {
      y += 20
      dino.style.marginBottom = `${y}px`
    } else if (event.key === 'ArrowDown') {
      y -= 20
      dino.style.marginBottom = `${y}px`
    } else if (event.key === 'ArrowRight') {
      x += 20
      dino.style.marginLeft = `${x}px`
    } else if (event.key === 'ArrowLeft') {
      x -= 20
      dino.style.marginLeft = `${x}px`
    }
  })
```

마우스 피하는 공룡

```javascript
  // 마우스 올라가면 피하기 게임 mouseover, math.random, window.innerwidth
  dino.style.position = 'absolute';  // 중요
  dino.addEventListener('mouseover', ()=>{
    const newH = window.innerHeight * Math.random();
    const newW = window.innerWidth * Math.random();
    dino.style.left = newW + 'px'
    dino.style.top = newH + 'px'
  })
```



## 쇼핑리스트 만들기

```
const h1 = document.querySelector('h1')
undefined
h1.innerText
"My Shopping List"
const input = document.querySelector('input')
undefined
input.value = '딸기'
"딸기"
```

additem누르면 원하는 값 가져오고 li안쪽 ul태그만들어서 생성해서 원하는 값 넣기 (push)

뒤에 delete누르면 아이템 하나 삭제(선택적)

create element(특정 태그)

특정 위치에 삽입하기 insert

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Shopping List</title>
</head>
<body>
  <h1>My Shopping List</h1>
  <div>
    Enter a new item:
    <input type="text" id="input">
    <button type="submit" id="submit">Add Item</button>
  </div>
  <ul>
  </ul>
  <script>
    const button = document.querySelector('#submit')
    button.addEventListener('click', () => {
      const newItem = document.createElement('li')
      const delButton = document.createElement('button')  // 새로운 태그 만들기
      delButton.innerText = 'Delete'
      const ul = document.querySelector('ul')
      const input = document.querySelector('input')
      newItem.innerText = input.value
      ul.appendChild(newItem)
      newItem.appendChild(delButton)
      delButton.addEventListener('click', () => {
        newItem.remove()
          }
      )
    })
  </script>
</body>
</html>
```

