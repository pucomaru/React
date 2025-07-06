// Shift + Alt + 방향키 한줄 복사 
// Ctrl + X : 잘라내기 + (Ctrl+c) 
// Promise : 비동기 작업을 효율적으로 처리할 수 있도록 도와주는 자바스크립트의 내장 객체

function add10(num){
    const promise = new Promise((resolve,reject)=> {
        // 비동기 작업 실행하는 함수
        // executor
        // executor 함수에는 resolve(성공),reject(실패) 매개변수가 전달된다

        setTimeout(()=> {
            if (typeof num === 'number'){
                resolve(num + 10);
            } else{
                reject("num이 숫자가 아닙니다");
            }
        },2000); 
    });

    return promise;
}

const p = add10(0);
p.then((result)=>{
    console.log(result);

    const newP = add10(result);
    return newP;
}).then((result)=>{
console.log(result);
})
.catch((error)=>{
    console.log(error); 
});

// then 메서드 
// -> 그 후에 
// Promise 의 비동기 작업이 성공했을 때만 실행
// catch 는 실패버전 then

// 프로미스 객체를 이용할때 then,catch 를 잘활용하면 
// 프로미스가 관리하는 비동기 작업이 성공하거나 실패했을 때 그 결과 값을
// 우리가 이용할 수 있음