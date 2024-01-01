const form = document.getElementById('form-lista');
let iconeTipo = "";
const nomes = [];
const numeros = [];
const spanWhats = "ICONE Whats";
const spanTel = "Icone Tel";

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    selecionaTipo();
    adicionaLinha();
    atualizaTabela();
})

function adicionaLinha() {
    const inputNome = document.getElementById('nome-contato');
    const inputNum = document.getElementById('numero-contato');

    // Varifica se o contato já foi adicionado
    if (nomes.includes(inputNome.value)) {
        // Identificar o número com o nome
        let indNome = nomes.indexOf(inputNome.value);
        let auxNum = numeros[indNome];
        alert(`O contato de ${inputNome.value} já foi adicionado com o número ${auxNum}!`);
        // Verifica se o número já foi adicionado
    } else if (numeros.includes(inputNum.value)) {
        // Identificar o nome com o número
        let indNum = numeros.indexOf(inputNum.value);
        let auxNom = nomes[indNum];
        alert(`O número de ${inputNum.value} já foi adicionado no contade de ${auxNom}!`);
    } else {
        nomes.push(inputNome.value);
        numeros.push(inputNum.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNum.value}</td>`;
        // linha += `<td>${iconeTipo}</td>`;
        linha += `<td>${iconeTipo}</td>`;
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

function selecionaTipo() {
    let tipoContato = document.getElementsByName('tipo');

    for (i = 0; i < tipoContato.length; i++) {
        let auxTipo = "";
        if (tipoContato[i].checked) {
            auxTipo = tipoContato[i].id;
            // console.log(auxTipo);
        }
        
        // Definição do ícone
        if (auxTipo.includes("tel")) {
            iconeTipo = `<img src="./img/telefone.png" alt="Ícone telefone" />`;
        } else {
            iconeTipo = `<img src="./img/whatsapp.png" alt="Ícone whatsapp" />`;
        }
    }
}