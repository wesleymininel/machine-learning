from sqlalchemy import Column, String, Integer, DateTime, Float
from sqlalchemy.orm import relationship
from datetime import datetime
from typing import Union

from  model import Base

class Paciente(Base):
    __tablename__ = 'pacientes'
    
    id = Column(Integer, primary_key=True)
    name = Column("Name", String(50))
    age = Column("Age", Integer)
    anaemia = Column("Anaemia", Integer)
    creatinine_phosphokinase = Column("Creatinine_Phosphokinase", Integer)
    diabetes = Column("Diabetes", Integer)
    ejection_fraction = Column("Ejection_Fraction", Integer)
    high_blood_pressure = Column("High_Blood_Pressure", Integer)
    platelets = Column("Platelets", Float)
    serum_creatinine = Column("Serum_Creatinine", Float)
    serum_sodium = Column("Serum_Sodium", Integer)
    sex = Column("Sex", Integer)
    smoking = Column("Smoking", Integer)
    time = Column("Time", Integer)
    death_event = Column("Death_Event", Integer)
    date_insert = Column(DateTime, default=datetime.now())
    
    def __init__(self, name:str, age:int, anaemia:int, creatinine_phosphokinase:int, diabetes:int, ejection_fraction:int, high_blood_pressure:int,
		platelets:float, serum_creatinine:float, serum_sodium:int, sex:int, smoking:int, time:int, death_event:int, date_insert:Union[DateTime, None] = None):    
        
        """
        Cria um Paciente

        Arguments:
            name: nome do paciente
            age: idade do paciente
            anaemia: diminuição de hemácias ou hemoglobina
            creatinine_phosphokinase (CPK): nível da enzima CPK no sangue (mcg/L)
            diabetes: se o paciente tem diabetes
            ejection_fraction: porcentagem de sangue que sai do coração a cada contração
            high_blood_pressure: se o paciente tem hipertensão
            platelets: plaquetas no sangue (quiloplaquetas/mL)
            serum_creatinine: nível de creatinina sérica no sangue (mg/dL)
            serum_sodium: nível de sódio sérico no sangue (mEq/L)
            sex: mulher ou homem
            smoking: se o paciente fuma ou não
            time: período de acompanhamento
            death_event: se o paciente morreu durante o período de acompanhamento
            date_insert = data de quando o paciente foi inserido à base
        """
        self.name=name
        self.age = age
        self.anaemia = anaemia
        self.creatinine_phosphokinase = creatinine_phosphokinase
        self.diabetes = diabetes
        self.ejection_fraction = ejection_fraction
        self.high_blood_pressure = high_blood_pressure
        self.platelets = platelets
        self.serum_creatinine = serum_creatinine
        self.serum_sodium = serum_sodium
        self.sex = sex
        self.smoking = smoking
        self.time = time
        self.death_event = death_event

        # se não for informada, será o data exata da inserção no banco
        if date_insert:
            self.date_insert = date_insert