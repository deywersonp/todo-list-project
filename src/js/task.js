//Criação do ARRAY Tasks, que começa vazio
let tasks = [];

//Criação da função para atualizar a tela
function updateScreen() {

    let list = "<ul>"

    tasks.forEach((task => {
        list += "<li id-data=" + task.id + ">" + task.data.description +
            "<button id='deleteButton' onclick=deleteTask(this) id-data=" + task.id + ">Apagar</button>" +
            "</li>"
    }));

    list += "</ul>";

    document.getElementById("list").innerHTML = list;
    document.getElementById("newTask").value = "";
}


//Criação da Função para criar uma nova tarefa
function createTask() {

    let taskDescription = document.getElementById("newTask").value;

    let task = {
        id: idGenerator(),
        data: {
            description: taskDescription
        }
    };

    tasks.push(task);

    addLocalStorage(tasks);
}

//Acionamento do botão INSERIR atavés da tecla "ENTER"
document.addEventListener("keypress", function (enter) {
    if (enter.key === 'Enter') {
        let send = document.querySelector("#insertButton");

        send.click();
    }

})


