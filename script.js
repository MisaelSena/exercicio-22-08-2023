const alunos = [];
const nomeAluno = document.getElementById("nome");
const botaoCadastrar = document.getElementById("cadastrar");

botaoCadastrar.addEventListener("click", cadastrarAluno);

function cadastrarAluno(evento) {
  const nomeTrim = nomeAluno.value.trim();
  if (nomeTrim.length < 3) {
    alert("Preencha um nome válido");
  } else {
    alunos.push(nomeAluno.value);
    console.log(nomeAluno.value.trim());
    if (alunos.length < 2) {
      exibeLista();
    } else {
      limpaLista();
      exibeLista();
    }
  }
}

function exibeLista() {
  for (let i = 0; i < alunos.length; i++) {
    let item = document.createElement("ol");
    let btnExcluir = document.createElement("button");
    item.appendChild(document.createTextNode(`${i + 1}- ${alunos[i]} - `));
    btnExcluir.appendChild(document.createTextNode('Excluir'));
    lista.appendChild(item);
    item.appendChild(btnExcluir);
    item.setAttribute("id", i);
    btnExcluir.setAttribute("id",i);
    btnExcluir.setAttribute("onClick",`removeAluno(${i})`);
  }
}
function limpaLista() {
  let ulLista = document.getElementById("lista");
  while (ulLista.firstChild) {
    ulLista.removeChild(ulLista.firstChild);
  }
}

function removeAluno(id) {
  const aluno = document.getElementById(id);
  alunos.splice(id,1);
  console.log(`Botão do Elemento ${id} clicado`);
  console.log(alunos);
  limpaLista();
  exibeLista();

}
