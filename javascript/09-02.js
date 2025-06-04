/* Promise(비동기 객체) */
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
    resolve(100);
}
console.log(1);
const p1 = new Promise(promiseFx);
console.log("-1-");
const p2 = p1.then(thenFx1);
console.log("-2-");
const p3 = p2.then(thenFx2);
console.log("-3-");
const p4 = new Promise(promiseFx);
console.log("-4-");
const p5 = p4.then(thenFx1);
console.log("-5-");
const p6 = p5.then(thenFx2);
console.log("-6-");