let pedro= {
nombre : "Pedro Perez",
edad : 30,
activo: true, 
hobbies:["programar", "squash", "piano"],
saluda: function(){
    return "hola me llamo " + this.nombre;
    },
}


console.log(pedro.edad)
pedro.altura= 1.8
delete pedro.activo

let llaves = Object.keys(pedro);
for (let i=0; i < llaves.length; i++) {
  let llave = llaves[i];
  console.log(llave +":"+pedro[llave])
}
console.log(pedro.saluda())