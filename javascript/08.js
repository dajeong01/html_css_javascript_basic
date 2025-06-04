const student = {
    name: '제다정',
    age: 25,
    address: '부산 사하구',
    phone:'010-2557-9691',
    hobby: '민턴'
};

// 비구조할당
const { name, address} = student;
console.log(name, address);

// REST 문법 (나머지 문법) => 쉽게 말해서 비구조할당으로 꺼내고 남은걸 rest에 넣겠다는 말
const { age, phone, ...rest} = student;
console.log(age, phone, rest);

const numbers = [1,2,3,4];  // 굳이 rest라고 안하고 다른 변수명 적어도 가능
const [n1, n2, ...ns] = numbers;
console.log(n1, n2, ns);

// 객체 spread
const newStudent = {
    ...student,
    gender: '여',
};
console.log(newStudent);

// 배열 spread 
const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);

const newNumber2 = numbers;

let names = [];
function addName(name) {
    names = [...names, name];
}

let obj = {
    data1: "data1",
    data2: "data2",
}
function addProps(props) {
    obj = {
        ...obj,
        ...props
    }
}
addProps({data3: "data3", data4: "data4"});
console.log(obj)
