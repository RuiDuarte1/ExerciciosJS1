// Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
// switch. Crie um case default que escreva ‘Número fora do intervalo.’

const extenso = (nums) => {
    switch(nums){
        case 0:
            console.log('zero');
            break;
        case 1:
            console.log('um');
            break;
        case 2:
            console.log('dois');
            break;
        case 3:
            console.log('três');
            break;
        case 4:
            console.log('quatro');
            break;
        case 5:
            console.log('cinco');
            break;
        case 6:
            console.log('seis');
            break;
        case 7:
            console.log('sete');
            break;
        case 8:
            console.log('oito');
            break;
        case 9:
            console.log('nove');
            break;
        case 10:
            console.log('dez');
            break;
        default:{
            console.log('Número fora do intervalo!');
        }
    }
}

extenso(0);
extenso(1);
extenso(2);
extenso(3);
extenso(4);
extenso(5);
extenso(6);
extenso(7);
extenso(8);
extenso(9);
extenso(10);
extenso(11);