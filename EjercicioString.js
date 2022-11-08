let nombre = "Ludmila"

let apellido = "Viale"

let estudiante = (nombre.concat (" ", apellido))
console.log(estudiante)

let estudianteMayus = (estudiante.toUpperCase)
console.log(estudianteMayus)

let estudianteMinus = (estudiante.toLowerCase)
console.log(estudianteMinus)

let cantidadLetras = (estudiante.length)
console.log(cantidadLetras)

let primeraLetra = (nombre.charAt(0))
console.log(primeraLetra)

let ultimaLetra = (apellido.charAt(4))
console.log(ultimaLetra)

let eliminarEspacios = (estudiante.trim().length)
console.log(eliminarEspacios)

let booleano = (estudiante.includes(nombre))
console.log(booleano)