/* 단축 평가 논리 */
const name = '제다정';

console.log(name && !!'제다이'); 

/* And 연산자 */
console.log(true && 10);
// 앞쪽이 true이면 무조건 뒷값을 가져옴
console.log(false && 10);
// 앞쪽이 false이면 결과값도 무조건 fasle

/* Or 연산자 */
console.log(true || 10);
// 얘는 true이면 true 리턴
console.log(false || 10);
// 얘는 false야 뒤에꺼 들고옴

/* ?? 연산(nullish 병합 연산) */
// 앞의 값이 null 또는 undefined 가 아니면 앞의 값, 그 외에 뒤의 값을 가져옴
console.log(null ?? 100);
console.log(undefined ?? 100);
console.log(20 ?? 100);