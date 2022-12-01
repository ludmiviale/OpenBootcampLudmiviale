const listaCompras = ["leche", "azucar", "harina", "puré de tomate", "papel de cocina"]

listaCompras.push("aceite de girasol")
console.log(listaCompras)

listaCompras.pop()
console.log(listaCompras)


const listaPeliculas = [
    {titulo: "Titanic", director: "James Cameron", año: 1997},
    {titulo: "17 otra vez", director: "Burr Steers", año: 2009},
    {titulo: "Sin rastro", director: "Peter Facinelli", año: 2020}
]

const post2010 = listaPeliculas.filter(objeto => objeto.año > 2010)
console.log(post2010)

const directores = listaPeliculas.map(listaPeliculas => listaPeliculas.director)
console.log(directores)

const titulos = listaPeliculas.map(listaPeliculas => listaPeliculas.titulo)
console.log(titulos)

const concatenar = directores.concat(titulos)
console.log(concatenar)

const factorProp = [...directores, ...titulos]
console.log(factorProp)
