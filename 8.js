// Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
// registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).

const pontos = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0";

function compararPontos (pontos){
    let pontuacao = pontos.split(", ");
    let quebraRecords = 0;
    let jogoRuim = 1;
    let maiorPontuacao = pontuacao [0];
    let menorPontuacao = pontuacao [0];

    for(let i = 1; i < pontuacao.length; i++){
        if(pontuacao[i] > maiorPontuacao){
            maiorPontuacao = pontuacao[i];
            quebraRecords++;
        }else if(pontuacao[i] < menorPontuacao){
            menorPontuacao = pontuacao[i];
            jogoRuim = i+1;
        }
    }
    
    return `Quantidade de recordes quebrados: ${quebraRecords}\npior pontuação ocorreu no ${jogoRuim} jogo`;
    
}

console.log(compararPontos(pontos));