// 크로스 브라우징 이슈는 웹사이트가 다양한 웹 브라우저에서 동일한 방식으로 
// 동작하지 않거나, 디자인이 일관되지 않는 문제 

const Button = ({ children, text, color = "black" }) => {
  // 이벤트 객체 
    const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button 
        onClick={onClickButton} 
        style={{ color: color }}
        // onMouseEnter={onClickButton}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
