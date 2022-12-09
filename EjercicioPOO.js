class Estudiante {
    constructor(nombre, asignaturas) {
        this.nombre = nombre;
        this.asignaturas = asignaturas;
    }

    getDatos() {
        return (this.nombre + this.asignaturas)
        }

}

let estudiante1 = new Estudiante("Luis", ["Javascript", "HTML", "CSS"])
console.log(estudiante1)

console.log(estudiante1.getDatos())