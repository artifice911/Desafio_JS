let nombre;
let personaje;
let confirma;
let skills =["Fuerza","Percepcion","Resistencia","Carisma","Inteligencia","Agilidad","Suerte"];
let puntos =[5,3,5,4,5,5,3];
let characters = ["Timothy","Norman","Phillips"];
let p_extras = 6;
let sumarPunto;
pedirNombre();
elegirPersonaje();

function pedirNombre(){
    nombre = prompt("Hola forastero!, acabas de entrar a las regiones del páramo desolado,cómo te llamas?");
    while(nombre == "" || nombre == null){
        insistir();
    }
};

function insistir(){
    nombre = prompt("Creo que faltó tu nombre \n ¿cómo te llamas?");
};

function elegirPersonaje(){
    personaje = parseInt(prompt(nombre+" deberás elegir un personaje para comenzar tu aventura. \n Escribe el numero del personaje que elijas: \n 1 Timothy. \n 2 Norman. \n 3 Phillips."));
    switch (personaje) {
        case 1:
            confirma = confirm("Has elegido a Timothy, sus habilidades principales son: \n  Sigilo. \n  Velocidad. \n ¿Aceptas este personaje?");
            if(confirma==true){
                mostrarSkills(personaje);
            }
            else{
                elegirPersonaje();
            }
            break;
        case 2:
            confirma = confirm("Has elegido a Norman, sus habilidades principales son: \n  Ataque a corta distancia \n  Resistencia física. \n ¿Aceptas este personaje?");
            if(confirma==true){
                mostrarSkills(personaje);
            }
            else{
                elegirPersonaje();
            }
            break;
        case 3:
            confirma = confirm("Has elegido a Phillips, sus habilidades principales son: \n  Ataque a distancia \n  Creacion de trampas. \n ¿Aceptas este personaje?");
            if(confirma==true){
                mostrarSkills(personaje);
            }
            else{
                elegirPersonaje();
            }
            break;
        default:
            alert("No has elegido a ningun personaje!");
            elegirPersonaje();
            break;
    }
};

function mostrarSkills(charElegido){
   sumarPunto= parseInt(prompt("Están son las skills de "+ characters[charElegido-1]+". \n"+showPuntos()+"Tienes "+p_extras+" puntos restantes. \n Elige la skill donde deseas agregar 1 punto extra."));
   if(sumarPunto<0 || sumarPunto>6 || sumarPunto==null){
        alert("no elegiste una skill de forma adecuada");
        mostrarSkills(personaje);
   }
   else{

    p_extras--;
    mostrarSkills(personaje);
   }
};

function showPuntos(){
    let datos="";
    for (let index = 0; index < skills.length; index++) {
        if(sumarPunto==skills[index]){
            datos = datos+index+"   "+skills[index]+" : "+(puntos[index]+1)+" .\n";
            puntos[index]=puntos[index]+1;
        }
        else{
            datos = datos+index+"   "+skills[index]+" : "+puntos[index]+" .\n";
        }
        
    }
    return datos;
};