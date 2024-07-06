const originalLog = console.log;
console.log = (...e) => {
  originalLog(...e); // Output to browser's console
  document.getElementById("log").innerHTML = '';
  document.getElementById("log").innerHTML += e.join(" ") + "<br />";
};

function fetchToDoList() {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => console.log(JSON.stringify(json)))
      .catch((error) => (`Error:${error.message}`));
  }
  
function fetchToDo(id) {
fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then((response) => {
        if (!response.ok) {
            throw new Error(`${response.status}`);
            } else {
            return response.json();
            }    
        })
    .then((json) => console.log(JSON.stringify(json)))
    .catch((error) => console.log(`Error:${error.message}`));
}
  
function createToDo() {
const userId = document.getElementById('userId').value;
const title = document.getElementById('title').value;
const completed = document.getElementById('completed').checked;

if (!userId || !title) {
    console.log("Please enter UserID and Title");
    return;
}

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
const body = {
    userId,
    title,
    completed
};

fetch(apiUrl, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
})
.then(response => response.json())
.then(data => console.log(JSON.stringify(data)))
.catch(error => console.error(error));
}

function updateToDo() {
    const id = document.getElementById('updateId').value;
    const title = document.getElementById('updateTitle').value;
    const completed = document.getElementById('updateCompleted').checked;
  
    if (!id || !title) {
      console.log("Please enter ID and Title");
      return;
    }
  
    const apiUrl = `https://jsonplaceholder.typicode.com/todos/${id}`;
    const body = {
      title,
      completed
    };
  
    fetch(apiUrl, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
   .then(response => response.json())
   .then(data => console.log(JSON.stringify(data)))
   .catch(error => console.error(error));
  }
  
const button1 = document.getElementById('fetchToDoList');
button1.addEventListener('click', fetchToDoList)

const button2 = document.getElementById('fetchToDoID');
const inputID = document.querySelector('input[type="number"]');
button2.addEventListener('click', () => fetchToDo(inputID.value));

const button3 = document.getElementById('createToDo');
button3.addEventListener('click',createToDo)

const button4 = document.getElementById('updateToDo');
button4.addEventListener('click',updateToDo);

