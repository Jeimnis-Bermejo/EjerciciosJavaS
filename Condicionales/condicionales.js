/*Ejercicio 1*/

let num1 = 9
let num2 = 5
if (num1 > num2) {
    console.log(num1)
}
else {
    console.log(num2)
}

/*Ejercicio 2 */
if (num1 > num2) {
    console.log(num1)
}
else if (num1 == num2) {
    alert("los numeros son iguales")
}
else
    console.log(num2)


/*Ejercicio 3*/
if (num1 == num2) {
    alert("Los numeros son iguales")
}

else {
    alert("los numeros no son iguales")
}

/*Ejercicio 4*/

let fecha1 = "2018-10-7"
let fecha2 = "2018-2-17"

if (fecha1 > fecha2) {
    alert(`la fecha` + ` ` + [fecha1] + ` ` + `es mayor que` + ` ` + [fecha2])
}
else {
    alert(`la fecha` + ` ` + [fecha1] + ` ` + `es menor que` + ` ` + [fecha2])
}

/*Ejercicio 5*/

if (fecha1 > fecha2) {
    alert(`la fecha` + ` ` + [fecha1] + ` ` + `es mayor que` + ` ` + [fecha2])
}
else {
    alert(`la fecha` + ` ` + [fecha2] + ` ` + `es menor que` + ` ` + [fecha1])
}

/*Ejercicio 6*/

let dato1 = 5
let dato2 = 7
let dato3 = 9

if (dato1 > dato2 && dato1 > dato3) {

    console.log(`El numero` + ` ` + [dato1] + ` ` + `es mayor`)
}
else if (dato2 > dato1 && dato2 > dato3) {
    console.log(`El numero` + ` ` + [dato2] + ` ` + `es mayor`)
}
else {
    console.log(`El numero` + ` ` + [dato3] + ` ` + `es mayor`)
}

/*Ejercicio 7*/
let color = prompt("ingrese alguno de estos colores, rojo, azul o verde")
switch (color) {
    case "rojo":
        alert("EL COLOR DE LA PASION")
        break
    case "azul":
        alert("EL COLOR DEL MAR")
        break
    case "verde":
        alert("EL COLOR DE LA NATURALEZA")
        break
}

/*Ejercicio 8 */

let numero1 = Number(prompt ("ingrese un numero del 1 al 100"))
let numero2 = Number(prompt("ingrese otro numero del 1 al 100"))
let operacion = (prompt("Ingrese la operacion matematica que desee realizar"))
switch (operacion) {
    case "suma":
       alert (numero1+numero2)
        break
    case "resta":
        alert(numero1-numero2 )
        break
    case "multiplicacion":
        alert(numero1*numero2 )
        break
    case division:
        alert(numero1/numero2)
        break
}

/*Ejercicio 9*/

let people1={
    nombre:Juan,
    edad:55,
    altura:1.70
}
let people2={
    nombre:Jeimnis,
    edad:31,
    altura:163
}
if (people1>people2){
console.log (people1)
}
else
{
    console.log (people2)
}