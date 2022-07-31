//CREAR PERSONAJES
class Character {
    constructor(id, nombre, edad, altura, peso, dinero, raza, genero, inventario,carrito,cuenta,faceImg) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
        this.dinero = dinero;
        this.raza = raza;
        this.genero = genero;
        this.inventario = inventario;
        this.carrito = carrito;
        this.cuenta = cuenta;
        this.faceImg = faceImg;

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
let Personaje = new Character(1, "Nombre", 28, 1.79, 92, 1000, "Human", "M", [],[],1000,"Desafio_JS/img/faceTim.svg");
const Tim = new Character(1, "Timothy", 28, 1.79, 92, 1000, "Human", "M",[],[],1000,"Desafio_JS/img/faceTim.svg");
const Mor = new Character(2, "Morgan", 27, 1.70, 80, 1000, "Human", "F",[],[],1000,"Desafio_JS/img/faceMor.svg");
const Phil = new Character(3, "Phillips", 32, 1.85, 92, 1000, "Human", "M",[],[],1000,"Desafio_JS/img/facePhil.svg");

const nombresChar =["Timothy","Morgan","Phillips"];
const perfilChar = ["Lider de exploracion y mercader experto.Posee aumentos electronicos en el cuerpo que le dan habilidades sobrehumanas.","La cazadora mas fuerte de las tierras altas. Lidera la tribu de piratas del asfalto y se encuentra en busca de su familia.","Especialista en trampas y francotirador, ex militar que ahora trabaja como mercenario para los diferentes clanes del yermo."];
//CREAR OBJETOS DE TIENDA.
class Equipamiento {
    constructor(id, nombre, valor, damage, peso, resistencia, categoria,url) {
        this.id = id,
            this.nombre = nombre,
            this.valor = valor,
            this.damage = damage,
            this.peso = peso,
            this.resistencia = resistencia,
            this.categoria = categoria,
            this.img = url
    }
}

const Armor1 = new Equipamiento("uno", "ESCUDO", 300, 10, 20, 100, "armor","Desafio_JS/img/escudo.svg");
const Armor2 = new Equipamiento("dos", "YELMO", 200, 15, 20, 70, "armor","Desafio_JS/img/yelmo.svg");
const Armor3 = new Equipamiento("tres", "PECHERA", 250, 5, 25, 80, "armor","Desafio_JS/img/pechera.svg");
const Weapon1 = new Equipamiento("cuatro", "ESPADA", 400, 90, 15, 50, "weapon","Desafio_JS/img/espada.svg");
const Weapon2 = new Equipamiento("cinco", "ARCO", 350, 45, 10, 30, "weapon","Desafio_JS/img/arco.svg");
const Weapon3 = new Equipamiento("seis", "BALLESTA", 300, 70, 20, 10, "weapon","Desafio_JS/img/ballesta.svg");

const objetos = [Armor1, Armor2, Armor3, Weapon1, Weapon2, Weapon3];
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
const pantallas = [sHome,sCharacter,sConsola,sStore,sGame];

// BOTONES NEXT Y PREVIOUS EN CHARACTERS CAROUSEL
let contador=0;
const imagenesChar = ["Desafio_JS/img/timothy.svg","Desafio_JS/img/morgan.svg","Desafio_JS/img/phillips.svg"];
const bodyChar = ["Desafio_JS/img/bodyTim.svg","Desafio_JS/img/bodyMor.svg","Desafio_JS/img/bodyPhil.svg"];
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
botonMain.addEventListener("click",validar);
const descripcionChar = document.querySelector("#descripcionChar");
const saludo = document.querySelector("#saludo");
const btnElegir = document.querySelector("#elegir");
btnElegir.addEventListener("click",elegirPersonaje);//EVENTO QUE MUESTRA LA CONSOLA GENERAL

//--SEGUNDA SECCION-- ELECCION DE PERSONAJE//////////

function validar(){
    nick = document.querySelector("#nickName");
    if (nick.value==""){
        alert("escribe tu nombre para comenzar");
    }
    else{
        for(let i=0;i<localStorage.length;i++){
            if(nick.value==localStorage.key(i)){
                Personaje= JSON.parse(localStorage.getItem(nick.value));
                mostrarConsola();
                return;
            }
        }
        mostrarCharacter();
    }
}

function mostrarCharacter(){
    for(let i=0;i<pantallas.length;i++){
        if(i==1){//SE DEJA A LA VISTA LA SECCION MOSTRAR PERSONAJE
            pantallas[i].className = "d-flex flex-column align-items-center";
        }
        else{
            pantallas[i].className = "d-none";
        }
    }
    saludo.innerText = `Hola ${nick.value}!, elige un personaje para comenzar.`;
    descripcionChar.innerText =perfilChar[contador];
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
            const enJSONTim = JSON.stringify(Personaje);
            localStorage.setItem(nick.value,enJSONTim);
            mostrarConsola();
            break
        case 1:
            Personaje=Mor;
            const enJSONMor = JSON.stringify(Personaje);
            localStorage.setItem(nick.value,enJSONMor);
            mostrarConsola();
            break
        case 2:
            Personaje=Phil;
            const enJSONPhil = JSON.stringify(Personaje);
            localStorage.setItem(nick.value,enJSONPhil);
            mostrarConsola();
            break
        default:
            mostrarCharacter();
    };
}
const btnTienda = document.querySelector("#btnStore");
btnTienda.addEventListener("click",mostrarTienda);
const btnCanceling = document.querySelector("#btnCancel");
btnCanceling.addEventListener("click",cancelarCompra);

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
    const nombrePersonaje = document.querySelector("#nombrePer");
    nombrePersonaje.innerText=Personaje.nombre;
    if (Personaje.skillPuntos == 0 && Personaje.inventario.length >= 3) {
        tarea2.innerText="¡YA PUEDES COMENZAR TU AVENTURA!";
        tarea2.className="d-flex justify-content-center text-center mt-3 bg-white";
        const empezarJuego = document.querySelector("#terminar");
        empezarJuego.disabled=false;
        empezarJuego.className="btn btn-success w-100"
    }
    else {
        tarea2.innerText=`Tareas: comprar ${comprarObj} OBJETOS y agregar ${Personaje.skillPuntos} SKILLS para terminar edición`;
        tarea2.className="d-flex justify-content-center text-center mt-3";
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
    money.innerHTML = Personaje.cuenta;
    const tabla = document.querySelector("tbody");
    tabla.innerHTML = "<tr><td class='text-center bg-light'>Altura</td><td class='text-center bg-light'>"+Personaje.altura+"</td><td class='text-center'>Fuerza</td><td class='text-center'>"+Personaje.fuerza+"<td class='text-center'><button class='btnplus' id='bt1'>+</button></td></tr><tr><td class='text-center bg-light'>Peso</td><td class='text-center bg-light'>"+Personaje.peso+"</td><td class='text-center'>Percepcion</td><td class='text-center'>"+Personaje.percepcion+"</td><td class='text-center'><button class='btnplus' id='bt2'>+</button></td></tr><tr><td class='text-center bg-light'>Vida</td><td class='text-center bg-light'>"+Personaje.vida+"</td><td class='text-center'>Resistencia</td><td class='text-center'>"+Personaje.resistencia+"</td><td class='text-center'><button class='btnplus' id='bt3'>+</button></td></tr><tr><td class='text-center bg-light'>XP</td><td class='text-center bg-light'>"+Personaje.experiencia+"</td><td class='text-center'>Carisma</td><td class='text-center'>"+Personaje.carisma+"</td><td class='text-center'><button class='btnplus' id='bt4'>+</button></td></tr><tr><td class='text-center bg-light'>Daño</td><td class='text-center bg-light'>"+Personaje.damage+"</td><td class='text-center'>Inteligencia</td><td class='text-center'>"+Personaje.inteligencia+"</td><td class='text-center'><button class='btnplus' id='bt5'>+</button></td></tr><tr><td class='text-center bg-light'>Edad</td><td class='text-center bg-light'>"+Personaje.edad+"</td><td class='text-center'>Agilidad</td><td class='text-center'>"+Personaje.agilidad+"</td><td class='text-center'><button class='btnplus' id='bt6'>+</button></td></tr>";
    const plusFuerza = document.querySelector("#bt1");
    const plusPercep = document.querySelector("#bt2");
    const plusResist = document.querySelector("#bt3");
    const plusCaris = document.querySelector("#bt4");
    const plusInte = document.querySelector("#bt5");
    const plusAgil = document.querySelector("#bt6");

    plusFuerza.addEventListener("click",agregarSkill1);
    plusPercep.addEventListener("click",agregarSkill2);
    plusResist.addEventListener("click",agregarSkill3);
    plusCaris.addEventListener("click",agregarSkill4);
    plusInte.addEventListener("click",agregarSkill5);
    plusAgil.addEventListener("click",agregarSkill6);

    const consolInven = document.querySelector("#inventarioFull");
    consolInven.innerHTML="";
    for(element of Personaje.inventario){
        const agregado = document.createElement("div");
        agregado.className="divImg";
        agregado.innerHTML="<img src='"+element.img+"' class='img-thumbnail imgEquip'>";
        consolInven.append(agregado);
    }

    if(Personaje.skillPuntos==0){
        const botones = document.querySelectorAll(".btnplus");
        for(let i=0; i<botones.length;i++){
            botones[i].disabled=true;
            botones[i].style.backgroundColor="grey";
        }
    }
}
const btnVolver = document.querySelector("#volver");
btnVolver.addEventListener("click",mostrarConsola);
const btnComprar = document.querySelector("#comprar");

