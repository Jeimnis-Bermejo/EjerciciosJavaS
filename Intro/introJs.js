/*Ejercicio 1*/

const miNombre = "Jeimnis"


/*Ejercicio 2*/
const miApellido = "Bermejo"


/*Ejercicio 3*/
const miEdad = 31


/*Ejercicio 4*/
const miMascota = "Atenas"


/*Ejercicio 5*/
const edadMascota = 9


/*Ejercicio 6*/

console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

/*Ejercicio 7*/

const nombreCompleto = (miNombre + " " + miApellido)
console.log(nombreCompleto)

/*Ejercicio 8*/

const textoPresentacion = ("Hola mi nombre es " + miNombre + " " + miApellido + " " + "tengo" + " " + miEdad + " " + "años tengo una mascota llamada" + " " + miMascota + " " + "ella tiene" + " " + edadMascota + " " + "años")
console.log(textoPresentacion)

/*Ejercicio 9*/

const sumaEdades = miEdad + edadMascota
const restaEdades = miEdad - edadMascota
const productoEdades = miEdad * edadMascota
const divisionEdades = miEdad / edadMascota

console.log(sumaEdades)
console.log(restaEdades)
console.log(productoEdades)
console.log(divisionEdades)

/*Ejercicio 10*/

const alumno = {
    nombre: "Jeimnis",
    apellido: "Bermejo",
    edad: 31,
    facultad: "Ingenieria",
    semestre: 5
}

console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.facultad)
console.log(alumno.semestre)

/*Ejercicio 11*/

const mascota = {
    nombre: "Atenas",
    raza: "Pitbull",
    color: "Cafe claro",
    edad: 9,
    cualidad: "Cariñosa",

}

console.table(mascota)
console.log(mascota.nombre)
console.log(mascota.raza)
console.log(mascota.color)
console.log(mascota.edad)
console.log(mascota.cualidad)

/*Ejercicio 12*/

const frutas = ["Mango", "Patilla", "Mandarina", "Fresa", "piña"]
console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

/*Ejercicio 13*/
const edad = prompt("ingrese su edad")
const soyMayorDeEdad = (edad > 18)
console.log(soyMayorDeEdad)

/*Ejercicio 14*/

const numeros = [1, 2, 3, 4, 5]
console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

/*Ejercicio 15*/
const familia = [
    {   nombre: "Reinaldo",
        apellido: "Bermejo",
        edad: 58,
        parentezco: "Padre",
    },
    {nombre: "celia",
    apellido: "Rivera",
    edad: 51,
    parentezco: "Madre",
    },
    {nombre: "Jorge",
        apellido: "Bermejo",
        edad: 32,
        parentezco: "Hijo",
    },
   { nombre: "Jeimnis",
    apellido: "Bermejo",
    edad: 31,
    parentezco: "Hija"},

    {nombre: "Betty",
    apellido: "Bermejo",
    edad: 26,
    parentezco: "Hija"
    }
]
console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])

/*Ejercicio 16*/

const textoAleatorio=("Me gusta la "+" " + (frutas[1]) + " " + "normalmente me como" +" "+ (numeros[4]) +" " +"a la semana" + " " + "aunque a mi hermana" + " "+(familia[4].nombre)+ " " + "no le gustan ")

console.log (textoAleatorio)

/*Ejercicio 17*/

const primeraEdad=prompt("Ingrese su edad")
const segundaEdad=prompt("Ingrese la edad de su compañero")
const edadesIguales=(primeraEdad==segundaEdad)
const soyMayor=(primeraEdad>segundaEdad)
const  soyMenor=(primeraEdad<segundaEdad)

console.log ("Mi edad es igual a la de mi compañero"+" "+ edadesIguales)
console.log ("Mi edad es mayor a la de mi compañero"+" "+ soyMayor)
console.log ("Mi edad es menor a la de mi compañero"+" "+ soyMenor)

/*Ejercicio 18*/

const edadPersona = prompt("Ingrese la edad")
const alturaPersona=prompt("igrese su altura")

const puedeSubir= (edadPersona> 6 && alturaPersona>= 120)

console.log ("Puede subir a la atraccion "+" "+ puedeSubir)

/*Ejercicio 19*/

const pase = prompt("Ingrese su pase (Vip, Normal o Limitado")
const saldo=prompt("igrese su saldo")

const puedePasar= (pase=="vip") && (saldo>1000)

console.log ("La persona Puede pasar "+" "+ puedePasar)


