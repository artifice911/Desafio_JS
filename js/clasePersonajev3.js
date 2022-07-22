//CREAR PERSONAJES
class Character {
    constructor(id, nombre, edad, altura, peso, dinero, raza, genero, inventario) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
        this.dinero = dinero;
        this.raza = raza;
        this.genero = genero;
        this.inventario = inventario;

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
    saludar() {
        alert("Hola!, mi nombre es " + this.nombre + " y voy a acompañarte en tu camino.");
    }

    darDiagnostico() {
        alert("Tengo %" + this.vida + " de salud.");
    }

    revisarBolsillos() {
        alert("Tengo $" + this.dinero + " para comprar equipamiento.");
    }
}


//CREAR OBJETOS DE TIENDA.
class Equipamiento {
    constructor(id, nombre, valor, damage, peso, resistencia, categoria) {
        this.id = id,
            this.nombre = nombre,
            this.valor = valor,
            this.damage = damage,
            this.peso = peso,
            this.resistencia = resistencia,
            this.categoria = categoria
    }
}


const Armor1 = new Equipamiento(1, "ESCUDO", 300, 10, 20, 100, "armor");
const Armor2 = new Equipamiento(2, "YELMO", 200, 15, 20, 70, "armor");
const Armor3 = new Equipamiento(3, "PECHERA", 250, 5, 25, 80, "armor");
const Weapon1 = new Equipamiento(4, "ESPADA", 400, 90, 15, 50, "weapon");
const Weapon2 = new Equipamiento(5, "ARCO", 350, 45, 10, 30, "weapon");
const Weapon3 = new Equipamiento(6, "BALLESTA", 300, 70, 20, 10, "weapon");

//ARRAYS DE OBJETOS Y PERSONAJES//////////////////////////////////////////////////////
const objetos = [Armor1, Armor2, Armor3, Weapon1, Weapon2, Weapon3];

let Personaje = new Character(1, "Nombre", 28, 1.79, 92, 1000, "Human", "M", []);
const Timothy = [1, "Timothy", 28, 1.79, 92, 1000, "Human", "M"];
const Tim = new Character(1, "Timothy", 28, 1.79, 92, 1000, "Human", "M",[]);
const Morgan = [2, "Morgan", 27, 1.70, 80, 1000, "Human", "F"];
const Mor = new Character(2, "Morgan", 27, 1.70, 80, 1000, "Human", "F",[]);
const Phillips = [3, "Phillips", 32, 1.85, 92, 1000, "Human", "M"];
const Phil = new Character(3, "Phillips", 32, 1.85, 92, 1000, "Human", "M",[]);

const avatars = [Timothy, Morgan, Phillips];
const nombresChar =["Timothy","Morgan","Phillips"];
const perfilChar = ["Lider de exploracion y mercader experto.Posee aumentos electronicos en el cuerpo que le dan habilidades sobrehumanas.","La cazadora mas fuerte de las tierras altas. Lidera la tribu de piratas del asfalto y se encuentra en busca de su familia.","Especialista en trampas y francotirador, ex militar que ahora trabaja como mercenario para los diferentes clanes del yermo."]
//VARIABLES PARA CARGAR CONSOLA.
let nombre;
let char;
let dataConsola;
let comprarObj = 3;

//DOM SECCIONES
const sHome = document.querySelector("#home");
const sCharacter = document.querySelector("#chooseChar");
const sSkills = document.querySelector("#skills");
const sStore = document.querySelector("#store");
const sNav = document.querySelector("#superior");
const sFoot = document.querySelector("#inferior");
const sConsola = document.querySelector("#consola");
const pantallas = [sNav,sHome,sCharacter,sSkills,sStore,sFoot,sConsola];

