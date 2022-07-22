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
let Personaje = new Character(1, "Nombre", 28, 1.79, 92, 1000, "Human", "M", []);

const Tim = new Character(1, "Timothy", 28, 1.79, 92, 1000, "Human", "M",[]);
const Mor = new Character(2, "Morgan", 27, 1.70, 80, 1000, "Human", "F",[]);
const Phil = new Character(3, "Phillips", 32, 1.85, 92, 1000, "Human", "M",[]);

const nombresChar =["Timothy","Morgan","Phillips"];
const perfilChar = ["Lider de exploracion y mercader experto.Posee aumentos electronicos en el cuerpo que le dan habilidades sobrehumanas.","La cazadora mas fuerte de las tierras altas. Lidera la tribu de piratas del asfalto y se encuentra en busca de su familia.","Especialista en trampas y francotirador, ex militar que ahora trabaja como mercenario para los diferentes clanes del yermo."];
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

//VARIABLES PARA CARGAR CONSOLA.
let comprarObj = 3;
let nick;

//DOM SECCIONES
const sHome = document.querySelector("#home");
const sCharacter = document.querySelector("#chooseChar");
const sSkills = document.querySelector("#skills");
const sStore = document.querySelector("#store");
const sConsola = document.querySelector("#consola");
const sGame = document.querySelector("#game");
const pantallas = [sHome,sCharacter,sConsola,sSkills,sStore,sGame];

// BOTONES NEXT Y PREVIOUS EN CHARACTERS CAROUSEL
let contador=0;
const imagenesChar = ["../img/timothy.svg","../img/morgan.svg","../img/phillips.svg"];
const bodyChar = ["../img/bodyTim.svg","../img/bodyMor.svg","../img/bodyPhil.svg"];
const btnNext = document.querySelector("#next");
const btnBack = document.querySelector("#previous");
const imgElegida = document.querySelector("#imgElegida");
const nombreChar = document.querySelector("#nombreChar");
btnNext.addEventListener("click",siguiente);
btnBack.addEventListener("click",anterior);

//INICIA SIMULADOR CON LA PANTALLA MAIN
mostrarHome();

//--PRIMERA SECCION-- PANTALLA DE INICIO DE SIMULADOR--
function mostrarHome(){
    for(let i=0;i<pantallas.length;i++){
        if(i==0){//SE DEJA A LA VISTA LA SECCION HOME
            pantallas[i].className = "d-flex flex-column align-items-center";
        }
        else{
            pantallas[i].className = "d-none";
        }
    }
}

//BOTON COMENZAR EN MAIN
const botonMain = document.querySelector("#btnComenzar");
botonMain.addEventListener("click",mostrarCharacter);
const descripcionChar = document.querySelector("#descripcionChar");
const saludo = document.querySelector("#saludo");
const btnElegir = document.querySelector("#elegir");
btnElegir.addEventListener("click",elegirPersonaje);//EVENTO QUE MUESTRA LA CONSOLA GENERAL

//--SEGUNDA SECCION-- ELECCION DE PERSONAJE//////////
function mostrarCharacter(){
    nick = document.querySelector("#nickName");
    if (nick.value==""){
        alert("escribe tu nombre para comenzar");
    }
    else{
        for(let i=0;i<pantallas.length;i++){
            if(i==1){//SE DEJA A LA VISTA LA SECCION HOME
                pantallas[i].className = "d-flex flex-column align-items-center";
            }
            else{
                pantallas[i].className = "d-none";
            }
        }
        saludo.innerText = `Hola ${nick.value}!, elige un personaje para comenzar.`;
        descripcionChar.innerText =perfilChar[contador];
    }
    
}
//MANEJAR CARRUSEL DE PERSONAJES
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
function elegirPersonaje() {
    switch (contador) {
        case 0:
            Personaje=Tim;
            mostrarConsola();
            break
        case 1:
            Personaje=Mor;
            mostrarConsola();
            break
        case 2:
            Personaje=Phil;
            mostrarConsola();
            break
        default:
            mostrarCharacter();
    };
}
const btnTienda = document.querySelector("#btnStore");
const btnSkills = document.querySelector("#btnSkills");
btnTienda.addEventListener("click",mostrarTienda);
btnSkills.addEventListener("click",mostrarSkills);

function mostrarConsola() {
    for(let i=0;i<pantallas.length;i++){
        if(i==2){//SE DEJA A LA VISTA LA SECCION HOME
            pantallas[i].className = "d-flex flex-column align-items-center";
        }
        else{
            pantallas[i].className = "d-none";
        }
    }
    const tarea2 = document.querySelector("#tarea2");
    bodyImg.src=bodyChar[contador];
    if (Personaje.skillPuntos == 0 && Personaje.inventario.length >= 3) {
        tarea2.innerText="¡YA PUEDES COMENZAR TU AVENTURA!";
    }
    else {
        tarea2.innerText=`Tareas: comprar ${comprarObj} OBJETOS y agregar ${Personaje.skillPuntos} SKILLS para continuar`;
    }
    const obj = document.querySelector("#cantObj");
    if(Personaje.inventario.length==null){
        obj.innerText = 0;
    }
    else{
        obj.innerText = Personaje.inventario.length;
    }
    const puntoskill = document.querySelector("#cantSkills");
    puntoskill.innerText = Personaje.skillPuntos;
    const money = document.querySelector("#cantDinero");
    money.innerText = Personaje.dinero;
    const tabla = document.querySelector("tbody");
    tabla.innerHTML = "<tr><td class='text-center'>Altura</td><td class='text-center'>"+Personaje.altura+"</td></tr><tr><td class='text-center'>Peso</td><td class='text-center'>"+Personaje.peso+"</td></tr><tr><td class='text-center'>Vida</td><td class='text-center'>"+Personaje.vida+"</td></tr><tr><td class='text-center'>XP</td><td class='text-center'>"+Personaje.experiencia+"</td></tr><tr><td class='text-center'>Raza</td><td class='text-center'>"+Personaje.raza+"</td></tr><tr><td class='text-center'>Edad</td><td class='text-center'>"+Personaje.edad+"</td></tr>";
}

function mostrarTienda(){
    for(let i=0;i<pantallas.length;i++){
        if(i==4){//SE DEJA A LA VISTA LA SECCION TIENDA
            pantallas[i].className = "d-flex flex-column align-items-center";
        }
        else{
            pantallas[i].className = "d-none";
        }
    }
    
}
function mostrarSkills(){
    for(let i=0;i<pantallas.length;i++){
        if(i==3){//SE DEJA A LA VISTA LA SECCION SKILLS
            pantallas[i].className = "d-flex flex-column align-items-center";
        }
        else{
            pantallas[i].className = "d-none";
        }
    }
}