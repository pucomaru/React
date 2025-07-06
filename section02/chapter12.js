function task(){
    setTimeout(()=> {
        console.log("안녕하세요!");
    }, 3000);
}

task();

function add(a,b,callback){
    setTimeout(()=>{
        const sum = a + b;
        callback(sum)
    }, 3000);
}

add(1, 2, (value)=>{
    console.log(value);
});

// 음식을 주문하는 상황
function orderFood(callback){
    setTimeout(()=> {
        const food = "떡볶이"
        callback(food);
    },3000);
}

function cooldownFood(food,callback){
    setTimeout(()=>{
        const cooldownfood = `식은 ${food}`;
        callback(cooldownfood);
    },2000)

}

function freezeFood(food,callback){
    setTimeout(()=>{
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    },1500)
}

orderFood((food)=>{
    console.log(food);

    cooldownFood(food,(cooldownfood)=>{
        console.log(cooldownfood);

        freezeFood(food,(freezedFood)=>{
            console.log(freezedFood);
            
        })
    });
})

// 콜백 지옥 .. 기능이 늘어날수록 가독성 안좋아짐