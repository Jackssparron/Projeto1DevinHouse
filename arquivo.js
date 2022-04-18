const input = document.querySelector(".registro");
const botao = document.querySelector(".botao");
const lista = document.querySelector(".lista");

//Evento do botao de um click

botao.addEventListener("click", (event) => {
    const valor = input.value;
    if (valor.length > 0) {
        criaItemDeLista(valor);
        input.value = ' '
    } else {
        alert("Escreva algo");
    }
});

const container = document.querySelector('.container')

function criaItemDeLista(valor) {

    const checkbox1 = document.createElement("input")
    checkbox1.className = "checkbox";

    const li = document.createElement('li')
    li.classList.add('listaEx')
    const ul = document.querySelector('.lista')
    const apagar = document.createElement("button")


    // checkbox1.onclick = checkboxShow
    const span = document.createElement('span')
    li.appendChild(span)

    checkbox1.addEventListener("click", () => { container.style.display = 'flex' });

    checkbox1.type = 'checkbox'
    li.appendChild(checkbox1);


    ul.appendChild(li);
    span.innerText = valor


    apagar.innerText = 'X'
    li.appendChild(apagar);

    apagar.addEventListener('click', (event) => {
        event.target.parentElement.remove()
    });
}
const checkbox2 = document.querySelector(".checkbox")

const submit = document.querySelector("#submit")
submit.addEventListener('click', () => {
    const number = document.querySelector("#number").value
    somarElementos(number)
    container.style.display = 'none'
});
let somaDeprodutos = 0

function somarElementos(valorDoPopup) {
    somaDeprodutos = somaDeprodutos + parseFloat(valorDoPopup);
    document.querySelector('#totalDecompras').innerText = somaDeprodutos



};