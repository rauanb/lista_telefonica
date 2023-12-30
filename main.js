const form = document.getElementById('form-lista');
const nomes = [];
const numeros = [];
const spanWhats = "ICONE Whats";
const spanTel = "Icone Tel";

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputNum = document.getElementById('numero-contato');

    if (nomes.includes(inputNome.value)) {
        alert(`O contato de ${inputNome.value} já foi adicionado!`);
    } else {
        nomes.push(inputNome.value);
        numeros.push(inputNum.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNum.value}</td>`;
        linha += `</tr>`;
        linhas = linha + linhas;
    }

    inputNome.value = '';
    inputNum.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}