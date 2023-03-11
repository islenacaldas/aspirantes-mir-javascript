/*escribe una función llamada suma que reciba un número positivo y 
retorne la suma de todos los números desde 1 
hasta ese número. Debes ejecutar tu archivo usando node.js node sum.js*/
function sum(num){
    let cont=0
    for(let i=0; i<=num; i++){
        cont += i
    }
    return cont
}
console.log(sum(4)) // 1 + 2 + 3 + 4 = 10
console.log(sum(10)) // 55
console.log(sum(15)) // 120