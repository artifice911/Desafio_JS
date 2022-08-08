//CREAR PERSONAJES
class Character {
    constructor(id, nombre, edad, altura, peso, dinero, raza, genero, inventario,carrito,cuenta,faceImg,bodyImg) {
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
        this.body = bodyImg;

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
export let generico = new Character(1, "Nombre", 28, 1.79, 92, 1000, "Human", "M", [],[],1000,"img/faceTim.svg");
export const Tim = new Character(1, "Timothy", 28, 1.79, 92, 1000, "Human", "M",[],[],1000,"img/faceTim.svg","img/bodyTim.svg");
export const Mor = new Character(2, "Morgan", 27, 1.70, 80, 1000, "Human", "F",[],[],1000,"img/faceMor.svg","img/bodyMor.svg");
export const Phil = new Character(3, "Phillips", 32, 1.85, 92, 1000, "Human", "M",[],[],1000,"img/facePhil.svg","img/bodyPhil.svg");
