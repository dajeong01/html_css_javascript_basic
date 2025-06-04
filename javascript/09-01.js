setTimeout(() => console.log(1), 3000);
setTimeout(() => console.log(2), 2000);
setTimeout(() => console.log(3), 1000);

new Promise((resolve) => {
    console.log("프로미스1 실행");
    resolve();
})
.then(() => console.log("프로미스 1 then 실행"))
.then(() => console.log("프로미스1 then 실행2"))

new Promise((resolve) => {
    console.log("프로미스2 실행");
    resolve();
}).then(() => console.log("프로미스 2 then 실행"));
