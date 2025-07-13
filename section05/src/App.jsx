// 리액트 컴퍼넌트는 state 값이 변할때만 리렌더링됨
// 리액트 컴포넌트 리렌더링 발생하는 세 가지 상황
// 1. 자신이 관리하는 state 값이 변경될 때
// 2. 자신이 제공받는 props 값이 변경될 때
// 3. 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트도 리렌더링

// 리팩토링 해보기 상태변수 분리 (불필요한 리렌더링 발생하지 않게) 모듈화 ㄱㄱ

import "./App.css";
import Button from "./components/Button";

import Register from "./components/Register"
import HookExam from "./components/HookExam";

function App() {
  // const buttonProps = {
  //   text : "메일",
  //   color : "red",
  //   a : 1,
  //   b : 2,
  //   c : 3,
  // }


  return (
    <>
      {/* <Button {...buttonProps} />
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        <Header />
        {/* <div> 자식 요소 </div> */}
      {/* </Button> */}
        <Register />
        <HookExam /> 
    </>
  );
}

export default App;
