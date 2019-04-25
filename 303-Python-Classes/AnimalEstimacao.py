class AnimalEstimacao:
    def __init__(self, nome, especie, dono):
        self.nome = nome
        self.especie = especie
        self.dono = dono
    
    def __str__self(self):
        return self.nome
        #(nn foi explicada direito)


# import AnimalEstimacao as animal
# capivara1 = animal.AnimalEstimacao('capi' , 'capivara-monstro', 'Josefina')
# print(capivara1.nome)

class Calculadora:
    def __init__(self, a, b):
        self.a = a
        self.b = b

    def soma (self):
        return self.a + self.b
    
    def subtracao (self):
        return self.a - self.b

    def multiplicacao(self):
        return self.a * self.b

    def divisao(self):
        return self.a / self.b

teste = Calculadora(3, 3)
print('Soma: ', teste.divisao())