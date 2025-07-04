// 함수 선언

function getArea (width, height){
    let area = width * height;

    return area;
}

let area1 = getArea(10, 20);

// 자바 스크립에서는 자바 선언이 자바 호출뒤에 와도 정상적으로 실행
// 됨 호이스팅이라는 기능이 있어서. 