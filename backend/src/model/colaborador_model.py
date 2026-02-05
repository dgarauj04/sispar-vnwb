from src.model import db 
from sqlalchemy.schema import Column 
from sqlalchemy.types import String, DECIMAL, Integer 

class Colaborador(db.Model): 
    __tablename__ = 'tb_colaboradores' 
    
    id = Column(Integer, primary_key=True, autoincrement=True) 
    nome = Column(String(255)) 
    email = Column(String(150)) 
    senha = Column(String(255)) 
    cargo = Column(String(100)) 
    salario = Column(DECIMAL(10,2)) 
    cracha = Column(String(50)) 
    
    def __init__ (self, nome, email, senha, cargo, salario, cracha):
        self.nome = nome
        self.email = email
        self.senha = senha
        self.cargo = cargo
        self.salario = salario      
        self.cracha = cracha

    def to_dict(self) -> dict: 
        return {
            'email': self.email,
            'senha': self.senha
        }
        
    def all_data(self) -> dict:
        return {
            'id': self.id,
            'nome': self.nome,
            'email': self.email,
            'senha': self.senha,
            'cargo': self.cargo,
            'salario': self.salario,
            'cracha': self.cracha
        }