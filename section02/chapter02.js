function returnFalse(){
    console.log("False 함수");
    return false;
}

function returnTrue(){
    console.log("True 함수");
    return true;
}

console.log(returnFalse() && returnTrue())
// 결과 false 함수 호출하고 false
// 앞이 false 이니 and 특성상 뒤에 보지도 않음 단락 평가
// 함수 위치가 서로 바뀐다면 두 함수 호출 true는 True니까

// 단락 평가 활용 사례 
function printName(person){
    console.log(person && person.name);
    //person 객체가 없다면 person.name 접근하지도 않음
}