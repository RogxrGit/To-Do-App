// Chamada de função
function pressione() {

    // Main Container
    let tasks = document.getElementById("list");

    // Elementos a serem adicionados
        // Div
    let box = document.createElement("div");
    box.classList.add("taskBox");

        // Span
    let texto = document.createElement("span");
    texto.textContent = document.querySelector('#newTask input').value;
    texto.classList.add('msg');

        // button
    let xbtn = document.createElement("button");
    xbtn.classList.add('delete');
    xbtn.textContent = "x";

    // Adiciona os elementos
    box.appendChild(texto);
    box.appendChild(xbtn);
    tasks.appendChild(box);

    // Limpa o campo de texto 'input'
    document.querySelector('.container input').value = "";

    // Funções complementares para funcionamento do Aplicativo
        // aqui é definido uma identificação para o elemento
        // para que após o click, podemos manipular os objetos
        

    // Essa parte define a função do botão de 'Deletar'
    let deletar = document.querySelectorAll(".delete");
        deletar.forEach(elemento => 
        {
            elemento.onclick = function () {
                elemento.parentNode.remove();
            }
        }
    );

    // Essa parte define a função de 'Concluir a Tarefa'
    let checkTask = document.querySelectorAll('.msg');
        checkTask.forEach(elemento =>
        {
            elemento.onclick = function() {
                elemento.classList.toggle('doneTask');
            }
        }
    );
};

