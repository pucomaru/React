import { useState, useEffect, useRef } from "react";
import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  
  const isMount = useRef(false)
  //1. 마운트 : 탄생
  useEffect(()=>{
    console.log("mount");
  },[])

  //2. 업데이트 : 변화, 리렌더링
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true;
      return ;
    }
    console.log("update");
  })
  //3. 언마우트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <h1>Simple counter</h1>
      <section>
        <input value={input} onChange={(e)=>{
          setInput(e.target.value)
        }} />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton = {onClickButton} />
      </section>
    </div>
  );
}

export default App;
