//object literal
/*const Equipamiento = {
    nombre:"escudo",
    valor: 1000,
    disponible: true,

}*/

//console.log(Equipamiento);


// delete Equipamiento.precio;   borrar propiedad del objeto

//object constructor es una funcion que construye objetos nuevos
function Personaje(nombre,edad,peso){
    this.nombre = nombre;
    this.edad = edad;
    this.peso = peso;
    this.disponible = true;
    this.saludar = function(){
        console.log("hola soy un personaje nuevo, me llamo "+this.nombre);
    };
};

//crear instancia de personaje
const Timothy =new Personaje("Timothy",28);
console.log(Timothy);
Timothy.saludar();

//AHORA VAMOS A CREAR UNA CLASE PERSONAJE Y EQUIPAMIENTO

class Character{
    constructor(nombre,edad,especie){
        this.nombre = nombre;
        this.edad = edad;
        this.especie = especie;
    }
    saludar(){
        console.log("hola soy un personaje nuevo, me llamo "+this.nombre+" y tengo "+this.edad+" años.");
    };
}
const Norman = new Character("Norman",28);
console.log(Norman);
Norman.saludar();