//CREAR PERSONAJES
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
const Personaje = new Character("",28,1.79,92,1000,"Human","M");
//CREAR OBJETOS DE TIENDA
class Equipamiento{
    constructor(nombre,valor,damage,peso,resistencia){
        this.nombre = nombre,
        this.valor = valor,
        this.damage = damage,
        this.peso = peso,
        this.resistencia = resistencia
    }
}
const Escudo = new Equipamiento("Escudo",300,10,20,100);
const Espada = new Equipamiento("Espada",400,90,15,50);
const Arco = new Equipamiento("Arco",350,45,10,30);
const Yelmo = new Equipamiento("Yelmo",200,15,20,70);
const Ballesta = new Equipamiento("Ballesta",300,70,20,10);
const Pechera = new Equipamiento("Pechera",250,5,25,80);

let nombre;
let char;
let charOk;
let dataConsola;
let comprarObj = 3;

//INICIAR PROGRAMA
pedirNombre();

function pedirNombre(){
nombre = prompt("          //////////////////////////       INICIO       ////////////////////////// \n \n   ¡Hola forastero! Te encuentras en el yermo de las tierras de Singular.\n                                          ¿CÓMO TE LLAMAS?");
while (nombre=="" || nombre==null){
    nombre = prompt("          //////////////////////////       INICIO       ////////////////////////// \n \nCreo que no entendí tu nombre, ¿cómo te llamas?");
}
elegirPersonaje();
}

function elegirPersonaje(){
    char = parseInt(prompt(          "//////////////////////////     ELIGE PERSONAJE      //////////////////////////\n"+nombre+", para comenzar deberás elegir a uno de los siguientes personajes. Elige con un número al personaje para ver su descripcion.\n \n                  (1) TIMOTHY          (2) MORGAN         (3) PHILLIPS \n"));
    while(char==null || char<=0 || char>=4){
        char = parseInt(prompt("Deberás elegir un personaje para continuar. \n Elige un numero de personaje. \n                  1. TIMOTHY          2. MORGAN         3. PHILLIPS"));
    }
    switch (char) {
        case 1:
            charOk = confirm("          //////////////////////////     TIMOTHY      //////////////////////////\n \nHas elegido a Timothy! \nLider de exploracion y mercader experto.Posee aumentos electronicos en el cuerpo que le dan habilidades sobrehumanas.  \n \n¿Aceptas este personaje?");
            if(charOk==true){
                Personaje.nombre="Timothy";
                mostrarConsola();
            }
            else{
                elegirPersonaje();
            }
            break;
        case 2:
            charOk = confirm("          //////////////////////////     MORGAN      //////////////////////////\n \nHas elegido a Morgan! \n La cazadora mas fuerte de las tierras altas. Lidera la tribu de piratas del asfalto y se encuentra en busca de su familia. \n \n¿Aceptas este personaje?");
            if(charOk==true){
                Personaje.nombre="Morgan";
                mostrarConsola();
            }
            else{
                elegirPersonaje();
            }
            break;
        case 3:
            charOk = confirm("          //////////////////////////     PHILLIPS      /////////////////////////\n \nHas elegido a Phillips! \n Especialista en trampas y francotirador, ex militar que ahora trabaja como mercenario para los diferentes clanes del yermo. \n \n¿Aceptas este personaje?");
            if(charOk==true){
                Personaje.nombre="Phillips";
                mostrarConsola();
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

function mostrarConsola(){
    dataConsola = parseInt(prompt("     //////////////////////// EDITA TU PERSONAJE ///////////////////////// \n                     " +Personaje.nombre+"  ||  "+Personaje.edad+" años"+"  ||  "+"$"+Personaje.dinero+"  ||  "+Personaje.skillPuntos+" SkillPoints \n \n (1) VER PERSONAJE \n (2) EDITAR SKILLS \n (3) VER EQUIPAMIENTO \n (4) TERMINAR EDICION \n \n(Tareas: compra "+comprarObj+" equipamientos y agrega "+Personaje.skillPuntos+" SkillPoints para continuar)"));
    while(dataConsola==null || dataConsola<=0 || dataConsola>=6){
        mostrarConsola();
    }
    switch (dataConsola) {
        case 1:
            verPersonaje();
            break;
        case 2:
            editarSkills();
            break;
        case 3:
            verEquipamiento();
            break;
        case 4:
            comenzarDesafio();
            break;
        case 5:
            reset();
        break;
        default:
            mostrarConsola();
            break;
    }
}

function verPersonaje(){
alert("          //////////////////////////     "+Personaje.nombre+"     //////////////////////////\n                       Altura: "+Personaje.altura+"        Peso: "+Personaje.peso+"        Dinero: "+Personaje.dinero+"\n                   Raza: "+Personaje.raza+"        Vida: "+Personaje.vida+"         Experiencia: "+Personaje.experiencia+"\n                       Daño: "+Personaje.damage+"           Objetos: "+Personaje.cantObjetos+"        Fama: "+Personaje.fama+"\n               ------------------------------------------------------"+"\n             FUERZA: "+Personaje.fuerza+"        PERCEPCION: "+Personaje.percepcion+"       RESISTENCIA: "+Personaje.resistencia+"\n            CARISMA: "+Personaje.carisma+"       INTELIGENCIA: "+Personaje.inteligencia+"         AGILIDAD: "+Personaje.agilidad);
mostrarConsola();
}

function editarSkills(){
let data= parseInt(prompt("                //////////////////////// SKILLS ///////////////////////// \n(1) FUERZA: "+Personaje.fuerza+"                                                                            Puntos: "+Personaje.skillPuntos+"\n(2) PERCEPCION: "+Personaje.percepcion+"\n(3) RESISTENCIA: "+Personaje.resistencia+"\n(4) CARISMA: "+Personaje.carisma+"\n(5) INTELIGENCIA: "+Personaje.inteligencia+"\n(6) AGILIDAD: "+Personaje.agilidad+"                                                (0) Reset Skills    (7) Salir\n             (Elige una habilidad para agregar 1 punto de Skill)"));
switch (data) {
    case 0 :
        Personaje.skillPuntos = 5;
        resetSkills();
        editarSkills();
        break;
    case 1:
        Personaje.fuerza+=1;
        Personaje.skillPuntos--;
        editarSkills();
        break;
    case 2:
        Personaje.percepcion+=1;
        Personaje.skillPuntos--;
        editarSkills();
        break;
    case 3:
        Personaje.resistencia+=1;
        Personaje.skillPuntos--;
        editarSkills();
        break;
    case 4:
        Personaje.carisma+=1;
        Personaje.skillPuntos--;
        editarSkills();
        break;
    case 5:
        Personaje.inteligencia+=1;
        Personaje.skillPuntos--;
        editarSkills();
        break;
    case 6:
        Personaje.agilidad+=1;
        Personaje.skillPuntos--;
        editarSkills();
        break;
    case 7:
        mostrarConsola();
        break;
    default:
        mostrarConsola();
        break;
}

}

function verEquipamiento(){

}

function comenzarDesafio(){

}

function resetSkills(){
Personaje.fuerza = 5;
Personaje.percepcion = 5;
Personaje.resistencia = 5;
Personaje.carisma = 5;
Personaje.inteligencia = 5;
Personaje.agilidad = 5;
}