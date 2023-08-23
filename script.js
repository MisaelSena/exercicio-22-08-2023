const alunos = [];
const nomeAluno = document.getElementById("nome");
const botaoCadastrar = document.getElementById("cadastrar");

botaoCadastrar.addEventListener("click",cadastrarAluno);

function cadastrarAluno(evento) {
    alunos.push(nomeAluno.value);
    
    for (let i = 0; i < alunos.length; i++) {
        document.getElementById("lista").innerHTML = `<p>ID: ${i+1} - ${alunos[i]} <button id="${i}">Excluir</button></p>`
        
    }
    
}