//BOTON COMENZAR EN MAIN
const botonMain = document.querySelector("#continue");
botonMain.addEventListener("click",mostrarCharacter);
// BOTONES NEXT Y PREVIOUS EN CHARACTERS CAROUSEL
let contador=0;
const imagenesChar = ["../img/timothy.svg","../img/morgan.svg","../img/phillips.svg"];
const btnNext = document.querySelector("#next");
const btnBack = document.querySelector("#previous");
const imgElegida = document.querySelector("#imgElegida");
const nombreChar = document.querySelector("#nombreChar");
btnNext.addEventListener("click",siguiente);
btnBack.addEventListener("click",anterior);

//INICIA SIMULADOR CON LA PANTALLA MAIN
mostrarHome();
//CLASE DE PERSONAJE  BASE AL CUAL SE LE ASIGNAN LOS VALORES UNA VEZ QUE SE ELIJA PERSONAJE.
//const Personaje = elegirPersonaje();

function mostrarHome(){//////////////--PRIMERA SECCION-- PANTALLA DE INICIO DE SIMULADOR//////////
    for(let i=0;i<pantallas.length;i++){
        if(i==1){//SE DEJA A LA VISTA LA SECCION HOME Y FOOTER
            pantallas[i].className = "visible centradoMain";
        }
        else{
            pantallas[i].className = "oculto";
        }
    }
}
const descripcionChar = document.querySelector("#descripcionChar");
const saludo = document.querySelector("#saludo");
const btnElegir = document.querySelector("#elegir");
btnElegir.addEventListener("click",elegirPersonaje);//EVENTO QUE MUESTRA LA CONSOLA GENERAL

function mostrarCharacter(){//////////////--SEGUNDA SECCION-- ELECCION DE PERSONAJE//////////
    pedirNombre();
    for(let i=0;i<pantallas.length;i++){
        if(i==2 || i==5){//SE DEJA A LA VISTA LA SECCION CHARACTER Y FOOTER
            pantallas[i].className = "visible centrado";
        }
        else{
            pantallas[i].className = "oculto";
        }
    }
    saludo.innerText = `Hola ${nombre}!, elige un personaje para comenzar.`;
    descripcionChar.innerText =perfilChar[contador];
}

function siguiente(){
    if(contador<2){
        contador++;
        imgElegida.src=imagenesChar[contador];//CAMBIO URL DE IMAGEN
        nombreChar.innerText = nombresChar[contador];//CAMBIO NOMBRE DE PERSONAJES
        descripcionChar.innerText =perfilChar[contador];//CAMBIAR DESCRIPCION DE PERSONAJE
    }
    else{
        contador=0;
        imgElegida.src=imagenesChar[contador];//CAMBIO URL DE IMAGEN
        nombreChar.innerText = nombresChar[contador];//CAMBIO NOMBRE DE PERSONAJES
        descripcionChar.innerText =perfilChar[contador];
    }
}
function anterior(){
    if(contador>0){
        contador--;
        imgElegida.src=imagenesChar[contador];//CAMBIO URL DE IMAGEN
        nombreChar.innerText = nombresChar[contador];//CAMBIO NOMBRE DE PERSONAJES
        descripcionChar.innerText =perfilChar[contador];
    }
    else{
        contador=2;
        imgElegida.src=imagenesChar[contador];//CAMBIO URL DE IMAGEN
        nombreChar.innerText = nombresChar[contador]; //CAMBIO NOMBRE DE PERSONAJES
        descripcionChar.innerText =perfilChar[contador];
    }
}



function pedirNombre() {
    nombre = prompt("¡Hola forastero! Te encuentras en el yermo de las tierras de Singular.\n                                          ¿CÓMO TE LLAMAS?");
    while (nombre == "" || nombre == null) {
        nombre = prompt("Creo que no entendí tu nombre, ¿cómo te llamas?");
    };
}

function elegirPersonaje() {
    char = contador;
    switch (char) {
        case 0:
            Personaje=Tim;
            mostrarConsola();
        case 1:
            
            //Personaje = new Character(2, "Morgan", 27, 1.70, 80, 1000, "Human", "F", []);
            mostrarConsola();
        case 2:
            
            //Personaje = new Character(3, "Phillips", 32, 1.85, 92, 1000, "Human", "M", []);
            mostrarConsola();
        default:
            return mostrarCharacter();
    };
}

