// 1. 함수 표현식
function funA(){
    console.log("funcA");
}

let varA = funcA;
varA();
// 함수를 변수에 담을 수 있음

let varB = function funcB(){
    console.log("funcB");
}

varB();
// funcB() 는 호출 안됨 그래서 값으로 함수 만들떄는 function (){} 식으로
// 함수표현식으로 만든 대상은 호이스팅 대상이 안됨

// 2. 화살표 함수
let varC = (value) => {
    return value + 1 ;
};

console.log(varC(10));

let varD = () => 1; // 식이 한줄이면 

