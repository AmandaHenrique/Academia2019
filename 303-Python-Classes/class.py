# Exemplo no java usamos this e no python self

# dentro de uma classe colocar um "constructor" 
# def_init_(self, params1, params2):
    #self.params1 = params1 = q é a variavel do prametro e o self o objeto dentro da classe me questao

# instanciação de classe: cadeira = Cadeira("params1", "params2")

# dellGamer = Computador('i7' , '16gb', '2tb', True)
# para passar logo como parametro é necessário o init , que vai fazer 
# com que o que foi recebido seja o valor dos atributos contidos na classe, como um construtor 

class Pessoa:
    def __init__(self, nome):
        self.nome = nome
    
    def __str__(self):
        return self.nome

amanda = Pessoa('Amanda')

