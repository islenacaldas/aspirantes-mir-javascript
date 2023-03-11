/*escribe una función llamada bmi que reciba dos argumentos: 
peso y altura. Utiliza la formula para retornar el BMI correspondiente.
 Debes ejecutar tu archivo usando node.js node IMC.js*/
 function bmi(peso, altura){
    return(peso/(altura**2))
 }
 console.log(bmi(65, 1.8)) // 20.061728395061728
console.log(bmi(72, 1.6)) // 28.124999999999993
console.log(bmi(52, 1.75)) //  16.979591836734695