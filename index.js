const boton = document.querySelector("#btn1")

console.log(boton)

boton.addEventListener("click", () => {
  alert("click en el botón")
})

$("#btn2").click(() => {
    console.log("Hola, estoy utilizando JQuery")
})