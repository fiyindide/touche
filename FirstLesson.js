let myArr =[0,1,2];
let TotalCount = 0;

for(let i = 0; i < myArr.length; i++){
    TotalCount += myArr[i];
}
console.log(TotalCount);

let num = Math.floor(Math.random() * 20);
console.log(num);

function randomRange(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomRange(10,12));

console.log(parseInt("10", 2));


