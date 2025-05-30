let name = '제다정';
console.log('hello js');
console.log(name);
name = '제다징';
console.log(name);
const age = 32;
console.log(age);
// age = 33;        const는 상수라서 재대입 x 
// console.log(age);  

/* 연산자 */
console.log("-----------------연산 활용")
let data1 = 10;
let data2 = '10';
let result1 = data1 == data2;
console.log(result1);
let result2 = data1 === data2;
console.log(result2);
console.log(typeof (data1), typeof (data2));
console.log("1" + "2");
console.log(1, 2);      // , 뒤에 띄어쓰면 띄어쓰기 자동으로 들감

/* not 연산 활용법 */
console.log("-----------------not 연산 활용")
console.log(!1);
console.log(!0);
console.log(!"a");
console.log(!"");
console.log(!null);
console.log(!!null);

console.log("".length > 0);
console.log(!!"");

console.log("-----------------if문 활용")
let data = {
    name: "제다정", age: 25
}
if (!data) {
    console.log("사용자 정보가 없습니다.");
} else if (data.name === "제다징") {
    console.log("사용자 이름이 일치합니다.");
} else if (data.age === 25) {
    console.log("사용자 이름은 일치하지 않지만 나이는 일치합니다.");
} else {
    console.log("사용자가 일치하지 않습니다.");
}

console.log("-----------------for문 활용")
for(let i = 0; i < 10; i ++) {
    console.log(i);
}
