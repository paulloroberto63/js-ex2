let students = [
 {
    name: "João",
    nota1: 6,
    nota2: 5,
 },

 {
    name: "Mark",
    nota1: 8,
    nota2: 8,
 },

 {
    name: "Jhon",
    nota1: 7,
    nota2: 6,
 },

 {
    name: "Rodrigo",
    nota1: 3,
    nota2: 4,
 },
  
]

const calcStudent = (nota1,nota2) => {
    return ((nota1 + nota2) / 2).toFixed(2)
  }
  
  for (let student of students) {

    if(calcStudent(student.nota1, student.nota2) >= 7) {
  
      alert(`A média do(a) aluno(a) ${student.name} é: ${calcStudent(student.nota1,student.nota2)}
       ${student.name} Você foi aprovado(a)`)
    } else {
      alert(`A média do(a) aluno(a) ${student.name} é: ${calcStudent(student.nota1,student.nota2)}
       ${student.name} foi reprovado(a)`)
      }
  }
  