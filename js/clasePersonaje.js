class Character{
    constructor(nombre,edad,altura,peso,dinero,raza,genero,){
        this.nombre = nombre;
        this.edad = edad;
        this.altura = altura;
        this.peso = peso;
        this.dinero = dinero;
        this.raza = raza;
        this.genero = genero;

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

const char1 = new Character("Timothy",28,1.79,92,1000,"Human","M");
const char2 = new Character("Norman",28,1.79,92,1000,"Human","M");
const char3 = new Character("Phillips",28,1.79,92,1000,"Human","M");

char1.saludar();
char1.darDiagnostico();
char1.revisarBolsillos();
prompt("mostrame esta");