const equipo = document.querySelector("#equip");
const volver = document.querySelector("#volver");
volver.addEventListener("click",validarCarrito);
const compraOk = document.querySelector("#comprar");
compraOk.addEventListener("click",equipaCompra);
const moneyui = document.querySelector("#moneyui");
const reset = document.querySelector("#btnReset");
reset.addEventListener("click",resetSkills);
const btnTerminar = document.querySelector("#terminar")
btnTerminar.addEventListener("click",terminarEdicion);
const mainInventario = document.querySelector("#mainMenu");
mainInventario.addEventListener("click",mostrarConsola);
const faceChar = document.querySelector("#facePersona");


function resetSkills(){
    Personaje.fuerza = 5;
    Personaje.percepcion = 5;
    Personaje.resistencia = 5;
    Personaje.carisma = 5;
    Personaje.inteligencia = 5;
    Personaje.agilidad = 5;
    Personaje.vida=100;
    Personaje.damage=10;
    Personaje.skillPuntos=5;
    const enJSON = JSON.stringify(Personaje);
    localStorage.setItem(nick.value,enJSON);
    const botones = document.querySelectorAll(".btnplus");
    console.log(botones);
    for(let i=0; i<botones.length;i++){
        botones[i].disabled=false;
        botones[i].style.backgroundColor="chartreuse";
    }
    const empezarJuego = document.querySelector("#terminar");
        empezarJuego.disabled=true;
        empezarJuego.className="btn btn-light w-100";
        
    mostrarConsola();
}

