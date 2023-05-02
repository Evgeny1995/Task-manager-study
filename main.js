import { getId } from "./utils.js";
import "./style.css";

// let taskList = document.querySelector(".view-task__list");
// let inpText = document.querySelector(".add-task-form__inp");
// let emptyList = document.querySelector(".task-list__empty");
// let btnAddTask = document.querySelector(".add-task-form__btn");

// let form = document.querySelector(".add-task__form");
// const daysWeek = [
//   "Воскресенье",
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
// ];

// // let  = document.querySelector(".")
// //Функция добавляет 0 к дате
// function addLeadingZero(d) {
//   return d < 10 ? "0" + d : d;
// }
// //Функция парсит new Date,в необходимый вид
// function getTaskTimeNow(t = new Date()) {
//   let getYear = t.getFullYear();
//   let getMonth = addLeadingZero(t.getMonth() + 1);
//   let getDay = addLeadingZero(t.getDate());
//   let getDaysOfTheWeeks = daysWeek[t.getDay()];
//   let getHours = addLeadingZero(t.getHours());
//   let getMinutes = addLeadingZero(t.getMinutes());
//   return `${getHours}:${getMinutes} ${getDaysOfTheWeeks}<br>
//           ${getDay}.${getMonth}.${getYear}`;
// }

// let listItem = document.querySelector(".task-list__item");
// let deleteBtn = document.querySelector(".list-item__delete-btn");
// let deliteIcon = document.querySelector(".delete-btn__icon");

// form.addEventListener("submit", addTasks);

// function addTasks (event) {
//   event.preventDefault();
//   let valueAddtext = inpText.value;
//   if (valueAddtext === "") {
//     return;
//   }
//   let taskHtml = `<li class="task-list__item list-item">
//     <p class="list-item__text font-style">${valueAddtext}</p>
//     <div class="list-item__time font-style__small">${getTaskTimeNow()}</div>
//     <button class="list-item__edit-btn edit-btn" data-action="edit" type="button">
//         <svg class="edit-btn__icon" version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt"
//             viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
//             <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#7764A9"
//                 stroke="none">
//                 <path d="M4107 4670 c-32 -12 -77 -32 -100 -47 -23 -14 -181 -164 -352 -334
//                    l-310 -309 318 -317 318 -318 313 315 c293 295 315 320 352 394 38 79 39 82
//                    39 190 -1 91 -5 121 -23 166 -44 111 -142 209 -252 252 -81 31 -226 35 -303 8z" />
//                 <path d="M2442 3077 c-424 -424 -772 -777 -772 -782 0 -13 612 -625 625 -625
//                    13 0 1555 1542 1555 1555 0 13 -612 625 -625 625 -6 0 -358 -348 -783 -773z" />
//                 <path d="M743 3765 c-124 -34 -213 -108 -270 -223 l-38 -76 0 -1360 0 -1361
//                    23 -58 c34 -82 125 -178 211 -220 l66 -32 1366 0 1365 0 76 38 c121 59 204
//                    167 228 296 6 34 10 387 10 953 l0 900 -29 29 c-38 37 -82 39 -116 4 l-25 -24
//                    0 -904 c0 -991 2 -965 -60 -1039 -16 -20 -53 -48 -82 -62 l-52 -26 -1305 0
//                    c-908 0 -1318 3 -1345 11 -53 15 -138 100 -154 155 -9 32 -12 350 -12 1345 l0
//                    1304 24 51 c13 28 41 65 62 82 78 65 36 62 1034 62 l907 0 27 26 c35 36 34 77
//                    -3 115 l-29 29 -914 -1 c-754 0 -922 -3 -965 -14z" />
//                 <path d="M1432 1773 c-73 -208 -133 -386 -132 -396 0 -25 54 -77 79 -77 16 0
//                    759 255 768 264 1 1 -129 133 -290 294 l-292 292 -133 -377z" />
//             </g>
//         </svg>
//     </button>
//     <button class="list-item__delete-btn delete-btn" data-action="delete"  type="button">
//         <svg class="delete-btn__icon" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path fill-rule="evenodd" clip-rule="evenodd"
//                 d="M18.7782 20.8597C19.364 21.4455 20.3137 21.4455 20.8995 20.8597C21.4853 20.2739 21.4853 19.3241 20.8995 18.7383L13.1213 10.9601L20.8995 3.18201C21.4853 2.59622 21.4853 1.64648 20.8995 1.06069C20.3137 0.474904 19.3639 0.474904 18.7781 1.06069L11 8.83883L3.22185 1.06068C2.63606 0.474891 1.68632 0.474891 1.10053 1.06068C0.514745 1.64646 0.514745 2.59621 1.10053 3.182L8.87868 10.9601L1.10047 18.7384C0.514686 19.3241 0.514686 20.2739 1.10047 20.8597C1.68626 21.4455 2.63601 21.4455 3.22179 20.8597L11 13.0815L18.7782 20.8597Z"
//                 fill="#75639F" fill-opacity="0.87" />
//         </svg>
//     </button>
//     </li>`;
//   taskList.insertAdjacentHTML("beforeend", taskHtml);
//   inpText.value = "";
//   if (taskList.children.length > 1) {
//     emptyList.classList.add("hide");
//   }

