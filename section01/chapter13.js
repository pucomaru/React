// 1. 콜백함수
function main(value){
    value()
}

function sub(){
    // console.log("I am sub");
}

main(() => {
    // console.log("I am sub");
});
// 어떠한 함수를 다른 함수의 인수로 전달하는 것이 가능 

// 2. 콜백함수의 활용
function repeat(count, callback){
    for (let idx = 1; idx <= count ; idx++){
        callback(idx);
    }
}

repeat(5, (idx) =>{
    console.log(idx);
    
})

// function repeatDouble(count){
//     for (let idx = 1; idx <= count ; idx++){
//         console.log(idx* 2);
//     }
// }