function agregarSkill1(){
    if (Personaje.skillPuntos > 0) {
        Personaje.damage += 10;
        Personaje.fuerza += 1;
        Personaje.skillPuntos--;
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        mostrarConsola();
    }
    else{
        alert("Ya no tienes puntos de Skill");
    }
}
function agregarSkill2(){
    if (Personaje.skillPuntos > 0) {
        Personaje.percepcion += 1;
        Personaje.skillPuntos--;
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        mostrarConsola();
    }
    else{
        alert("Ya no tienes puntos de Skill");
    }
}
function agregarSkill3(){
    if (Personaje.skillPuntos > 0) {
        Personaje.vida += 20;
        Personaje.resistencia += 1;
        Personaje.skillPuntos--;
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        mostrarConsola();
    }
    else{
        alert("Ya no tienes puntos de Skill");
    }
}
function agregarSkill4(){
    if (Personaje.skillPuntos > 0) {
        Personaje.carisma += 1;
        Personaje.skillPuntos--;
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        mostrarConsola();
    }
    else{
        alert("Ya no tienes puntos de Skill");
    }
}
function agregarSkill5(){
    if (Personaje.skillPuntos > 0) {
        Personaje.inteligencia += 1;
        Personaje.skillPuntos--;
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        mostrarConsola();
    }
    else{
        alert("Ya no tienes puntos de Skill");
    }
}
function agregarSkill6(){
    if (Personaje.skillPuntos > 0) {
        Personaje.agilidad += 1;
        Personaje.skillPuntos--;
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        mostrarConsola();
    }
    else{
        alert("Ya no tienes puntos de Skill");
    }
}