// }

// taskList.addEventListener("click", deleteEditTask);

// function deleteEditTask (event) {
//   let editBtn = document.querySelector(".list-item__edit-btn");
//   if(event.target.dataset.action === "delete") {
//     let parentNode = event.target.closest(".task-list__item");
//     parentNode.remove();
//   }
//   if(event.target == editBtn) {
//     event.target.setAttribute("contenteditable", "true");
//     console.log(true)
//   }

// }

let $rowBottom = document.querySelector(".row-bottom");
let $inp = document.querySelector(".inp");
let $btn = document.querySelector(".btn");
let $btnDel = document.querySelectorAll(".btn-del");

const tasks = [
  {
    id: "123",
    name: "Task1",
    date: Date.now(),
  },
  {
    id: "1234",
    name: "Task2",
    date: Date.now(),
  },
  {
    id: "1235",
    name: "Task3",
    date: Date.now(),
  },
];

function addToArr(el) {
  tasks.push({
    id: getId(),
    name: el.value,
    date: Date.now(),
  });
}


function renderItem(item, onDelete) {
  const li = document.createElement("li");
  li.classList.add("item");

  const p1 = document.createElement("p");
  p1.classList.add("text");
  p1.innerText = item.name;

  const p2 = document.createElement("p");
  p2.classList.add("text");
  p2.innerText = item.id;

  const p3 = document.createElement("p");
  p3.classList.add("text");
  p3.innerText = item.date;

  const btnDel = document.createElement("button");
  btnDel.classList.add("btn-del");
  btnDel.dataset.type = "button";
  btnDel.innerText = "Удалить";
  btnDel.onclick = () => onDelete(item.id);
  
  li.appendChild(p1);
  li.appendChild(p2);
  li.appendChild(p3);
  li.appendChild(btnDel);

  return li ;
}

function renderList(items, onDeleteItem) {
  const ul = document.createElement("ul");
  ul.classList.add("list");
  items.map((item) => {
    ul.appendChild(renderItem(item, onDeleteItem));
  });
  return ul;
}

function addToDOM(target, element) {
  target.innerHTML = "";
  target.appendChild(element);
}

function startApp() {
  const onDeleteItem = (id) => {
    console.log('Delete action');
    console.log(id)
  }

  const renderedList = renderList(tasks, onDeleteItem);

  $btn.addEventListener("click", () => {
    addToArr($inp);

    const updatedList = renderList(tasks);

    addToDOM($rowBottom, updatedList);
  });

  addToDOM($rowBottom, renderedList);
}

startApp();