function mostrarConsola() {
    if (Personaje.skillPuntos == 0 && Personaje.inventario.length >= 3) {
        dataConsola = parseInt(prompt("     //////////////////////// EDITA TU PERSONAJE ///////////////////////// \n                     " + Personaje.nombre + "  ||  " + Personaje.inventario.length + " objetos" + "  ||  " + "$" + Personaje.dinero + "  ||  " + Personaje.skillPuntos + " SkillPoints \n \n (1) VER PERSONAJE \n (2) EDITAR SKILLS \n (3) VER OBJETOS \n (4) TERMINAR EDICION \n \n                           ¡YA PUEDES COMENZAR TU AVENTURA!"));
    }
    else {
        dataConsola = parseInt(prompt("     //////////////////////// EDITA TU PERSONAJE ///////////////////////// \n                     " + Personaje.nombre + "  ||  " + Personaje.inventario.length + " objetos" + "  ||  " + "$" + Personaje.dinero + "  ||  " + Personaje.skillPuntos + " SkillPoints \n \n (1) VER PERSONAJE \n (2) EDITAR SKILLS \n (3) VER OBJETOS \n (4) TERMINAR EDICION \n \n(Tareas: comprar " + comprarObj + " OBJETOS y agregar " + Personaje.skillPuntos + " SKILLS para continuar)"));
    }
    while (dataConsola == null || dataConsola <= 0 || dataConsola >= 6) {
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
    };
}

function verPersonaje() {
    Personaje.cantObjetos = Personaje.inventario.length;
    alert("          //////////////////////////     " + Personaje.nombre + "     //////////////////////////\n                       Altura: " + Personaje.altura + "        Peso: " + Personaje.peso + "        Dinero: " + Personaje.dinero + "\n                   Raza: " + Personaje.raza + "        Vida: " + Personaje.vida + "         Experiencia: " + Personaje.experiencia + "\n                       Daño: " + Personaje.damage + "           Objetos: " + Personaje.cantObjetos + "        Fama: " + Personaje.fama + "\n               ------------------------------------------------------" + "\n                  FUERZA: " + Personaje.fuerza + "        PERCEPCION: " + Personaje.percepcion + "       RESISTENCIA: " + Personaje.resistencia + "\n                 CARISMA: " + Personaje.carisma + "       INTELIGENCIA: " + Personaje.inteligencia + "         AGILIDAD: " + Personaje.agilidad + "\n               ------------------------------------------------------\nInventario: " + Personaje.inventario);
    mostrarConsola();
}

function editarSkills() {
    let data = parseInt(prompt("                //////////////////////// SKILLS ///////////////////////// \n(1) FUERZA: " + Personaje.fuerza + "                                                                            Puntos: " + Personaje.skillPuntos + "\n(2) PERCEPCION: " + Personaje.percepcion + "\n(3) RESISTENCIA: " + Personaje.resistencia + "\n(4) CARISMA: " + Personaje.carisma + "\n(5) INTELIGENCIA: " + Personaje.inteligencia + "\n(6) AGILIDAD: " + Personaje.agilidad + "                                                (0) Reset Skills    (7) Salir\n             (Elige una habilidad para agregar 1 punto de Skill)"));
    if (data == 0) {
        Personaje.skillPuntos = 5;
        resetSkills();
        editarSkills();
    }
    else if (data == 7 || data == null) {
        mostrarConsola();
    }
    else if (data == NaN) {
        editarSkills();
    }
    else if (Personaje.skillPuntos > 0) {
        if (data == 1) {
            Personaje.damage += 10;
            Personaje.fuerza += 1;
            Personaje.skillPuntos--;
            editarSkills();
        }
        else if (data == 2) {
            Personaje.percepcion += 1;
            Personaje.skillPuntos--;
            editarSkills();
        }
        else if (data == 3) {
            Personaje.vida += 20;
            Personaje.resistencia += 1;
            Personaje.skillPuntos--;
            editarSkills();
        }
        else if (data == 4) {
            Personaje.carisma += 1;
            Personaje.skillPuntos--;
            editarSkills();
        }
        else if (data == 5) {
            Personaje.inteligencia += 1;
            Personaje.skillPuntos--;
            editarSkills();
        }
        else if (data == 6) {
            Personaje.agilidad += 1;
            Personaje.skillPuntos--;
            editarSkills();
        }
        else if (data == 7) {
            mostrarConsola();
        }
        else {
            mostrarConsola();
        }
    }
    else if (data > 0 && Personaje.skillPuntos == 0) {
        alert("Ya usaste todos tus puntos de skill.")
        editarSkills();
    }
    else {
        mostrarConsola();
    }
}

