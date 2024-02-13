// geração do valor aleatório


/ geração do valor aleatório
var y = Math.floor(Math.random() * 10 + 1);


function playAgain(){
y = Math.floor(Math.random() * 10 + 1);
}



else if (x > y) /* se o número enviado é maior que o número gerado*/
{
guess++;
alert("Opa, resposta errada!! Tente um número menor");
}
else
{
guess++;
alert("Opa, resposta errada!! Tente um número maior")
}
// contagem de tentativas
// até acerto    
if(x == y)
{
alert("PARABÉNS!!!"+playername+", você acertou em + guess + tentativa(s)! ");
guess= 1;
}
// função para o número enviado pelo usuário
 var x = document.getElementById("guessField").value;