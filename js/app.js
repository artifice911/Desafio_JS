import { generico } from "./personajes.js";
import { Tim } from "./personajes.js";
import { Mor } from "./personajes.js";
import { Phil } from "./personajes.js";
let Personaje=generico;
let tiempo=10;
const nombresChar =[Tim.nombre,Mor.nombre,Phil.nombre];
const perfilChar = ["Lider de exploracion y mercader experto.Posee aumentos electronicos en el cuerpo que le dan habilidades sobrehumanas.","La cazadora mas fuerte de las tierras altas. Lidera la tribu de piratas del asfalto y se encuentra en busca de su familia.","Especialista en trampas y francotirador, ex militar que ahora trabaja como mercenario para los diferentes clanes del yermo."];

import { objetos } from "./objetos.js";

//VARIABLES PARA CARGAR CONSOLA.
let comprarObj = 3;
let nick;

//DOM SECCIONES DE LA PAGINA
const sHome = document.querySelector("#home");
const sCharacter = document.querySelector("#chooseChar");
const sSkills = document.querySelector("#skills");
const sStore = document.querySelector("#store");
const sConsola = document.querySelector("#consola");
const sGame = document.querySelector("#game");
const pantallas = [sHome,sCharacter,sConsola,sStore,sGame];

// BOTONES NEXT Y PREVIOUS EN CHARACTERS CAROUSEL
let contador=0;
const imagenesChar = ["img/timothy.svg","img/morgan.svg","img/phillips.svg"]; //array de imagenes de personajes
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
        swal("¿Cómo te llamas?", "Escribe tu nombre para comenzar.");
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
//SE DEJA A LA VISTA LA SECCION MOSTRAR PERSONAJE
function mostrarCharacter(){
    for(let i=0;i<pantallas.length;i++){
        if(i==1){
            pantallas[i].className = "d-flex flex-column align-items-center";
        }
        else{
            pantallas[i].className = "d-none";
        }
    }
    saludo.innerText = `Hola ${nick.value}!, elige un personaje para comenzar.`;
    descripcionChar.innerText =perfilChar[contador];
    imgElegida.innerHTML ="<img src="+imagenesChar[contador]+" alt='personaje' class='imgChar'>";
}
//MANEJAR CARRUSEL DE PERSONAJES
function siguiente(){
    if(contador<2){
        contador++;
        imgElegida.innerHTML ="<img src="+imagenesChar[contador]+" alt='personaje' class='imgChar'>";
        nombreChar.innerText = nombresChar[contador];//CAMBIO NOMBRE DE PERSONAJES
        descripcionChar.innerText =perfilChar[contador];//CAMBIAR DESCRIPCION DE PERSONAJE
    }
    else{
        contador=0;
        imgElegida.innerHTML ="<img src="+imagenesChar[contador]+" alt='personaje' class='imgChar'>";
        nombreChar.innerText = nombresChar[contador];//CAMBIO NOMBRE DE PERSONAJES
        descripcionChar.innerText =perfilChar[contador];
    }
}
function anterior(){
    if(contador>0){
        contador--;
        imgElegida.innerHTML ="<img src="+imagenesChar[contador]+" alt='personaje' class='imgChar'>";
        nombreChar.innerText = nombresChar[contador];//CAMBIO NOMBRE DE PERSONAJES
        descripcionChar.innerText =perfilChar[contador];
    }
    else{
        contador=2;
        imgElegida.innerHTML ="<img src="+imagenesChar[contador]+" alt='personaje' class='imgChar'>";
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
const bodyImg = document.querySelector("#bodiesImg");
//CONSOLA PRINCIPAL DEL SIMULADOR
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
    bodyImg.src=Personaje.body;
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
    for(let element of Personaje.inventario){
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
const relojito = document.querySelector("#reloj");
const baseTienda = document.querySelector("#baseTienda");
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
    Toastify({
        text: "Aplica nuevamente los Skillpoints.",
        duration: 2000
    }).showToast();
}
//SE AGREGAN PUNTOS DE SKILLS QUE TAMBIEN MODIFICAN LAS FEATURES DEL PERSONAJE Y SE GUARDA EN LOCAL STORAGE
function agregarSkill1(){
    if (Personaje.skillPuntos > 0) {
        Personaje.damage += 10;
        Personaje.fuerza += 1;
        Personaje.skillPuntos--;
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        mostrarConsola();
        Toastify({
            text: "Aumento de Daño +10",
            duration: 2000
        }).showToast();
    }
    else{
        swal("0 SKILLPOINTS", "Ya no tienes puntos de Skill disponibles.");
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
        swal("0 SKILLPOINTS", "Ya no tienes puntos de Skill disponibles.");
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
        Toastify({
            text: "Aumento de Vida +20",
            duration: 2000
        }).showToast();
    }
    else{
        swal("0 SKILLPOINTS", "Ya no tienes puntos de Skill disponibles.");
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
        swal("0 SKILLPOINTS", "Ya no tienes puntos de Skill disponibles.");
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
        swal("0 SKILLPOINTS", "Ya no tienes puntos de Skill disponibles.");
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
        swal("0 SKILLPOINTS", "Ya no tienes puntos de Skill disponibles.");
    }
}
//SE PIDEN LOS OBJETOS DEL JSON LOCAL PARA LA CARGA DE LA TIENDA
const pedirObjetos = async () => {
    const resp = await
    fetch (`./data.json`, {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
    const datosJson = await resp.json()
    for(let elemento of datosJson){
        const tarjeta = document.createElement("div");
        tarjeta.innerHTML = "<div class='card d-flex flex-column align-items-center m-1'><img src="+elemento.img+" class='card-img-top imgStore'><div class='card-body d-flex flex-column align-items-center'><h5 class='card-title'>"+elemento.nombre+"</h5><p class='card-text'>$ "+elemento.valor+"</p><a class='btn btn-success'id="+elemento.id+">Agregar</a></div></div>";
        baseTienda.append(tarjeta);
    }
    const escudo = document.querySelector("#uno");
    const yelmo = document.querySelector("#dos");
    const pechera = document.querySelector("#tres");
    const espada = document.querySelector("#cuatro");
    const arco = document.querySelector("#cinco");
    const ballesta = document.querySelector("#seis");
    escudo.addEventListener("click",agregarUno);
    yelmo.addEventListener("click",agregarDos);
    pechera.addEventListener("click",agregarTres);
    espada.addEventListener("click",agregarCuatro);
    arco.addEventListener("click",agregarCinco);
    ballesta.addEventListener("click",agregarSeis);
}
//TIENDA PARA COMPRAR EQUIPAMIENTO
function mostrarTienda(){
    
    for(let i=0;i<pantallas.length;i++){
        if(i==3){//SE DEJA A LA VISTA LA SECCION TIENDA
            pantallas[i].className = "d-flex flex-column align-items-center";
        }
        else{
            pantallas[i].className = "d-none";
        }
    }
    tiempo=10;
    moneyui.innerText="$: "+Personaje.cuenta;
    baseTienda.innerHTML ="";
    
    pedirObjetos();

    equipo.innerHTML="";
    for(let element of Personaje.carrito){
        const agregado = document.createElement("div");
        agregado.className="divImg";
        agregado.innerHTML="<img src='"+element.img+"' class='img-thumbnail imgEquip'>";
        equipo.append(agregado);
    }
}

function agregarUno(){
    if (Personaje.cuenta >= objetos[0].valor) {//CHEQUEAR QUE HAYA DINERO SUFICIENTE
        Personaje.cuenta -= objetos[0].valor;
        Personaje.carrito.push(objetos[0]);//AGREGAR OBJETO AL INVENTARIO
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        const agregado = document.createElement("div");
        agregado.className="divImg";
        agregado.innerHTML="<img src='./img/escudo.svg' class='img-thumbnail imgEquip'>";
        equipo.append(agregado);
        moneyui.innerText="$: "+Personaje.cuenta;
    }
    else {
        swal("Dinero Insuficiente", "Ya no tienes suficiente dinero.");
        mostrarTienda();
    }
}
function agregarDos(){
    if (Personaje.cuenta >= objetos[1].valor) {//CHEQUEAR QUE HAYA DINERO SUFICIENTE
        Personaje.cuenta -= objetos[1].valor;
        Personaje.carrito.push(objetos[1]);//AGREGAR OBJETO AL INVENTARIO
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        const agregado = document.createElement("div");
        agregado.className="divImg";
        agregado.innerHTML="<img src='./img/yelmo.svg' class='img-thumbnail imgEquip'>";
        equipo.append(agregado);
        moneyui.innerText="$: "+Personaje.cuenta;
    }
    else {
        swal("Dinero Insuficiente", "Ya no tienes suficiente dinero.");
        mostrarTienda();
    }
}
function agregarTres(){
    if (Personaje.cuenta >= objetos[2].valor) {//CHEQUEAR QUE HAYA DINERO SUFICIENTE
        Personaje.cuenta -= objetos[2].valor;
        Personaje.carrito.push(objetos[2]);//AGREGAR OBJETO AL INVENTARIO
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        const agregado = document.createElement("div");
        agregado.className="divImg";
        agregado.innerHTML="<img src='./img/pechera.svg' class='img-thumbnail imgEquip'>";
        equipo.append(agregado);
        moneyui.innerText="$: "+Personaje.cuenta;
    }
    else {
        swal("Dinero Insuficiente", "Ya no tienes suficiente dinero.");
        mostrarTienda();
    }
}
function agregarCuatro(){
    if (Personaje.cuenta >= objetos[3].valor) {//CHEQUEAR QUE HAYA DINERO SUFICIENTE
        Personaje.cuenta -= objetos[3].valor;
        Personaje.carrito.push(objetos[3]);//AGREGAR OBJETO AL INVENTARIO
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        const agregado = document.createElement("div");
        agregado.className="divImg";
        agregado.innerHTML="<img src='./img/espada.svg' class='img-thumbnail imgEquip'>";
        equipo.append(agregado);
        moneyui.innerText="$: "+Personaje.cuenta;
    }
    else {
        swal("Dinero Insuficiente", "Ya no tienes suficiente dinero.");
        mostrarTienda();
    }
}
function agregarCinco(){
    if (Personaje.cuenta >= objetos[4].valor) {//CHEQUEAR QUE HAYA DINERO SUFICIENTE
        Personaje.cuenta -= objetos[4].valor;
        Personaje.carrito.push(objetos[4]);//AGREGAR OBJETO AL INVENTARIO
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        const agregado = document.createElement("div");
        agregado.className="divImg";
        agregado.innerHTML="<img src='./img/arco.svg' class='img-thumbnail imgEquip'>";
        equipo.append(agregado);
        moneyui.innerText="$: "+Personaje.cuenta;
    }
    else {
        swal("Dinero Insuficiente", "Ya no tienes suficiente dinero.");
        mostrarTienda();
    }
}
function agregarSeis(){
    if (Personaje.cuenta >= objetos[5].valor) {//CHEQUEAR QUE HAYA DINERO SUFICIENTE
        Personaje.cuenta -= objetos[5].valor;
        Personaje.carrito.push(objetos[5]);//AGREGAR OBJETO AL INVENTARIO
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        const agregado = document.createElement("div");
        agregado.className="divImg";
        agregado.innerHTML="<img src='./img/ballesta.svg' class='img-thumbnail imgEquip'>";
        equipo.append(agregado);
        moneyui.innerText="$: "+Personaje.cuenta;
    }
    else {
        swal("Dinero Insuficiente", "Ya no tienes suficiente dinero.");
        mostrarTienda();
    }
}

function validarCarrito(){
    if(Personaje.carrito.length==0){
        mostrarConsola();
    }
    else{
        swal({
            title: "Tu carrito esta lleno.",
            text: "Tienes objetos en tu carrito, ¿deseas confirmar la compra?",
            icon: "warning",
            buttons: true,
            dangerMode: false,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Los objetos fueron comprados y agregados a tu equipamiento!", {
                icon: "success",
              });
              efectuarCompra();
            } else {
              swal("Los objetos fueron borrados de tu carrito.");
              cancelarCompra();
            }
        });
    }
}
//SE REALIZA LA COMPRA Y SE GUARDA EL PROGRESO EN EL LOCAL STORAGE
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
    console.log(Personaje.carrito);
    if(Personaje.carrito.length!=0){
        Personaje.inventario=Personaje.inventario.concat(Personaje.carrito);
        Personaje.carrito=[];
        Personaje.Dinero=Personaje.cuenta;
        const enJSON = JSON.stringify(Personaje);
        localStorage.setItem(nick.value,enJSON);
        equipo.innerHTML="";
        Toastify({
            text: "Compra Finalizada. Se agregó al inventario!",
            duration: 2000
        }).showToast();
    }
    else{
        Toastify({
            text: "Debes agregar algo para poder comprar.",
            duration: 2000
        }).showToast();
    }
    
}
function cancelarCompra(){
    for(let element of Personaje.carrito){
        Personaje.cuenta+=element.valor;
    }
    moneyui.innerText="$: "+Personaje.cuenta;
    equipo.innerHTML="";
    Personaje.carrito=[];
}
//SECCION DEL JUEGO PARA CREAR A FUTURO
function terminarEdicion(){
    for(let i=0;i<pantallas.length;i++){
        if(i==4){
            pantallas[i].className = "d-flex flex-column align-items-center";
        }
        else{
            pantallas[i].className = "d-none";
        }
    }
    faceChar.src=Personaje.faceImg;
    swal("Buen trabajo!", "Edición terminada. A partir de este momento comienza el juego!", "success");
    timer();
}
//TIEMPO DE ESPERA PARA COMENZAR JUEGO Y CARGA DE NIVEL.
function timer(){
    if(tiempo>0){
        relojito.innerHTML= tiempo--;
        setTimeout(timer,1000);
    }
    else{
        relojito.innerHTML= tiempo;
        setTimeout(cargaCompleta,1000);
    }
}
function cargaCompleta(){
    relojito.innerHTML="La carga se ha realizado con éxito, puedes comenzar";
}
