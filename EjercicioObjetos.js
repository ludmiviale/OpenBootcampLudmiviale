const objeto = {
    nombre: "Lola",
    apellido: "Valle",
    edad: 26,
    altura: 1.65,
    isDeveloper: false
}

const edad = objeto.edad
console.log(edad)

const objeto2 = [
    {nombre: "Lola", apellido: "Valle", edad: 28, altura: 1.65, isDeveloper: false},
    {nombre: "Juana", apellido: "Arco", edad: 24, altura: 1.75, isDeveloper: false},
    {nombre: "Emma", apellido: "Thor", edad: 26, altura: 1.69, isDeveloper: false}
]

objeto2.sort((a, b) => b.edad - a.edad)
console.log(objeto2)
