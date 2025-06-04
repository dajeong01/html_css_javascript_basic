const student = {
    name : "제다정",
    age: 25,
}

console.log(student)
console.log(student.name);
console.log(student.age);
console.log(student['name']);
console.log(student['age']);
const a = 'name';
const b = 'age';
console.log(student[a]);
console.log(student[b]);
student[a] = '제다이'
console.log(student);
student.name = '제다삼';
console.log(student);

student.printName = () => console.log("이름 : ", student.name);
student.printName();
const loginButton = {
    text: "로그인",
    values: "test",
    onclick: () => {
        console.log(loginButton.text)
    },
}

loginButton.onclick();
loginButton.onclick = () => {
    console.log("로그인 버튼을 클릭하였습니다.");
}
loginButton.onclick();

console.log(typeof(loginButton));

const loginButtonKeys = Object.keys(loginButton);
console.log(loginButtonKeys);
console.log(loginButton["text"]); 

for (let i = 0; i < loginButtonKeys.length; i++) {
    console.log(loginButton[loginButtonKeys[i]]);
}

const loginButtonValues = Object.values(loginButton);
console.log(loginButtonValues);
for(let i = 0; i < loginButtonValues.length; i++) {
    console.log(loginButtonValues[i]);
}

const loginButtonEntries = Object.entries(loginButton);
console.log(loginButtonEntries);
console.log(loginButtonEntries[0][0]);

for(let i = 0; i<loginButtonEntries.length; i++){
    const entry = loginButtonEntries[i];
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}

// 걍 내가 혼자 연습
for(let i = 0; i < loginButtonEntries.length; i++){
    for(let j = 0; j < loginButtonEntries.length -1; j++){
        console.log(loginButtonEntries[i][j])
    }
    console.log();
}

for (let entry of loginButtonEntries){
    const key = entry[0];
    const value = entry[1];
    console.log(entry, key, value);
}

