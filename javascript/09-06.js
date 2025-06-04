/* async(비동기 함수 정의 키워드), await(비동기 함수 동기 호출 키워드) 
await 키워드는 async 함수 안에서만 사용가능!!!(단, 전역 호출은 가능)
*/

async function fx1(isOk) {
    console.log("fx1 호출")
    if(!isOk) throw new Error("오류 발생");
    return "정상 리턴";
}

const fx2 = async (isOk) => {
    console.log("fx2 호출");
        if(!isOk) throw new Error("오류 발생");
    return "정상 리턴";
}

async function main() {
    let r1 = null;

    fx1(true)
    // fx1(false)
    .then(result => r1 = result)
    .then(() => console.log(r1))
    .catch(error => console.error(error))
    console.log("fx1 응답!!!!!!!!!!!!!!")

    let r2 = await fx1(true);
    // let r2 = await fx1(false); 이럴때는 예외 처리 따로 해줘야함
    console.log(r2);
    console.log("fx2 응답!!!!!!!!!!!!!")

    try { 
        let r3 = await fx1(false);
        console.log(r3);
    } catch(error) {
        console.error(error);
    }
    console.log("fx3 응답!!!!!!!!!!!!")

}
main();
