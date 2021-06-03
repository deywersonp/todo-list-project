//Criação da função IdGenerator, que vai criar um ID personalizado para cada 
//item da lista permitindo que seja possível acessa-lo
function idGenerator() {

  let timestamp = new Date();

  let id = timestamp.getHours().toString() +
    timestamp.getMinutes().toString() +
    timestamp.getSeconds().toString() +
    timestamp.getMilliseconds().toString();

  return id;
}

//Criação da função para deletar uma tarefa
function deleteTask(element) {
  tasks = tasks.filter(task => task.id != element.getAttribute("id-data"));

  addLocalStorage(tasks);

}

function cleanAllTasks() {
  tasks = [];

  addLocalStorage(tasks);
}

function addLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));

  updateScreen();
}

function getFromLocalStorage() {

  const reference = localStorage.getItem('tasks');

  if (reference) {
    tasks = JSON.parse(reference);

    updateScreen();
  }
}

getFromLocalStorage();