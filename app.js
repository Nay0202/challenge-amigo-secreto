let amigos = [];

function adicionarAmigo(){
  let inputAmigo = document.getElementById('amigo');
  let nomeAmigo = inputAmigo.value;

  if (!nomeAmigo) {
    alert("Digite o nome do seu amigo.");
    return;
  }
  amigos.push(nomeAmigo);
  inputAmigo.value = "";
  inputAmigo.focus();
  atualizarLista();
  }

  function atualizarLista() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

 for (let i=0; i < amigos.length; i++) {
  let nomes = document.createElement("li");
  nomes.textContent = amigos[i];
   listaAmigos.appendChild(nomes);
 }
  }

function sortearAmigo() {
 if(amigos.length < 3){
 alert("Adicione amigos para realizar o sorteio.");
 return;
}

  let sorteio = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
     resultado.innerHTML = `O amigo sorteado é ${sorteio}`;

 }
function novoSorteio(){
    document.querySelector('#listaAmigos').innerHTML = "";
    document.querySelector('#resultado').innerHTML = "";
    amigos = [];
}
