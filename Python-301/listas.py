# names = ['Amanda' , 'Não sei', 'Fulano']
# print(names[0:3])

numero_sorte = [1, 2, 3, 4, 5]
# numeros_escolhidos = []
# number = (input('Digite os numeros da mega: '))
# numeros_escolhidos.append(number)

# if numeros_escolhidos in numero_sorte:
#     print('Voce ganhou um real')
# else:
#     print('perdeu')

print(numero_sorte.index(1)) #aqui vai o meu valor e ele devolve em que posição ele valor esta
print(numero_sorte.count(3)) #conta a quantidade de numeros 3 por exemplo
numero_sorte.insert(0, 90) #Substitui
numero_sorte.remove(4)
numero_sorte.pop()
#numero_sorte.clear()  ele apaga tudo

print(numero_sorte) #apaga o ultimo elemento da lista

numero_sorte2 = numero_sorte.copy() # faz uma copia da lista

#tupla ou tuple

cursos = ('Matematica', 'Portugues', 'Ingles') #imutavel







