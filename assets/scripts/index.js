// Criação de elementos

// Ter referências ao botão, input e à ul

const btnNewItemElement = document.getElementById("btnNewItem");
const inputNewItemElement = document.getElementById("inputNewItem");
const listElement = document.getElementById("list");

// Detectar o clique no botão

// Forma 1: usando createElement
function createListItem() {
  // O método createElement cria um novo elemento HTML que fica na memória do Javascript. Esse elemento NÃO existe no documento até que ele seja inserido dentro de um elemento que exista
  const li = document.createElement("li");

  // Coloca o que o usuário digitou no input dentro do conteúdo da nova <li>
  li.innerText = inputNewItemElement.value;

  // "Colar" a nova <li> no documento
  listElement.appendChild(li);
}

// Forma 2: usando concatenação do innerHTML
function concatListItem() {
  const li = `<li>${inputNewItemElement.value}</li>`;

  listElement.innerHTML += li;
}

// Forma 3 (recomendada): usando insertAdjacentHTML
function insertListItem() {
  const li = `
  <li class="p-1">
    ${inputNewItemElement.value}
    <button class="btn btn-sm btn-danger">Apagar</button>
  </li>`;

  listElement.insertAdjacentHTML("beforeend", li);
}

btnNewItemElement.addEventListener("click", () => {
  // Extrair o valor do input

  // Criar um novo <li> dentro da <ul> existente

  insertListItem();

  // Limpar o input
  inputNewItemElement.value = "";

  // Focar o teclado do usuário de volta no input
  inputNewItemElement.focus();
});

// Delegação de eventos

// A delegação de eventos depende do conceito de event bubbling: no DOM, um evento que acontece em um elemento sobe (ou borbulha) em direção aos elementos superiores até que seja capturado ou até chegar na origem do documento (objeto 'document').
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling_and_capture

// Escutar cliques na página inteira
document.addEventListener("click", (event) => {
  const deleteButtonElement = event.target;

  // Verifica se o elemento clicado realmente foi o botão de apagar
  if (deleteButtonElement.classList.contains("btn-danger")) {
    // Se for, apaga o elemento pai do botão

    const li = deleteButtonElement.parentElement;

    listElement.removeChild(li);
  }
});
