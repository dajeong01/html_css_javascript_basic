/* 비구조 할당 (구조분해) ( 키값이랑 변수명이 같아야함! 순서는 상관없음) */
const student = {
    name: "제다정",
    age: 25,
    address: "부산 사하구"
};

// 방법1
const studentName = student.name;
const studentAge = student.age;
console.log(studentName);
console.log(studentAge);

// 방법2
const { name: studentName2, age } = student;
console.log(studentName2);
console.log(age);

// 방법3
function printStudentInfo({name, address: addr, age}) {
    console.log(name)
    console.log(addr)     
    console.log(age)
}
printStudentInfo(student);

/* 객체 구조분해할 때 주의할점 */
// 객체의 속성명이 같으면 변수 이름을 바꿔줘야함
const s1 = {
    name: "제다정",
    age: 25
}

const s2 = {
    name: "제다이",
    age: 26
}

const {name: n1, age: a1} = s1;
const {name: n2, age: a2} = s2;

// 배열 비구조할당
const numbers = [1, 2, 3, 4, 5];
const [num1, num2, num3] = numbers;
console.log(num1);
console.log(num2);
console.log(num3);

const useState = (data) => {
    const dataState = {
        data: data,
        setData: (d) => {
            console.log(d, "데이터 set")
        } 
    }
    return [dataState.data, dataState.setData]
};

const [userData, setUserData] = useState({username: "test", password: "1234"});
console.log(userData);
setUserData({username: "test2", password: "5678"});
