// 1. 상수 객체
const animal = {
    type : "고양이",
    name : "나비",
    color : "black",
}

animal = {a : 1} // 오류

animal.age = 2; // 추가
animal.name = "까망이" // 수정
delete animal.color; // 삭제
//상수에 저장된 객체도 프로퍼티를 추가,수정,삭제 가능
// 새로운 값 할당하는 것은 안됨 

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name : "이정환",
    // 메서드
    sayHi : function(){
        console.log("안녕");
        
    },
    // 메서드 선언
    sayHi(){
        console.log("안녕");
        
    }
}

person.sayHi();
person["sayHi"]();

// 이런 메서드들은 이 객체의 동작을 정의하는데 사용