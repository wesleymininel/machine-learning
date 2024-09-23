from pydantic import BaseModel
from typing import Optional, List
from model.paciente import Paciente
import json
import numpy as np

class PacienteSchema(BaseModel):
    """ Define como um novo paciente a ser inserido deve ser representado
    """
    name: str = "Joao"
    age: int = 52
    anaemia: int = 1
    creatinine_phosphokinase: int = 191
    diabetes: int = 1
    ejection_fraction: int = 30
    high_blood_pressure: int = 1
    platelets: float = 334000
    serum_creatinine: float = 1
    serum_sodium: int = 142
    sex: int = 1
    smoking: int = 1
    time: int = 216
    
class PacienteViewSchema(BaseModel):
    """Define como um paciente será retornado
    """
    id: int = 1
    name: str = "Joao"
    age: int = 52
    anaemia: int = 1
    creatinine_phosphokinase: int = 191
    diabetes: int = 1
    ejection_fraction: int = 30
    high_blood_pressure: int = 1
    platelets: float = 334000
    serum_creatinine: float = 1
    serum_sodium: int = 142
    sex: int = 1
    smoking: int = 1
    time: int = 216
    death_event: int = None
    
class PacienteBuscaSchema(BaseModel):
    """Define como deve ser a estrutura que representa a busca.
    Ela será feita com base no nome do paciente.
    """
    name: str = "Joao"

class ListaPacientesSchema(BaseModel):
    """Define como uma lista de pacientes será representada
    """
    pacientes: List[PacienteSchema]

    
class PacienteDelSchema(BaseModel):
    """Define como um paciente para deleção será representado
    """
    name: str = "Joao"
    
# Apresenta apenas os dados de um paciente    
def apresenta_paciente(paciente: Paciente):
    """ Retorna uma representação do paciente seguindo o schema definido em
        PacienteViewSchema.
    """
    
    return {
		"id": paciente.id,
		"name": paciente.name,
		"age": paciente.age,
		"anaemia": paciente.anaemia,
		"creatinine_phosphokinase": paciente.creatinine_phosphokinase,
		"diabetes": paciente.diabetes,
		"ejection_fraction": paciente.ejection_fraction,
		"high_blood_pressure": paciente.high_blood_pressure,
		"platelets": paciente.platelets,
		"serum_creatinine": paciente.serum_creatinine,
		"serum_sodium": paciente.serum_sodium,
		"sex": paciente.sex,
		"smoking": paciente.smoking,
		"time": paciente.time,
		"death_event": paciente.death_event
	}
    
# Apresenta uma lista de pacientes
def apresenta_pacientes(pacientes: List[Paciente]):
    """ Retorna uma representação do paciente seguindo o schema definido em
        PacienteViewSchema.
    """
    result = []
    for paciente in pacientes:
        result.append({
            "id": paciente.id,
		    "name": paciente.name,
	    	"age": paciente.age,
	    	"anaemia": paciente.anaemia,
	    	"creatinine_phosphokinase": paciente.creatinine_phosphokinase,
	    	"diabetes": paciente.diabetes,
	    	"ejection_fraction": paciente.ejection_fraction,
	    	"high_blood_pressure": paciente.high_blood_pressure,
	    	"platelets": paciente.platelets,
		    "serum_creatinine": paciente.serum_creatinine,
	    	"serum_sodium": paciente.serum_sodium,
	    	"sex": paciente.sex,
	    	"smoking": paciente.smoking,
		    "time": paciente.time,
	    	"death_event": paciente.death_event
        })

    return {"pacientes": result}

