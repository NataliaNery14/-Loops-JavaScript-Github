const num, soma=0;
 float media=0, cont=0;
 document.write('DIGITE UM NUMERO INTEIRO: ');
 document.write('%d',&num);
 if(num %3==0 && num!=0)
 {
 soma=soma+num;
 cont++;
 }
 while(num!=0)
{
 document.write('DIGITE UM NUMERO INTEIRO:');
 document.write('%d',&num);

 if(num %3==0 && num!=0)
 {
 soma=soma+num;
 cont++;
 }}
 media=soma/cont;
 document.write('A media dos numeros e: %3.2f ',media);
 system("pause");
 return(0);

