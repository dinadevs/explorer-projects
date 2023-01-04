/* 
  Dada uma lista de pacientes, descubra o IMC = Peso ÷ (Altura × Altura)de cada paciente e imprima
  "Paciente X possui o IMC de: Y" 
  Onde X é o nome do paciente e Y é o IMC desse paciente
  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

const patients = [
    {
        name: "Edna",
        weight: 100,
        height: 190,
    },
    {
        name: "Marcos",
        age: 68,
        weight: 100,
        height: 180,
    },
    {
        name: "Alexandra",
        age: 27,
        weight: 70,
        height: 170
    },
]

function IMCresult(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
}

function imc(patient) {
    return `
Paciente ${patient.name} possui o IMC de
 ${IMCresult(patient.weight, patient.height)} 
 `
}

for (let patient of patients) {
    let IMCmessage = imc(patient)
    alert(IMCmessage)
}
