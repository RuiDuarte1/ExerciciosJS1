// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao
// dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

const diaUtil = (numberDia) =>{
    switch(numberDia){
        case 1: case 7:
            console.log('fim de semana');
            break;
        case 2: case 3: case 4: case 5: case 6:
            console.log('dia últil');
            break;
        default:
            console.log('Dia inválido')
    }
}

diaUtil(0);
diaUtil(1);
diaUtil(2);
diaUtil(5);
diaUtil(7);