// function verEquipamiento() {
//     let numero = parseInt(prompt("          //////////////////////// EQUIPAMIENTO ///////////////////////// \nDinero: $" + Personaje.dinero + "                          Inventario: " + Personaje.inventario + "\n \n(1) " + Armor1.nombre + " : $" + Armor1.valor + "             (4) " + Weapon1.nombre + " : $" + Weapon1.valor + "\n(2) " + Armor2.nombre + " : $" + Armor2.valor + "                (5) " + Weapon2.nombre + " : $" + Weapon2.valor + "\n(3) " + Armor3.nombre + " : $" + Armor3.valor + "            (6) " + Weapon3.nombre + " : $" + Weapon3.valor + "\n\n                                                               (0) Reset Compra   (7) Salir"));
//     if (numero == 7 && Personaje.inventario.length < 1) {
//         mostrarConsola();
//     }
//     else if (numero == 0) {
//         resetCompra();
//         verEquipamiento();
//     }
//     else if (numero > 0 && numero < 7) {//CHEQUEAR QUE SEA UN NUMERO DENTRO DE LOS 6 OBJETOS QUE SE PUEDEN COMPRAR
//         for (elemento of objetos) {
//             if (elemento.id == numero) {//RECORRER PARA DETECTAR EL OBJETO ELEGIDO
//                 if (Personaje.dinero >= elemento.valor) {//CHEQUEAR QUE HAYA DINERO SUFICIENTE
//                     Personaje.dinero -= elemento.valor;
//                     Personaje.inventario.push(elemento.nombre);//AGREGAR OBJETO AL INVENTARIO
//                     verEquipamiento();
//                     break;//ROMPER CICLO SI YA ENCONTRÓ EL OBJETO
//                 }
//                 else {
//                     alert("No tienes suficiente dinero.");
//                     verEquipamiento();
//                 }
//             }

//         }

//     }
//     else {
//         mostrarConsola();
//     }
// }

// function comenzarDesafio() {
//     if (Personaje.inventario.length >= 3 && Personaje.skillPuntos == 0) {
//         alert("          ¡" + nombre + " COMPLETASTE LA CREACION DE TU PERSONAJE!\n Ahora " + Personaje.nombre + " comenzará su recorrido por las tierras de Singular.\n                                          ¡BUEN VIAJE!");
//     }
//     else {
//         alert("Aún te quedan tareas que completar para poder continuar.");
//         mostrarConsola();
//     }
// }
// function resetCompra() {
//     Personaje.dinero = 1000;
//     for (let i = Personaje.inventario.length; i >= 1; i--) {
//         Personaje.inventario.pop();
//     }
// }
// function resetSkills() {
//     Personaje.fuerza = 5;
//     Personaje.percepcion = 5;
//     Personaje.resistencia = 5;
//     Personaje.carisma = 5;
//     Personaje.inteligencia = 5;
//     Personaje.agilidad = 5;
// }