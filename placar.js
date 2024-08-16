function placar(numeros) {
    var pontuacao = 0;


numeros.forEach(numero => {
    if(numero == 5) {
        pontuacao +=5;
    } else if(numero % 2 == 0) {
        pontuacao +=1;
    } else {
        pontuacao +=3;
    }
    
});

return pontuacao;

}

console.log(placar([1,2,3,4,5,6,7,8,9,10]));