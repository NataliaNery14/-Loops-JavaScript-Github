const idade
const contador21=0
const contador50=0
 
document.write('DIGITE A IDADE: ');
document.write('%d',&idade);
 
while(idade!=-99)
 {
 
if(idade<21)
 contador21++;
 
if(idade>50)
 contador50++;
 document.write('DIGITE A IDADE(PARA ENCERRAR DIGITE -99) : ');
 document.write('%d',&idade);
 }
 document.write('O TOTAL DE PESSOAS COM MENOS DE 21 ANOS E:%d',contador21);
 document.write('O TOTAL DE PESSOAS COM MAIS DE 50 ANOS E:%d',contador50);
 document.write('pause');
 return(0);
