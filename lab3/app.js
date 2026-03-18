// STATE 
let tasks = [];
let idCounter = 0;

// DOM
const todoList = document.getElementById("todoList");
const completeList = document.getElementById("completeList");
const taskReader = document.getElementById("taskInput");
const addItemBtn = document.getElementById("addItem");


// DATA MODEL
function createTaskObject(text) {
    return {
        id: idCounter++,
        text: text,
        done: false
    };
}


// LOGIC
function addTask(text) {
    const task = createTaskObject(text);
    tasks.push(task);
    saveTasks();
    render();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    render();
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    task.done = !task.done;
    saveTasks();
    render();
}

function editTask(id, newText) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;
    task.text = newText;
    saveTasks();
    render();
}


// RENDER
function render() {
    todoList.innerHTML = "";
    completeList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.dataset.id = task.id;

        // checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.done;

        // текст
        const span = document.createElement("span");
        span.textContent = task.text;

        // кнопка удаления
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "delete";
        deleteBtn.className = "dlt";

        // кнопка редактирования
            const editBtn = document.createElement("button");
            editBtn.className = "changeBtn";

            const img = document.createElement("img");
            img.className = "editImg";
            img.src = "edit.png";
            editBtn.appendChild(img);
        li.append(checkbox, span, editBtn, deleteBtn);

        if (task.done) {
            li.removeChild(editBtn);
            completeList.appendChild(li);
        } else {
            todoList.appendChild(li);
        }
    });
}


// EVENTS

// добавление задачи
addItemBtn.addEventListener("click", () => {
    const text = taskReader.value.trim();
    if (!text) return;

    addTask(text);
    taskReader.value = "";
});
taskReader.addEventListener("keydown", (e) => { 
    if( e.key === "Enter"){
        const text = taskReader.value.trim();
        if(!text) return;
        addTask(text);
        taskReader.value = ""; 
    }

});

// делегирование кликов (delete / edit)
todoList.addEventListener("click", handleListClick);
completeList.addEventListener("click", handleListClick);

function handleListClick(e) {
    const li = e.target.closest("li");
    if (!li) return;

    const id = Number(li.dataset.id);
    const btn = e.target.closest("button");

    if (!btn) return;

    if (btn.classList.contains("dlt")) {
        deleteTask(id);
    }

    
    if (btn.classList.contains("changeBtn")) {
        const span = li.querySelector("span");
        startEdit(span, id);
    }
}

function startEdit(span, id){ 


    const div = document.createElement("div");
    const input = document.createElement("input");
    div.className = "inputChange";
    input.type = "text"; 
    input.value = span.textContent; 
    div.appendChild(input);
    span.replaceWith(div);
    input.focus();

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") finishEdit(input, id);
    });

    input.addEventListener("blur", () => {
        finishEdit(input, id)
    })
}

function finishEdit(input, id){ 
    const newText = input.value; 
    if(!newText) return; 

    editTask(id, newText);
}


// обработка checkbox
todoList.addEventListener("change", handleCheckbox);
completeList.addEventListener("change", handleCheckbox);

function handleCheckbox(e) {
    if (e.target.type !== "checkbox") return;

    const li = e.target.closest("li");
    const id = Number(li.dataset.id);
    toggleTask(id);
}

/* local storage */ 


document.addEventListener("DOMContentLoaded", ()=> { 
    const saveData = localStorage.getItem("data");

    if(saveData){
        tasks = JSON.parse(saveData);
        idCounter = tasks.length; 
        render();
    }
}); 


function saveTasks() {
    localStorage.setItem("data", JSON.stringify(tasks));
}