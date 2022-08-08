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

const Armor1 = new Equipamiento("uno", "ESCUDO", 300, 10, 20, 100, "armor","img/escudo.svg");
const Armor2 = new Equipamiento("dos", "YELMO", 200, 15, 20, 70, "armor","img/yelmo.svg");
const Armor3 = new Equipamiento("tres", "PECHERA", 250, 5, 25, 80, "armor","img/pechera.svg");
const Weapon1 = new Equipamiento("cuatro", "ESPADA", 400, 90, 15, 50, "weapon","img/espada.svg");
const Weapon2 = new Equipamiento("cinco", "ARCO", 350, 45, 10, 30, "weapon","img/arco.svg");
const Weapon3 = new Equipamiento("seis", "BALLESTA", 300, 70, 20, 10, "weapon","img/ballesta.svg");

export const objetos = [Armor1, Armor2, Armor3, Weapon1, Weapon2, Weapon3];