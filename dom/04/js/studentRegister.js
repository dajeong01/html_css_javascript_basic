let studentInputValues = {
    id: 0,
    name: "",
    age: "",
    address: "",
}

function handleRegisterOnkeyup(e) {
    studentInputValues = {
        ...studentInputValues,
        [e.target.name]: e.target.value,
    }
}

const handleRegisterOnclick = (e) => {
    studentInputValues["id"] = 1;
    let lastStudent = null;
    if (studentList.length > 0) {
        lastStudent = studentList[studentList.length -1];
        studentInputValues["id"] = lastStudent.id + 1;
    }
    studentList = [...studentList, studentInputValues];
    studentInputValues = {
        id: 0,
        name: "",
        age: "",
        address: "",
    }
    console.log(studentList);
    studentListUl = loadStudentList();
}

function studentRegister() {
    return `
        <div>
            ${studentRegisterInput({type: "text", name: "name", onkeyup: "handleRegisterOnkeyup"})}
            ${studentRegisterInput({type: "text", name: "age", onkeyup: "handleRegisterOnkeyup"})}
            ${studentRegisterInput({type: "text", name: "address", onkeyup: "handleRegisterOnkeyup"})}
            <div>
                <button onclick="handleRegisterOnclick(event)">등록</button>
            </div>
        </div>
    `;
}