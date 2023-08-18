let persona = {
    nombre: 'Ezequiel1',
    edad: 23,
    carrera: 'Software1'
}

let persona2 = {
    nombre: 'Ezequiel2',
    edad: 24,
    carrera: 'Software2'
}

let persona3 = {
    nombre: 'Ezequiel3',
    edad: 25,
    carrera: 'Software3'
}

let arrayObjetos = [persona, persona2, persona3]

arrayObjetos.forEach((i) => {
    console.log(i)
})

console.log(arrayObjetos[2].edad)

//imprimir el nombre de la posicion 0
//imprimir la carrera de la posicion 1
//imprimir la edad de la posicion 2