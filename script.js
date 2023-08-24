const alunos = [];
const nomeAluno = document.getElementById("nome");
const botaoCadastrar = document.getElementById("cadastrar");

botaoCadastrar.addEventListener("click",cadastrarAluno);

function cadastrarAluno(evento) {
    alunos.push(nomeAluno.value);
    if(alunos.length<2){
        exibeLista();
    }else{
        limpaLista();
        exibeLista();
    }
       
    
    
}

function exibeLista() {
    for (let i = 0; i < alunos.length; i++) {                              
            let item = document.createElement('li');
            item.appendChild(document.createTextNode(`${i+1}- ${alunos[i]}`));
            lista.appendChild(item);
            item.setAttribute("id",i);        
        
    }
}
function limpaLista() {
           
        let ulLista = document.getElementById("lista");
        while (ulLista.firstChild) {
            ulLista.removeChild(ulLista.firstChild);
          }   
    
      
}