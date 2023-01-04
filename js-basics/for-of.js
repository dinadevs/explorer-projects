/* Crie uma lista de pacientes
Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura
 Escreva uma lista contendo o nome dos pacientes , idades alturas e pesos*/

const patients = [
    {
        name: "Edna",
        age: 20,
        weight: 90,
        height: 1.73,
    },
    {
        name: "Edite",
        age: 56,
        weight: 85,
        height: 1.60,
    },
    {
        name: "Marcos",
        age: 68,
        weight: 100,
        height: 1.90,
    },
]

for (let patient of patients) {
    alert(`Paciente ${patient.name} , tem ${patient.age} anos, 
    pesa ${patient.weight} kilos e tem ${patient.height.toFixed(2)} de altura.`)
}



