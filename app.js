
//Lista dos nomes
let listadeNomes = [ ];

//Função para buscar os nomes e acrescenta na lista.
function adicionarNome() {
    if(document.getElementById('Amigo').value == ''){
        alert('Por favor, insira um valor válido');
    }else{
        listadeNomes.push(document.getElementById('Amigo').value);
        document.getElementById('Amigo').value = '';
    }
}

//Utilização do ENTER para adicionar independente do botão.
document.getElementById('Amigo').addEventListener('keypress', function(event){
    if (event.key === 'Enter'){
        adicionarNome();
    }
})

//Para mostrar a lista no console.
console.log(listadeNomes);

//Sorteio dos nomes.
function sortearNome(){
    let Sorteio = Math.floor(Math.random() * listadeNomes.length);
    document.getElementById('Resultado').innerHTML = "O  amigo secreto sorteado é: " + listadeNomes[Sorteio];
}
