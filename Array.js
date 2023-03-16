//En javascript crea un arreglo de personas con nombres y sus edades,
//y luego crea una funcion que devuelva las personas mayores de 18 años
// e imprimir la persona de mayor edad.
const persona = [
    {'nombres': 'MILTON',
    'edad': 18},
    {'nombres': 'MANUEL',
    'edad': 17},
    {'nombres': 'PEDRO',
    'edad': 19},
    {'nombres': 'SANTIAGO',
    'edad': 16},
    {'nombres': 'MARIA',
    'edad': 21},
    {'nombres': 'JORGE',
    'edad': 15},
    {'nombres': 'ARMANDO',
    'edad': 22},
    {'nombres': 'VALENTINA',
    'edad': 17},
    {'nombres': 'YULIANA',
    'edad': 23},
    {'nombres': 'ALEJANDRA',
    'edad': 17},
    {'nombres': 'PEDRO',
    'edad': 25}];

// personas mayores de 18 años
const personas = persona.filter((element, index) => {
  return element.edad > 18;
});
console.log(personas);


const edad = [ 18, 17, 19, 16, 21, 15,22, 17, 23, 17, 25];

//Edad maxima
const max = edad.reduce((a,b)=>Math.max(a,b), -Infinity);
console.log("Max:", max);//35

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.edad, 0) 
  / users.length;
}

console.log( getAverageAge(persona));