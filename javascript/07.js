/* 비구조 할당 (구조분해) */
const student = {
    name: "제다정",
    age: 25,
};

const studentName = student.name;
const studentAge = student.age;
const { studentName2, studentAge2 } = student;
