# #numero secreto
# secret_number = 5

# i = 0

# while i < 3:
#     number = input('Digite um numero: ')
#     if int(number) == secret_number:
#         print('Parabens você acertou o numero')
#         break
#     else:
#         i += 1
#         print('Voce error o numero tente novamente' )

# #Vender celular

# preco = 8000
# celular = input('Qual modelo de celular você gostaria ?')
# quantia = input('Quanto você tem disponível para gastar ?')

# if int(quantia) >= preco:
#     print('Vendido !')
# else:
#     print('Você não tem dinheiro disponivel')


#tirar duplicatas 
# lista = [1,4,6,6,6,6,6,9,345,23,101]

# #MANEIRA CERTA
# nova_lista = []
# for number in lista:
#     if number not in nova_lista:
#         nova_lista.append(number)

# print(nova_lista)


#Printar o maior numero da lista
# lista = [1,4,6,6,6,6,8,9,345,23,101]

# print(max(lista))

name = input('Digite o nome do aluno: ')
faltas = int(input('Quantidade de faltas: '))
media = int(input('Qual a media? '))

if(faltas <=2 and media >=6):
        print('Passou')
else:
        print('Não passou')


