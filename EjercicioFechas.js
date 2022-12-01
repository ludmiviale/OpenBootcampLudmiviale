const fechaHoy = new Date()
console.log(fechaHoy)

const fechaMia = new Date(1994, 1, 9)
console.log(fechaMia)

console.log(fechaHoy.getTime() > fechaMia.getTime())

console.log(fechaMia.getDate())

console.log(fechaMia.getMonth())

console.log(fechaMia.getFullYear())