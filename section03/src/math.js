// math 모듈
function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}

// commonJS 방식
// module.exports = {
//     add : add,
//     //add,
//     sub : sub,
//     //sub, value랑 key값이 같을 경우
// }

// ES 모듈 시스템 방식
export { add, sub};

// 함수앞에다가 export 붙여도 ok 

export default function multiply(a,b){
    return a*b;
}