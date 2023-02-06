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
  ];
  // vou fazer uma função q vai receber 2 notas
  // vai tirar a média
  // vai retornar o valor dessa média
  
  function processAvarage(n1, n2) {
    let avarage = (Number(n1) + Number(n2)) / 2;
    return avarage;
  }
  
  // vou declarar a media
  // vou fazer um for q percorre a lista
  // dentro do for primeiro vou declarar uma variavel q recebe o retorno da função
  // então eu vou chamar a função, passando as notas daquele estudante
  // com essa variavel, vou fazer um if...else com a condição de ser maior q ou igual a media
  // se for maior q ou igual, mostro um alerta dizendo q passou
  // senao, mostro um alerta dizendo q reprovou
  
  const minimum = 7;
  
  for (let student of students) {
    let result = processAvarage(student.n1, student.n2);
  
    if (result >= minimum) {
      alert(
        `Parabéns, ${student.name}! Você passou no teste, sua média foi ${result}.`
      );
    } else {
      alert(
        `${student.name}, infelizmente você reprovou no teste, sua média foi ${result}.`
      );
    }
  }
  