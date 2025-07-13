import { useState, useRef } from "react";

// useState 는 리렌더링 useRef 렌더링안됨
// useRef나 useState를 이용해서 만든 특수한 변수들은 컴포넌트가 리렌더링해도 리셋이 되지 않음

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

//onChange 이벤트 핸들러

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  const inputRef = useRef()

  const onChange = (e) => {
    
    countRef.current++;
    console.log(countRef.current);
    
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if(input.name === ""){
        // 이름을 입력하는 DOM 요소 포커스
        inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder="이름"
        />
      </div>
      <div>
        <input name="date" value={input.date} type="date" onChange={onChange} />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
