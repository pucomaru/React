section07 

리액트 컴포넌트의 라이프사이클
: Mount(탄생) -> Update(변화) -> UnMount(죽음)


##  1. npm이란?
- `npm`: Node Package Manager의 줄임말
- JS 라이브러리를 설치하고 관리하는 도구
- 예시: `npm install react`, `npm run dev`

---

##  2. Vite란?
- React 등 프론트엔드 프레임워크용 **빠르고 가벼운 빌드 도구**
- CRA보다 빠른 개발 서버와 빌드 속도 제공
- 명령어: `npm create vite@latest`

---

## 3. Hook이란?
- 함수형 컴포넌트에서 React 기능을 쓰기 위한 함수
- 대표적인 Hook:
  - `useState`: 상태값 저장
  - `useEffect`: 부수 효과(side effect) 실행
  - `useRef`: DOM 참조 or 값 기억

---

##  4. useState vs useEffect 차이

| 항목 | useState | useEffect |
|------|----------|-----------|
| 목적 | 상태 저장 | 렌더 후 작업 실행 |
| 실행 시점 | 언제든 호출 | 렌더링 후 자동 실행 |
| 비동기와의 관계 | 직접 비동기 아님, setState는 비동기적 | 비동기 작업 자주 사용됨 |

---

##  5. useState의 비동기성
- `setState()`는 **즉시 반영되지 않고 비동기적으로 처리됨**
- `console.log(count)`는 변경 직후 실행하면 이전 값이 찍힐 수 있음
- 해결 방법:
  - `useEffect`로 값 변화 감지
  - `setState(prev => prev + 1)` 형태로 안전하게 갱신

---

##  6. useEffect의 역할
- 렌더링 **후** 실행되는 코드 작성
- 비동기 API 요청, setInterval 등에서 사용
- 의존성 배열([])에 따라 실행 조건 조절 가능

---

##  7. onChange 이벤트 핸들러
- input, textarea, select 등의 값이 바뀔 때 실행되는 함수
- 사용 예:
```jsx
  <input value={text} onChange={(e) => setText(e.target.value)} />
```



##  8. 비동기란?

* 오래 걸리는 작업을 **기다리지 않고 다음 작업부터 먼저 실행**하는 방식
* 예: `setTimeout`, `fetch`, `addEventListener`, `Promise`, `async/await`

---

##  9. useRef와 current

* `useRef()`는 `{ current: 초기값 }` 객체를 반환
* `.current` 안에 어떤 값이든 저장 가능
* 렌더링과 무관한 값 저장용으로 사용 (리렌더링 X)

```js
const isMount = useRef(false);

useEffect(() => {
  if (!isMount.current) {
    isMount.current = true;
    return;
  }
  console.log("업데이트 시에만 실행");
}, [someState]);
```

---

##  10. useRef의 구조

* 기본 구조: `const ref = useRef(초기값)`
* 반환 값: `{ current: 초기값 }`
* `.current`에 객체/배열 등도 자유롭게 저장 가능
