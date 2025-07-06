// 순회  iteration : 배열, 객체에 저장된 여러개의 값에 순서대로 하나씩 접근하는 것

// 1. 배열 순위
let arr = [1,2,3];

// 1.1 배열 인덱스
for(let i=0; i< arr.length; i++){
    console.log(arr[i]);
}
// 배열도 객체이기 때문에 현재의 길이를 저장하는 property가 저장돼있음
let arr2= [4,5,6,7,8];
for(let i=0; i<arr2.length; i++){
    console.log(arr2[i]);
}

// 1.2 for of 반복문 of는 뒤에 있는 배열의 값을 하나 씩 저장해서 앞 변수에 저장함
for(let item of arr){
    console.log(item);
}

// 2. 객체 순회
let person = {
    name : "이정환",
    age: 27,
    hobby: "테니스",
};

// 2.1 Object.keys 사용
// -> 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
console.log(keys);

for (let i = 0 ; i < keys.length ; i++){
    console.log(keys[i]);
    
}

for (let key of keys) {
    const value = person[key]
    console.log(key, value);
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
console.log(values);

// 2.3 for in
for(let key in person){
    const value = person[key]
    console.log(key, value)
}

// for of는 배열에만 쓸 수 있고, for in은 객체에만 쓸 수 있음

