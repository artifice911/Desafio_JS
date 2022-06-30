class Character{
    constructor(nombre,edad,altura,peso,dinero,raza,){
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
        this.dinero = dinero;
        this.raza = raza;

        this.vida = 100;
        this.experiencia = 0;
        this.fama = 0;
        this.damage = 5;
        this.pesoMax = 50;
        this.skillPuntos = 5;
        this.cantObjetos = 0;
        this.cantSpecialSkills = 0;

        this.fuerza = 5;
        this.percepcion = 5;
        this.resistencia = 5;
        this.carisma = 5;
        this.inteligencia = 5;
        this.agilidad = 5;
        this.suerte = 5;
    }
    saludar(){
        alert("Hola!, mi nombre es "+this.nombre+" y voy a acompañarte en tu camino.");
    }

    darDiagnostico(){
        alert("Tengo %"+this.vida+" de salud.");
    }

    revisarBolsillos(){
        alert("Tengo $"+this.dinero+" para comprar equipamiento.");
    }
}
let nombre;
let char;
let charOk;
let dataConsola;
const avatars = ["BigDady","Thimoty","Morgan","Phillips"];
const Personaje = new Character("Nombre",28,1.79,92,1000,"Human","M");



pedirNombre();

function pedirNombre(){
nombre = prompt("Hola forastero! Te encuentras en el yermo hostil de las tierras de Singular. ¿Cómo te llamas?");
while (nombre=="" || nombre==null){
    nombre = prompt("Creo que no entendí tu nombre, ¿cómo te llamas?");
}
elegirPersonaje();
}

function elegirPersonaje(){
    char = parseInt(prompt(nombre+", para comenzar deberás elegir a uno de los siguientes personajes. Elige con un número al personaje para ver su descripcion.\n \n                  1. TIMOTHY          2. MORGAN         3. PHILLIPS \n"));
    while(char==null || char<=0 || char>=4 || char.length){
        char = parseInt(prompt("Deberás elegir un personaje para continuar. \n Elige un numero de personaje."));
    }
    switch (char) {
        case 1:
            charok = confirm("Has elegido a Timothy! \n Lider de exploracion y mercader experto. \n ¿Aceptas este personaje?");
            if(charok==true){
                mostrarConsola(char);
            }
            else{
                elegirPersonaje();
            }
            break;
        case 2:
            charok = confirm("Has elegido a Morgan! \n La cazadora mas fuerte de las tierras altas. \n ¿Aceptas este personaje?");
            if(charok==true){
                mostrarConsola(char);
            }
            else{
                elegirPersonaje();
            }
            break;
        case 3:
            charok = confirm("Has elegido a Phillips! \n Especialista en trampas y francotirador. \n ¿Aceptas este personaje?");
            if(charok==true){
                mostrarConsola(char);
            }
            else{
                elegirPersonaje();
            }
            break;
        default:
            elegirPersonaje();
            break;
    }
}


function mostrarConsola(character){
    Personaje.nombre = avatars[character];
    dataConsola = parseInt(prompt("       //////////////////////// EDITA TU PERSONAJE ///////////////////////// \n                          " +Personaje.nombre+"  ||  "+Personaje.edad+" años"+"  ||  "+"$"+Personaje.dinero+"  ||  "+Personaje.skillPuntos+" Puntos \n \n 1.VER PERSONAJE \n 2.EDITAR SKILLS \n 3.VER EQUIPAMIENTO \n 4.COMENZAR DESAFÍO \n(compra equipamiento para tu aventura y agrega Skills para poder comenzar el desafío)"));
}