function mostrarTienda(){
    
    for(let i=0;i<pantallas.length;i++){
        if(i==3){//SE DEJA A LA VISTA LA SECCION TIENDA
            pantallas[i].className = "d-flex flex-column align-items-center";
        }
        else{
            pantallas[i].className = "d-none";
        }
    }
    
    moneyui.innerText="$: "+Personaje.cuenta;
    const baseTienda = document.querySelector("#baseTienda");
    baseTienda.innerHTML ="";
    for(elemento of objetos){
        const tarjeta = document.createElement("div");
        tarjeta.innerHTML = "<div class='card d-flex flex-column align-items-center m-1'><img src="+elemento.img+" class='card-img-top imgStore'><div class='card-body d-flex flex-column align-items-center'><h5 class='card-title'>"+elemento.nombre+"</h5><p class='card-text'>$ "+elemento.valor+"</p><a class='btn btn-success'id="+elemento.id+">Agregar</a></div></div>";
        baseTienda.append(tarjeta);
    }
    const escudo = document.querySelector("#uno");
    escudo.addEventListener("click",agregarUno);
    const yelmo = document.querySelector("#dos");
    yelmo.addEventListener("click",agregarDos);
    const pechera = document.querySelector("#tres");
    pechera.addEventListener("click",agregarTres);
    const espada = document.querySelector("#cuatro");
    espada.addEventListener("click",agregarCuatro);
    const arco = document.querySelector("#cinco");
    arco.addEventListener("click",agregarCinco);
    const ballesta = document.querySelector("#seis");
    ballesta.addEventListener("click",agregarSeis);

    equipo.innerHTML="";
    for(element of Personaje.carrito){
        const agregado = document.createElement("div");
        agregado.className="divImg";
        agregado.innerHTML="<img src='"+element.img+"' class='img-thumbnail imgEquip'>";
        equipo.append(agregado);
    }
}


