/*
  --------------------------------------------------------------------------------------
  Função para obter a lista existente do servidor via requisição GET
  --------------------------------------------------------------------------------------
*/
const getList = async () => {
  let url = 'http://127.0.0.1:5000/pacientes';
  fetch(url, {
    method: 'get',
  })
    .then((response) => response.json())
    .then((data) => {
      data.pacientes.forEach(item => insertList(item.name, 
                                                item.age, 
                                                item.anaemia,
                                                item.creatinine_phosphokinase,
                                                item.diabetes,
                                                item.ejection_fraction,
                                                item.high_blood_pressure,
                                                item.platelets,
                                                item.serum_creatinine,
                                                item.serum_sodium,
                                                item.sex,
                                                item.smoking,
                                                item.time,
                                                item.death_event
                                              ))
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Chamada da função para carregamento inicial dos dados
  --------------------------------------------------------------------------------------
*/
getList()




/*
  --------------------------------------------------------------------------------------
  Função para colocar um item na lista do servidor via requisição POST
  --------------------------------------------------------------------------------------
*/
const postItem = async (inputName, inputAge, inputAnaemia,
                        inputCreatinine_phosphokinase, inputDiabetes, inputEjection_fraction, 
                        inputHigh_blood_pressure, inputPlatelets, inputSerum_creatinine, 
                        inputSerum_sodium, inputSex, inputSmoking, inputTime) => {
    
  const formData = new FormData();
  formData.append('name', inputName);
  formData.append('age', inputAge);
  formData.append('anaemia', inputAnaemia);
  formData.append('creatinine_phosphokinase', inputCreatinine_phosphokinase);
  formData.append('diabetes', inputDiabetes);
  formData.append('ejection_fraction', inputEjection_fraction);
  formData.append('high_blood_pressure', inputHigh_blood_pressure);
  formData.append('platelets', inputPlatelets);
  formData.append('serum_creatinine', inputSerum_creatinine);
  formData.append('serum_sodium', inputSerum_sodium);
  formData.append('sex', inputSex);
  formData.append('smoking', inputSmoking);
  formData.append('time', inputTime);

  let url = 'http://127.0.0.1:5000/paciente';
  fetch(url, {
    method: 'post',
    body: formData
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Função para criar um botão close para cada item da lista
  --------------------------------------------------------------------------------------
*/
const insertDeleteButton = (parent) => {
  let span = document.createElement("span");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  parent.appendChild(span);
}

/*
  --------------------------------------------------------------------------------------
  Função para remover um item da lista de acordo com o click no botão close
  --------------------------------------------------------------------------------------
*/
const removeElement = () => {
  let close = document.getElementsByClassName("close");
  // var table = document.getElementById('myTable');
  let i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement.parentElement;
      const nomeItem = div.getElementsByTagName('td')[0].innerHTML
      if (confirm("Você tem certeza?")) {
        div.remove()
        deleteItem(nomeItem)
        alert("Removido!")
      }
    }
  }
}

/*
  --------------------------------------------------------------------------------------
  Função para deletar um item da lista do servidor via requisição DELETE
  --------------------------------------------------------------------------------------
*/
const deleteItem = (item) => {
  console.log(item)
  let url = 'http://127.0.0.1:5000/paciente?name='+item;
  fetch(url, {
    method: 'delete'
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    });
}

/*
  --------------------------------------------------------------------------------------
  Função para adicionar um novo item com nome, quantidade e valor 
  --------------------------------------------------------------------------------------
*/
const newItem = async () => {
  let inputName = document.getElementById("newName").value;
  let inputAge = document.getElementById("newAge").value;
  let inputAnaemia = document.getElementById("newAnaemia").value;
  let inputCreatinine_phosphokinase = document.getElementById("newCreatinine_phosphokinase").value;
  let inputDiabetes = document.getElementById("newDiabetes").value;
  let inputEjection_fraction = document.getElementById("newEjection_fraction").value;
  let inputHigh_blood_pressure = document.getElementById("newHigh_blood_pressure").value;
  let inputPlatelets = document.getElementById("newPlatelets").value;
  let inputSerum_creatinine = document.getElementById("newSerum_creatinine").value;
  let inputSerum_sodium = document.getElementById("newSerum_sodium").value;
  let inputSex = document.getElementById("newSex").value;
  let inputSmoking = document.getElementById("newSmoking").value;
  let inputTime = document.getElementById("newTime").value;

  // Verifique se o nome do produto já existe antes de adicionar
  const checkUrl = `http://127.0.0.1:5000/pacientes?nome=${inputName}`;
  fetch(checkUrl, {
    method: 'get'
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.pacientes && data.pacientes.some(item => item.name === inputName)) {
        alert("O paciente já está cadastrado.\nCadastre o paciente com um nome diferente ou atualize o existente.");
      } else if (inputName === '') {
        alert("O nome do paciente não pode ser vazio!");
      } else if (isNaN(inputAge) || isNaN(inputAnaemia) || isNaN(inputCreatinine_phosphokinase) || isNaN(inputDiabetes) || isNaN(inputEjection_fraction) || isNaN(inputHigh_blood_pressure) || isNaN(inputPlatelets) || isNaN(inputSerum_creatinine) || isNaN(inputSerum_sodium) || isNaN(inputSex) || isNaN(inputSmoking) || isNaN(inputTime)) {
        alert("Esse(s) campo(s) precisam ser números!");
      } else {
        insertList(inputName, inputAge, inputAnaemia, inputCreatinine_phosphokinase, inputDiabetes, inputEjection_fraction, inputHigh_blood_pressure, inputPlatelets, inputSerum_creatinine, inputSerum_sodium, inputSex, inputSmoking, inputTime);
        postItem(inputName, inputAge, inputAnaemia, inputCreatinine_phosphokinase, inputDiabetes, inputEjection_fraction, inputHigh_blood_pressure, inputPlatelets, inputSerum_creatinine, inputSerum_sodium, inputSex, inputSmoking, inputTime);
        alert("Item adicionado!");
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}


/*
  --------------------------------------------------------------------------------------
  Função para inserir items na lista apresentada
  --------------------------------------------------------------------------------------
*/
const insertList = (name, age, anaemia, creatinine_phosphokinase, diabetes, ejection_fraction, high_blood_pressure, platelets, serum_creatinine, serum_sodium, sex, smoking, time, death_event) => {
  var item = [name, age, anaemia, creatinine_phosphokinase, diabetes, ejection_fraction, high_blood_pressure, platelets, serum_creatinine, serum_sodium, sex, smoking, time, death_event];
  var table = document.getElementById('myTable');
  var row = table.insertRow();

  for (var i = 0; i < item.length; i++) {
    var cell = row.insertCell(i);
    cell.textContent = item[i];
  }

  var deleteCell = row.insertCell(-1);
  insertDeleteButton(deleteCell);


  document.getElementById("newName").value = "";
  document.getElementById("newAge").value = "";
  document.getElementById("newAnaemia").value = "";
  document.getElementById("newCreatinine_phosphokinase").value = "";
  document.getElementById("newDiabetes").value = "";
  document.getElementById("newEjection_fraction").value = "";
  document.getElementById("newHigh_blood_pressure").value = "";
  document.getElementById("newPlatelets").value = "";
  document.getElementById("newSerum_creatinine").value = "";
  document.getElementById("newSerum_sodium").value = "";
  document.getElementById("newSex").value = "";
  document.getElementById("newSmoking").value = "";
  document.getElementById("newTime").value = "";

  removeElement();
}