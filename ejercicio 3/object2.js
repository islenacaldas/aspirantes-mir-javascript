let persona = {
    nombre: "Maria",
    edad:54,
    ciudad: "medellin",
    profesion: "sicologa",
} 

for (let llave in persona) {
    if (persona.hasOwnProperty(llave)) {
      console.log(llave + ":" +persona[llave])
    }
  }

function presentacion(persona){
    return (`hola mi nombre es ${persona.nombre}, tengo ${persona.edad} años, vivo en la ciudad de ${persona.ciudad} y soy ${persona.profesion}`)

}
let mensaje = presentacion(persona)
console.log(mensaje)

persona.hobbies=["cantar", "bailar", "salir con amigos", "viajar"]
console.log(persona.hobbies)

for(let i=0; i<persona.hobbies.length; i++){
    console.log(persona.hobbies[i])
}
