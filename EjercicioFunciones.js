console.log(verdadera());

function verdadera() {
  return true;
}

console.log(miAsinc());

function miAsinc() {
  setTimeout(() => {
    console.log("Hola soy una promesa");
  }, 5000);
}



function* generaId() {
    let id = 0;
    while (true) {
      id++;
      if (id % 2 == 0) {
        return id;
      }
      yield id;
    }
  }
  
  const gen = generaId();
  
  console.log(gen.next().value);
  console.log(gen.next().value);
