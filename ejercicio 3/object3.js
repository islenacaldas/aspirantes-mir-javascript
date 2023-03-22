let receta={}
receta.nombre= "Sandwich"
receta.ingredientes=[]
receta.ingredientes.push({
    nombre:"pan", 
    cantidad:2
})
receta.ingredientes.push({
    nombre:"queso", 
    cantidad:1
})
console.log(receta.ingredientes[0].nombre)

let totalCantidades=0
for(let i=0; i<receta.ingredientes.length; i++){
    totalCantidades+= receta.ingredientes[i].cantidad
}
console.log( `la cantidad total de ingredientes es ${totalCantidades}`)
