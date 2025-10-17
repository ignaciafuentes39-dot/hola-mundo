// Bucles o Ciclos

// Tipos de ciclos
// Ciclos por conteo -> FOR 
// Ciclos condicionales -> WHILE, DO-WHILE

// FOR
 // for(desde; hasta; actualizacion){
     //       // Codigo a repetir

     //}

// factorial -> 4! = 4*3*2*1
// let num = 4;
// let factorial = 1;

// for(let i = 1;i <= num; i++){

    // i++ -> i = i+1
    // i-- -> i = i-1
    // factorial = factorial * i
// }

// console.log("RESULTADO 4! = ", factorial);



 // AMBAS FUNCIONAN IGUAL, NOS DA EL MISMO RESULTADO


// WHILE
// while(condicion){

// }
//let num = 4;
//let factorial = 1;
//let i = 1;

//while(i <= num){
    //factorial = factorial * i;
    //i++;

//}

//console.log("RESULTADO 4! = ", factorial);

// ARRAYS 

let alumnas = ["Joselyn","Camila","Emilia","Ignacia","Lorena"]
//        i =     0         1         2          3        4

console.log(alumnas[2]);
console.log(alumnas[0]);
console.log(alumnas[10]);

console.log(alumnas);

for(let i = 0; i <= 4; i++){
    console.log(alumnas[i]);
}

// ADD TO THE END

alumnas.push("Susana");

// ADD TO THE BEGINNING

alumnas.unshift("Constanza")

let tamano = alumnas.length;
console.log("Cantidad de elementos: ", tamano);

for(let i = 0; i <= tamano - 1; i++){
    console.log(alumnas[i]);
}

console.log("QUITAMOS ELEMENTOS");

// Quitar del final
alumnas.pop();

// Quitar del principio
alumnas.shift();
