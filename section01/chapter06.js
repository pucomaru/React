// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는것

let num = 10;
let str = "20";

const result = num + str;
// console.log(result)

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
// -> 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1);
// console.log(10 + strToNum1);

let str2 = "10개";
let strToNum2 = Number(str2);

// console.log(strToNum2);
// 결과 Nan나옴 Number()하면

let str3 = "10개";
let strToNum3 = parseInt(str3);
// console.log(strToNum3);
// 문자열도 섞여있으면 parseInt 사용

//  -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = Strng(num1);
