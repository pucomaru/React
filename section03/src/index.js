// Node.js : JavaScript 실행 환경 (구동기)
// npm : Node Package Manager Node.js의 프로젝트단위인 패키지를 관리하는 도구
// 패키지 : Node.js에서 사용하는 프로그램의 단위
// Node.js 패키지 생성 
// 1. npm init

// js 코드를 브라우저가 아닌 Node.js를 이용해서 실행시킴
// node + 실행시키고싶은 파일 
console.log("안녕 Node.js");

// 모듈 시스템 : 모듈을 생성하고, 불러오고, 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템

//ES 모듈 시스템 방식
// const {add, sub} = require("./math");

// CommonJS 방식
import mul, {add, sub} from "./math.js";
console.log(add(1,2));
console.log(mul(2,3));



// package.json 에서 type : "module" 쓴건 ES 모듈 시스템을 쓰겠다는 뜻
