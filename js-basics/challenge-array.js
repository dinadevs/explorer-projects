/* crie uma lista de estudantes com os seguintes dados:
 - nome;
 - nota da primeira prova;
 - nota da segunda prova.

 Depois de criada a lista:
 - [x]  Crie uma **função** que irá calcular a média das notas de cada aluno;
 - [x]  Supondo que a média, para esse concurso é **7**, verifique **se** 
 cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.*/
//-----------------------------------------------------------------------------------------

/* vou declarar uma lista de objetos
   cada objeto tem 2 notas e 1 nome*/
 const students = [
     {
         name: "Edna",
         n1: 9,
         n2: 7,
     },
     {
         name: "Flavio",
         n1: 3,
         n2: 5,
     },
     {
         name: "Diego",
         n1: 5,
         n2: 2,
     },
 ]
// vou fazer uma função q vai receber 2 notas
// vai tirar a média 
// vai retornar o valor dessa média
 let average = (Number(n1) + Number(n2) ) / 2  

 let result = average > 6

 for(let i = 0; i < students.length; i++) {
    
     let list = prompt

     if (result) {
         alert(`A média do(a) aluno(a) ${students.name} é : ${average}\n
         Parabéns, ${i} ! Você foi aprovado(a) no concurso `)
     } else {
         alert(`A média do(a) aluno(a) ${students.name[i]} é : ${average}\n
         Nao foi dessa vez, ${studant} ! tente novamente!`)

         students[i] = list
     }
     
 } 
// vou fazer um for q percorre a lista
// dentro do for primeiro vou declarar uma variavel q recebe o retorno da função
// então eu vou chamar a função, passando as notas daquele estudante
// com essa variavel, vou fazer um if...else com a condição de ser maior q 6
// se for maior q 6, mostro um alerta dizendo q passou
// senao, mostro um alerta dizendo q reprovou


