const prompt = require ('prompt-sync')();

let i = 0;
let qtdsCalmos = 0;
let qtdsMNervosos =0;
let qtdsHAgressivos =0;
let qtdsOCalmos18 = 0;
let qtdsNervosos40 =40;

while (i< 150) {
const idadeText =prompt('Digite a idade');
const idade = Number(idadeText);
console.log('Escolha o sexo entre \n\n');
console.log('1 - homens\n');
console.log('2- mulheres\n');
console.log('3- outros\n');
const sexoText = prompt('Escolha a opção do sexo');
console.log('1-calmo\n');
console.log('2-nervoso\n');
console.log('3-agressivo\n');
const  humorText  =  prompt ( 'Escolher a opção do humor: ' ) ;
const  humor  =  Number ( humorText ) ;

if  ( humor  ==  1 )  {
    qtdCalmas ++ ;
  }

  if  ( sexo  ==  2  &&  humor  ==  2 )  {
    qtdMNervosas ++ ;
  }

  if  ( sexo  ==  1  &&  humor  ==  3 )  {
    qtdHAgressivos ++ ;
  }

  if  ( sexo  ==  3  &&  humor  ==  1 )  {
    qtdOCalmos ++ ;
  }

  if  ( humor  ==  2  &&  idade  >  40 )  {
    qtdNervosos40 ++ ;
  }

  if  ( humor  ==  1  &&  idade  <  18 )  {
    qtdCalmos18 ++ ;
  }

  e ++ ;
}






