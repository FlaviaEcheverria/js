/*
Necesitamos desarrollar una aplicación hecha con javascript que nos ayude a gestionar los alumnos de nuestra clase.
Partiremos de un listado de alumnos inicial:
*/

/* 
  si utilizáis algún import en vuestra solución, recordad que hay que indicarle a node 
  que estamos utilizando módulos. Para ello, debemos incluir el fichero package.json que 
  veis en este repositorio. En caso de que no os funcione, contactadme por discord.
*/



/*const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  }]
  
  const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
  const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
  const availableGenders = ['male', 'female'];
*/

function Student (name, examScores, age, gender) {
    this.name = name;
    this.examScores = examScores;
    this.age = age;
    this.gender = gender;
}

s1 = new Student ("Edu", 9.5, 32, "male")
s2 = new Student ("Silvia", 3.5, 29, "female") 
s3 = new Student ("Pepe", 6.8, 25, "male")
s4 = new Student ("Cecilia", 5.0, 20, "female")
s5 = new Student ("Ana", 6.0, 38, "female")
s6 = new Student ("Juan", 8.0, 30, "male")
s7 = new Student ("Victor", 5.5, 28, "male")
s8 = new Student ("Leo", 6.6, 23, "male")
s9 = new Student ("Luisa", 8.9, 19, "female")
s10 = new Student ("Isabel", 7.0, 22, "female")
s11 = new Student ("Virginia", 7.8, 31, "female")
s12 = new Student ("Francisco", 2.5, 33, "male")
s13 = new Student ("Carlos", 7.9, 30, "male")

console.table([s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13]);

let students = [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13];

console.log (students.length);

students.pop ();

console.table (students);

let studentRandom = students [Math.floor(Math.random() * students.length)];

console.log (studentRandom);
