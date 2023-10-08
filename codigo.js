const tasks = [];
let time = 0; //Cuenta regresiva
let timer = null;
let timerBreak = null;
let current = null;

const bAdd = document.querySelector("#bAdd");
const itTask = document.querySelector("#itTask");
const form = document.querySelector("#form");
const taskName = document.querySelector("#time #taskName");

renderTime();
renderTask();


form.addEventListener('submit', e => {
    e.preventDefault(); // Priviene q' no sea ejecutado
    if(itTask.value != ''){
        createTask(itTask.value);
        itTask.value = '';
        renderTask();
    }
});

function createTask(value) {
    const newTask = {
        id: (Math.random() * 100).toString(36).slice(3),
        title: value,
        completed: false,
    };

    tasks.unshift(newTask);
}

function renderTask(){
    const html = tasks.map(task => {
        return `
            <div class="task">
                <div class="completed">${task.completed ? `<span class="done">Done</span>` : `<button class="start-button" data-id="${task.id}">Start</button>`}</div>
                <div class="tittle">${task.title}</div>
            </div>
        `;
    });

    const tasksContainer = document.querySelector("#tasks");
    tasksContainer.innerHTML = html.join("");

    const starButtons = document.querySelectorAll('.task .start-button');

    starButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            if(!timer){
                const id = button.getAttribute('data-id');
                starButtonHandler(id);
                button.textContent = 'In progress...';
            }
        });
    });
}

function starButtonHandler(id) {
    time = 10; // 25 * 60 -> min * seg
    current = id;
    const taskIndex = tasks.findIndex((task) => task.id === id);
    taskName.textContent = tasks[taskIndex].title;
    renderTime();
    timer = setInterval(() => {
        timerHandler(id);
    }, 1000);
}

function timerHandler(id) {
    time--;
    renderTime();

    if(time === 0) {
        clearInterval(timer);
        markCompleted(id);
        timer = null;
        renderTask();
        startBreak();
    }
}

function startBreak(){
    time = 5;
    taskName.textContent = 'Break';
    renderTime();
    timerBreak = setInterval(() => {
        timerBreakHanlder();
    }, 1000);
}

function timerBreakHanlder() {
    time--;
    renderTime();

    if (time === 0) {
        clearInterval(timerBreak);
        current = null;
        timerBreak = null;
        taskName.textContent = '';
        renderTask();
    }
}

function renderTime(){
    const timeDiv = document.querySelector("#time #value");
    const minutes = parseInt(time / 60);
    const seconds = parseInt(time % 60);

    timeDiv.textContent = `${minutes < 10 ? "0" : ""}${minutes}:${
        seconds < 10 ? "0" : ""
    }${seconds}`;
}

function markCompleted(id) {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    tasks[taskIndex].completed = true;
}

// console.log((Math.random() * 100).toString(36).slice(3));
let num1 = 10 / 60;
let num2 = 100 % 60;

console.log(`${num1} -> ${num2}`);

let nValor = null;

if (!nValor){
    console.log("Este es un valor nulo");
}

const arr = ["manzana", "pera", "uva", "limon",["uno","dos","tres"]];

arr.forEach((index,item)=> {
    console.log( `${index} -> ${item}`);
});

console.log(arr.length);
// length

// Diferencia entre Map() & foreach()
const numeros = [1,2,3,4,5,6];

// foreach()
numeros.forEach(x => {
    console.log(x);
});

// map()
numeros.map(x => {
    console.log(x);
});

 const newN = Array(200).fill(5);