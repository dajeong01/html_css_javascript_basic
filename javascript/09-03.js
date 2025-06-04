function thenFx1(result) {
    console.log(3)
    console.log("thenfx1(result):", result);
    return 200;                                                                                               
}
function thenFx2(result) {
    console.log(4)
    console.log("thenfx2(result):", result);                                                                                           
}
function promiseFx(resolve, reject) {
    console.log(2)
    // resolve(100);
    reject(new Error("오류발생!!"))
}
// resolve가 실행이 되면 then이 실행이 되고
// reject가 실행이 되면 catch가 실행이 됨
console.log(1);
const p1 = new Promise(promiseFx);
console.log("-1-");
const p2 = p1.then(thenFx1);
console.log("-2-");
const p3 = p2.then(thenFx2);
console.log("-3-");

const e1 = p3.catch(error => console.error(error));

const p4 = new Promise(promiseFx);
console.log("-4-");
const p5 = p4.then(thenFx1);
console.log("-5-");
const p6 = p5.then(thenFx2);
console.log("-6-");

const e2 = p6.catch(error => console.error(error));