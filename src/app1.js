import { getId } from "./utils.js";

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


function renderItem(item, onDelete, onModified) {
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

  const inpEdit = document.createElement("input");// выполняет функцию сохранения submit появляется при срабатывании кнопки toogle
  inpEdit.classList.add("inp-edit");
  inpEdit.dataset.type = "text";

  const btnEdit = document.createElement("button");// выполняет функцию сохранения submit появляется при срабатывании кнопки toogle
  btnEdit.classList.add("btn-edit");
  btnEdit.dataset.type = "button";
  btnEdit.innerText = "Редактировать";
  btnEdit.onclick = () => onModified(item.id, inpEdit.value);
 
  // 

  const btnToggle = document.createElement("button");
  btnToggle.classList.add("btn-toggle");
  btnToggle.dataset.type = "button";
  btnToggle.innerText = "Toggle";
  btnToggle.onclick = () => li.classList.toggle('active');


  

  li.appendChild(p1);
  li.appendChild(p2);
  li.appendChild(p3);
  li.appendChild(btnDel);
  li.appendChild(btnToggle);
  li.appendChild(btnEdit);
  li.appendChild(inpEdit);

  return li ;
}

function renderList(items, onDeleteItem, onModifiedItem) {//onModifiedItem
  const ul = document.createElement("ul");
  ul.classList.add("list");
  items.map((item) => {
    ul.appendChild(renderItem(item, onDeleteItem, onModifiedItem));//onModifiedItem
  });
  return ul;
}

function addToDOM(target, element) {
  target.innerHTML = "";
  target.appendChild(element);
}

function startApp() {
  const onModifiedItem = (id, value) => {
    const index = tasks.findIndex(it => it.id === id);

    if (index !== -1) {
      tasks[index] = {
        id: getId(),
        name: value,
        date: Date.now(),
      }
      render();
    }
  }

  const onDeleteItem = (id) => {
    const index = tasks.findIndex(it => it.id === id);

    if (index !== -1) {
      tasks.splice(index, 1); 
      render();
    }
  }

  const onAddItem = () => {
    addToArr($inp);
    render();
  }

  $btn.addEventListener("click", onAddItem);

  function render() {
    const renderedList = renderList(tasks, onDeleteItem, onModifiedItem);//onModifiedItem

    addToDOM($rowBottom, renderedList);
  }

  render();
}

export {startApp};