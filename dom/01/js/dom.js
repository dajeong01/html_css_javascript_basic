const name = '제다정';
const age =32;
const person = {
    "name": name,
    "age": age,
};

const person2 = {
    name,
    age,
    address: "부산사하구"
};

console.log(person);
console.log(person2);

const title1 = document.getElementById("title");
console.log({title1});
const titles = document.getElementsByClassName("title");
console.log(titles);
const h3s = document.getElementsByTagName("h3");
console.log(h3s);
const d1 = document.getElementById("d1");
const d2 = document.getElementById("d2");
console.log(document);

const title1q = document.querySelector("#title")
const titles2 = document.querySelectorAll(".title");
console.log(titles2);
const h3s2 = document.querySelectorAll("h3");
const d12 = document.querySelector("#d1");
const d22 = d12.querySelector("#d2");
console.log(d12);
console.log(d22);
const d23 = document.querySelector("#d1 > #d2");
console.log(d23);

d23.innerText = "<p>innerText</p>";
d23.innerHTML += "<p>innerText</p>";

const students = [
    {
        name: "제다정",
        age: 25,
        address: "부산 사하구"
    },
    {
        name: "제다이",
        age: 26,
        address: "부산 진구"
    },
    {
        name: "제다삼",
        age: 27,
        address: "부산 북구"
    },
]

const studentTableBody = document.querySelector(".student-table > tbody");

const studentTrs = students.map((s, index) => {
    return `<tr>
        <td>${index + 1}</td>
        <td>${s.name}</td>
        <td>${s.age}</td>
        <td>${s.address}</td>
    </tr>`
});

console.log(studentTrs);
console.log(studentTrs.join(""));

studentTableBody.innerHTML = studentTrs.join("");

const tdList = studentTableBody.querySelectorAll("td");
// tdList.forEach(td => td.setAttribute("style", "border: 1px solid #000;"));
tdList.forEach(td => td.style = "border: 1px solid #000;");
// 이건 안 좋은 방법. tag안에 스타일 주면 우선순위가 높아져서 css가 안 먹음
// => 스타일 주려면 css 만들어주는게 좋음

const studentTable = document.querySelector(".student-table");
studentTable.classList.add("table-border");

