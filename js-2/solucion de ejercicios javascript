
//Crea una función sum que reciba un arreglo de números y retorne la suma de todos los elementos:
function sum(arr){
    let cont=0
    for(let i=0; i<arr.length; i++){
        cont+= arr[i]
    }
    return cont
}
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0

//2. Crea una función max que reciba un arreglo de números y retorne el número máximo sin usar el método Math.max de JavaScript. Si el arreglo está vacío debe retornar undefined

 function max(arr){
    if (arr.length ===0){
        return undefined 
    }
    let maxNum=[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i]>maxNum){
            maxNum=arr[i]
        }
    }
    return maxNum
 }
  
 console.log(max([1, 3, 2])) // 3
 console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
 console.log(max([])) // undefined


//3. Crea una función maxIndex que reciba una arreglo de números y retorne el índice donde se encuentra el mayor. Si el arreglo está vacío debe retornar -1.
function maxIndex(arr){
    if(arr.length===0){
        return -1
    }else{
    let arrNuevo=0
    for(let i=0; i <arr.length; i++)
    if(arr[i]>arr[arrNuevo]){
        arrNuevo=[i]
    }
    return arrNuevo
    }
}
console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1

/*4. Crear una función join que reciba un arreglo y retorne un string con 
todos los elementos separados por espacio sin usar el método join de los arreglos.*/
function join(arr){
    let str=""
    for(let i=0; i<arr.length; i++){
        str += arr[i] 
        if(i !== arr.length-1){
            str +=" "
        }
    }
return str
}

console.log(join(["esto", "es", "un", "codigo", "de", "prueba"]))

/*5. Crea una función sum que reciba un arreglo de números y retorne la suma de todos los elementos:*/

function sum(arr){
    let sum=0
    for(let i=0; i<arr.length; i++){
        sum += arr[i]
    }
    return sum
}
console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0

/*6. Crea una función max que reciba un arreglo de números y retorne el número máximo sin usar el método Math.max de JavaScript. Si el arreglo está vacío debe retornar undefined*/


function max(arr){
    if(arr.length ===0){
        return undefined
    }
    let numMaximo=arr[0]
    for(let i=1; i<arr.length; i++){
        if(arr[i]>numMaximo){
            numMaximo = arr[i]
        }
    }
    return numMaximo
}

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined

/*7. Crea una función maxIndex que reciba una arreglo de números y retorne el índice donde se encuentra el mayor. Si el arreglo está vacío debe retornar -1.*/

function maxIndex(arr){
    if(arr.length === [0]){
        return-1
    }
    let indice=[0]
    for(let i=0; i< arr.length; i++){
        if(arr[i]>indice)
        indice= arr[i]
    }
    return indice
}

console.log(maxIndex([1, 3, 2])) // 3
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(maxIndex([])) // undefined
/*8. Crear una función join que reciba un arreglo y
 retorne un string con todos los elementos separados 
 por espacio sin usar el método join de los arreglos.*/

function join(arr){
    let string=""
    for(let i=0; i< arr.length; i++){
        string=arr.join(" ")
    }
    return string
}

console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
console.log(join(["Make", "It", "Real"])) // "Make It Real"
console.log(join([])) // ""
