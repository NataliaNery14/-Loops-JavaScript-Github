soma = 0
quantidade = 0
while True:
    n = int(input('Digite um número inteiro: '));
    if n == 0:
        break
    soma = soma + n
    quantidade = quantidade + 1
document.write('Quantidade de números digitados:', quantidade);
document.write('Soma: ', soma);
document.write('Média: {soma/quantidade:10.2f}');