function agregarUno(){
    if (Personaje.cuenta >= Armor1.valor) {//CHEQUEAR QUE HAYA DINERO SUFICIENTE
        Personaje.cuenta -= Armor1.valor;
        Personaje.carrito.push(Armor1);//AGREGAR OBJETO AL INVENTARIO
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        const agregado = document.createElement("div");
        agregado.className="divImg";
        agregado.innerHTML="<img src='./img/escudo.svg' class='img-thumbnail imgEquip'>";
        equipo.append(agregado);
        moneyui.innerText="$: "+Personaje.cuenta;
    }
    else {
        alert("No tienes suficiente dinero.");
        mostrarTienda();
    }
}
function agregarDos(){
    if (Personaje.cuenta >= Armor2.valor) {//CHEQUEAR QUE HAYA DINERO SUFICIENTE
        Personaje.cuenta -= Armor2.valor;
        Personaje.carrito.push(Armor2);//AGREGAR OBJETO AL INVENTARIO
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        const agregado = document.createElement("div");
        agregado.className="divImg";
        agregado.innerHTML="<img src='./img/yelmo.svg' class='img-thumbnail imgEquip'>";
        equipo.append(agregado);
        moneyui.innerText="$: "+Personaje.cuenta;
    }
    else {
        alert("No tienes suficiente dinero.");
        mostrarTienda();
    }
}
function agregarTres(){
    if (Personaje.cuenta >= Armor3.valor) {//CHEQUEAR QUE HAYA DINERO SUFICIENTE
        Personaje.cuenta -= Armor3.valor;
        Personaje.carrito.push(Armor3);//AGREGAR OBJETO AL INVENTARIO
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        const agregado = document.createElement("div");
        agregado.className="divImg";
        agregado.innerHTML="<img src='./img/pechera.svg' class='img-thumbnail imgEquip'>";
        equipo.append(agregado);
        moneyui.innerText="$: "+Personaje.cuenta;
    }
    else {
        alert("No tienes suficiente dinero.");
        mostrarTienda();
    }
}
function agregarCuatro(){
    if (Personaje.cuenta >= Weapon1.valor) {//CHEQUEAR QUE HAYA DINERO SUFICIENTE
        Personaje.cuenta -= Weapon1.valor;
        Personaje.carrito.push(Weapon1);//AGREGAR OBJETO AL INVENTARIO
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        const agregado = document.createElement("div");
        agregado.className="divImg";
        agregado.innerHTML="<img src='./img/espada.svg' class='img-thumbnail imgEquip'>";
        equipo.append(agregado);
        moneyui.innerText="$: "+Personaje.cuenta;
    }
    else {
        alert("No tienes suficiente dinero.");
        mostrarTienda();
    }
}
function agregarCinco(){
    if (Personaje.cuenta >= Weapon2.valor) {//CHEQUEAR QUE HAYA DINERO SUFICIENTE
        Personaje.cuenta -= Weapon2.valor;
        Personaje.carrito.push(Weapon2);//AGREGAR OBJETO AL INVENTARIO
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        const agregado = document.createElement("div");
        agregado.className="divImg";
        agregado.innerHTML="<img src='./img/arco.svg' class='img-thumbnail imgEquip'>";
        equipo.append(agregado);
        moneyui.innerText="$: "+Personaje.cuenta;
    }
    else {
        alert("No tienes suficiente dinero.");
        mostrarTienda();
    }
}
function agregarSeis(){
    if (Personaje.cuenta >= Armor3.valor) {//CHEQUEAR QUE HAYA DINERO SUFICIENTE
        Personaje.cuenta -= Armor3.valor;
        Personaje.carrito.push(Armor3);//AGREGAR OBJETO AL INVENTARIO
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        const agregado = document.createElement("div");
        agregado.className="divImg";
        agregado.innerHTML="<img src='./img/ballesta.svg' class='img-thumbnail imgEquip'>";
        equipo.append(agregado);
        moneyui.innerText="$: "+Personaje.cuenta;
    }
    else {
        alert("No tienes suficiente dinero.");
        mostrarTienda();
    }
}

function validarCarrito(){
    if(Personaje.carrito.length==0){
        mostrarConsola();
    }
    else{
        let resultado = confirm("Tienes objetos en tu carrito, ¿deseas confirmar la compra?");
        if (resultado == true){
            efectuarCompra();
        }
        else{
            cancelarCompra();
        }
    }
}

function efectuarCompra(){
    Personaje.inventario=Personaje.inventario.concat(Personaje.carrito);
    Personaje.carrito=[];
    Personaje.Dinero=Personaje.cuenta;
    const enJSON = JSON.stringify(Personaje);
    localStorage.setItem(nick.value,enJSON);
    equipo.innerHTML="";
mostrarConsola();
}
function equipaCompra(){
    Personaje.inventario=Personaje.inventario.concat(Personaje.carrito);
    Personaje.carrito=[];
    Personaje.Dinero=Personaje.cuenta;
    const enJSON = JSON.stringify(Personaje);
    localStorage.setItem(nick.value,enJSON);
    equipo.innerHTML="";
}
function cancelarCompra(){
    for(element of Personaje.carrito){
        Personaje.cuenta+=element.valor;
    }
    moneyui.innerText="$: "+Personaje.cuenta;
    equipo.innerHTML="";
    Personaje.carrito=[];
}
function terminarEdicion(){
    for(let i=0;i<pantallas.length;i++){
        if(i==4){//SE DEJA A LA VISTA LA SECCION MOSTRAR PERSONAJE
            pantallas[i].className = "d-flex flex-column align-items-center";
        }
        else{
            pantallas[i].className = "d-none";
        }
    }
    faceChar.src=Personaje.faceImg;
    alert("A partir de este momento comienza el juego, mucha suerte!!");
}

