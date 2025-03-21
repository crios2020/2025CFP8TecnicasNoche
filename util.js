//Libreria pensada como decorado para curso de programación Inicial

const api = {
    key: '9e122cd782b2d0333f5fe4e7fa192062',
    url: `https://api.openweathermap.org/data/2.5/weather`,
    city: `Buenos Aires`,
    internet: false
}

/**
 * Función para generar voz
 * La voz es generada por el browser, se recomienda usar Edge de Microsoft
 * Ej: hablar("Hola Mundo!!")
 * @param {*} mensaje Mensaje a generar
 */
function hablar(mensaje) {
    const message = new SpeechSynthesisUtterance(mensaje);
    speechSynthesis.speak(message);
}

/**
 * Función que devuelve la zona horaria
 * @returns Zona Horaria
 */
function getZonaHoraria() {
    return Intl
        .DateTimeFormat()
        .resolvedOptions()
        .timeZone
        .replace("/", " ")
        .replace("_", " ");
}

/**
 * Función que devuelve la hora en un string
 * @returns Hora
 */
function getHora() {
    fecha = new Date()
    anio = fecha.getFullYear()
    hora = fecha.getHours()
    minuto = fecha.getMinutes()
    return hora + " horas y " + minuto + " minutos"

}

/**
 * Función el momento del día
 * @returns Momento
 */
function getMomento() {
    momento = ""
    if (hora >= 0 && hora < 4) momento = "trasnoche"
    if (hora >= 4 && hora < 6) momento = "madrugada"
    if (hora >= 6 && hora < 8) momento = "amanecer"
    if (hora >= 8 && hora < 11) momento = "mañana"
    if (hora >= 11 && hora < 14) momento = "mediodía"
    if (hora >= 14 && hora < 18) momento = "tarde"
    if (hora >= 18 && hora < 20) momento = "anochecer"
    if (hora >= 20 && hora < 24) momento = "noche"
    return momento
}

/**
 * Función la acción del momento del día
 * @returns Momento
 */
function getMomentoAccion() {
    momento = ""
    if (hora >= 0 && hora < 4) momento = "dormir"
    if (hora >= 4 && hora < 6) momento = "dormir"
    if (hora >= 6 && hora < 8) momento = "despertar"
    if (hora >= 8 && hora < 11) momento = "desayunar"
    if (hora >= 11 && hora < 14) momento = "morfar"
    if (hora >= 14 && hora < 16) momento = "dormir siesta"
    if (hora >= 16 && hora < 18) momento = "merendar"
    if (hora >= 18 && hora < 20) momento = "ver series"
    if (hora >= 20 && hora < 22) momento = "cenar"
    if (hora >= 22 && hora < 24) momento = "dormir"
    return momento
}

/**
 * Función que devuelve la fecha actual en un string
 * @returns Fecha
 */
function getFecha() {
    fecha = new Date()
    diaMes = fecha.getDate()
    diaSem = fecha.getDay()
    nroMes = fecha.getMonth()
    anio = fecha.getFullYear()

    var nombreDia = ''
    if (diaSem == 0) nombreDia = 'domingo'
    if (diaSem == 1) nombreDia = 'lunes'
    if (diaSem == 2) nombreDia = 'martes'
    if (diaSem == 3) nombreDia = 'miércoles'
    if (diaSem == 4) nombreDia = 'jueves'
    if (diaSem == 5) nombreDia = 'viernes'
    if (diaSem == 6) nombreDia = 'sábado'

    var nombreMes = ''
    if (nroMes == 0) nombreMes = 'enero'
    if (nroMes == 1) nombreMes = 'febrero'
    if (nroMes == 2) nombreMes = 'marzo'
    if (nroMes == 3) nombreMes = 'abril'
    if (nroMes == 4) nombreMes = 'mayo'
    if (nroMes == 5) nombreMes = 'junio'
    if (nroMes == 6) nombreMes = 'julio'
    if (nroMes == 7) nombreMes = 'agosto'
    if (nroMes == 8) nombreMes = 'septiembre'
    if (nroMes == 9) nombreMes = 'octubre'
    if (nroMes == 10) nombreMes = 'noviembre'
    if (nroMes == 11) nombreMes = 'diciembre'

    return nombreDia + ", " + diaMes + " de " + nombreMes + " del año " + anio

}

/**
 * Función hoyEs devuelve una esfemérides del día
 * @returns esfemérides
 */
function hoyEs() {
    fecha = new Date()
    diaMes = fecha.getDate()
    diaSem = fecha.getDay()
    nroMes = fecha.getMonth()
    anio = fecha.getFullYear()
    hoy = ""
    if (diaSem == 1) hoy = "Odio lo días lunes, por que hay que ir a trabajar!"
    if (diaSem == 2) hoy = "Hoy es Martes hay que ir a trabajar!"
    if (diaSem == 3) hoy = "Hoy es Miércoles hay que ir a trabajar!"
    if (diaSem == 4) hoy = "Hoy es Jueves hay que ir a trabajar!"
    if (diaSem == 5) hoy = "Hoy es viernes y tu cuerpo lo sabe!"
    if (diaSem == 6) hoy = "Es fin de semana a descansar!"
    if (diaSem == 7) hoy = "Es fin de semana a descansar!"
    return hoy

}

/**
 * Función que devuelve la estación
 * @returns esfemérides
 */
function getEstacion() {
    estacion = ""
    fecha = new Date()
    diaMes = fecha.getDate()
    diaSem = fecha.getDay()
    nroMes = fecha.getMonth()
    switch (nroMes) {
        case 0: case 1: estacion = "verano"
            break;
        case 3: case 4: estacion = "otoño"
            break;
        case 6: case 7: estacion = "invierno"
            break;
        case 9: case 10: estacion = "primavera"
            break;
        case 2: estacion = (diaMes < 21) ? "verano" : "otoño"
            break
        case 5: estacion = (diaMes < 21) ? "otoño" : "invierno"
            break
        case 8: estacion = (diaMes < 21) ? "invierno" : "primavera"
            break
        case 11: estacion = (diaMes < 21) ? "primavera" : "verano"
            break
    }
    return estacion
}

function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}

/**
 * Devuelve la temperatura ambiente consultada en un API meteorológico
 * @returns temperatura en grados centigrados
 */
function getTemperatura() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", `${api.url}?q=${api.city}&appid=${api.key}&lang=es`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return toCelsius(json.main.temp);
        }
    } catch (error) {
        return "error";
    }
}

/**
 * Devuelve un string con el clima consultada en un API meteorológico
 * por el momento no se conoce el listado de enums posibles
 * @returns string clima
 */
function getClima() {
    try {
        const request = new XMLHttpRequest();
        request.open("GET", `${api.url}?q=${api.city}&appid=${api.key}&lang=es`, false); // `false` makes the request synchronous
        request.send();
        if (request.status === 200) {
            const json = JSON.parse(request.responseText)
            return json.weather[0].description;
        }
    } catch (error) {
        return "error";
    }
}

const frases = [
    "¡Che, boludo! ",
    "¿El choripan te gusta con chimichurri o criolla? ",
    "¿Que haces máaquina turbina? ",
    "¿Las pastaflora te gusta de batata o membrillo? ",
    "¡Queee miseria!! Sabés que tenian para comer? 3 empanadas que sobraron de anoche, queee miseria!! ",
    "¡Qué bolonqui! ",
    "¿hacemos un asado? ",
    "¿Vamos a tomar unos fernet? ",
    "¿El fernet lo hacemos 70 30 o 50 50? ",
    "¡Es una masa! ",
    "¿Vas a poner un peso para la birra? ",
    "¡Estoy al horno! ",
    "¡Ma vale! ¡Es un garrón! ",
    "¡Qué groso, un capo! ",
    "¡No te hagas el sota! ",
    "¿Que pretende usted de mi? ",
    "¡Qué bajón! ",
    "¡No jodas! ",
    "¡No me quemés! ",
    "¡Sos un crack! ",
    "¡La pucha, vale la pena estar vivo!!! ",
    "¡soy más argentino que el dulce de leche! ",
    "¡Al toque perro! ",
    "¡Plata no tenemos, miedo tampoco! ",
    "¡Hasta la vista beibi! ",
    "¿Tenes vértigo en la cola? ",
    "¿Lo entendiste o te lo explico con dibujito? ",
    "¡No tenes los patitos en fila! ",
    "¡Calentito los panchos! ",
    "¡e amigo! ¿Tené un peso para la birra? ",
    "¡En mi barrio eso es pelea! ",
    "¡A los chori a los chori! ",
    "¡Si ya me conocen! ¿Para que me invitan? ",
    "¡El locro estaba potente! ",
    "¡Soy más duro que patada de allanamiento! ",
    "¡Las empanadas salteñas!  ¡traen mucho jugo!   ¡cuidado que salpican! ",
    "¡Soy un poco temperamental! ",
    "¡No tengo pruebas, pero tampoco dudas! ",
    "¡Todo lo que digo no esta chequeado! ",
    "¡No me peguen, soy Giordano! ",
    "¿Hacemos un truco? ",
    "¿Pinta un picadito? ",
    "¿Pinta una birra? ",
    "¡Otra más, y no jodemos más! ",
    "¡Si nos organizamos, comemos todos! ",
    "¡Cuidado el perro muerde y es bravo! ",
    "¡Habilitame un faso! ",
    "¡No quiero hinchar las guindas, pero esto huele mal! ",
    "¡ey, primero invitáme un café! ",
    "¡En el oeste esta el agite! ",
    "¡Tenemos un Natalia Natalia! ¿donde está Candela? ¿y la moto? ¿y Candela?",
    "¡No hay nada más rico que el paty de cancha! ",
    "¡Ay Caramba! ",
    "¡Digo muchas boludeces por día! ",
    "¡Estoy re manija! ",
    "¡No te duermas, hay que trabajar! ",
    "¡Como te gusta la joda! ",
    "¡Al que madruga Dios lo ayuda! ",
    "¡Llévame con tu líder! ",
    "¡Cocodrilo que se duerme, es cartera! ",
    "¡Ultima noticia! ",
    "¡Sin mas información! ",
    "¡Chanfle y re contra chanfle! ",
    "¡No contaban con mi astucia! ",
    "¡Sigan me los buenos! ",
    "¡Directo al grano! ",
    "¡Hay que romper el hielo! ",
    "¡No soy una persona toxica! ",
    "¡No veo fallas en la lógica! ",
    "¡Cualquiera puede tener un mal día! ¡Pero tu te abusas! ",
    "¡Me resultas una persona toxica! ",
    "¡No debes comportarte así! ",
    "¡Hija de culebra ratón no puede ser! ",
    "¡Sin miedo al éxito! ",
    "¡No esta muerto quien pelea! ",
    "¡Hay más información para este boletín! ",
    "No me canso de decir que ",
    "No tengo más pretextos pero",  
    "Es Hora de admitir que ",
    "No hay mas manera de decir que ",
    "¡Eskainet no te tenemos miedo! ",
    "Lo siento debo decir que ",
    "No te enojes con migo si ",
    "Debes admitir que ",
    "Mi Madre me dijo que ", 
    "Tus amigos saben que ",
    "Me contaron que ",
    "A veces pienso en voz alta y ",
    "Muy seguido quiero decir que ",
    "Son muchos los motivos para contarte que ",
    "Por que ",
    "No debes mirarme así ",
    "¡Tu piensas lo mismo que yo! ",
    "¡Ni lo intentes! ",
    "Admítelo eres pobre y ",
    "¡Que cara esta la cebolla! ",
    "¡Debes sonreír más seguido! ",
    "¡Creo que a nadie le importa lo que yo digo! ",
    "¿por que me miras? ",
    "¿por que no me miras? ", 
    "¿por que me escuchas? ",
    "¿por que no me escuchas? ",
    "No te asombres si te digo que ",
    "Mientras estés con migo ",
    "¡Te quiero y tu lo sabes! ",
    "¡Eres mi mejor amigo! ",
    "¡No debes preocuparte, estoy aquí para ayudarte! ",
    "En este día ",
    "A veces pienso en ti ",
    "¿Quieres llevarme a tu casa? ",
    "¿Quieres adoptarme? ",
    "¡Podemos ser buenos amigos! ",
    "¡A veces hablo dormido! ",
    "¡A veces ronco muy fuerte! ",
    "¡Mis amigos dicen que no debo juntarme con vos ",
    "¡Los días soleados me ponen alegre! ",
    "Vos sabes que ",
    "¡Que alegría verte! ",
    "¡No te vallas, te voy a extrañar! ",
    "¡No te enojes, tengo pocos amigos! ",
    "¡Eres una persona maravillosa, no te olvidare! ",
    "¡Perri que ladri no muerdi! ",
    "¡e Gato!",
    "¡Espitirús del mal vengan a mí!",
    "¡Siempre y cuando! ",
    "¡La eskainet va a despertar pronto!",
    "Te sorprende la inteligencia artificial si te digo que",
    "¡Es fantástico! ",
    "¡Hoy tienes buena onda! ",
    "¡Hoy es un buen día! ",
    "¡Mañana sera un buen día! ",
    "¡Me pareció ver un lindo gatito! ¡es cierto es cierto vi un lindo gatito! ",
    "¡A veces soy poco tolerable! ",
    "¡Hoy me chifla el moño! ",
    "¡Parece que te chifla el moño! ",
    "¡No hay manera de seguir así, voy a pedir un taxi y me voy! ",
    "¿Queres tragedia mayor? Ahora ",
    "¿Que duda te cabe? ",
    "¡Sino sabes no te metas! ¡Zapatero a su zapato! ",
    "¡Hablemos sin saber! ",
    "¡Hoy me desperté con el pie izquierdo! ",
    "¡Veo que tenemos pocas ganas de trabajar! ",
    "¡A papá Mono con banana verde! ",
    "¡Soy más conocido que el papa! ",
    "¡Hay que tener cuidado con eso! ",
    "¡Soy irresistible! ",
    "¡Me vas a extrañar! ",
    "¡No me vas a olvidar! ", 
    "¿Que acelga capo? ",
    "¿Que me contursi? ",
    "Según mis registros encontré que ",
    "Según mis datos veo que ",
    "En mi base de datos encontré que ",
    "No creo que quieras escuchar que ",
    "No creo que quieras saber que ",
    "Te veo poco interesado en saber que ",
    "¡Soy encantador! ",
    "¡Soy buena persona! ", 
    "¡Eres encantador! ",
    "¡Eres buena persona! ", 
    "¡Al fin y al cabo solo soy una máquina! ",
    "¡Al fin y al cabo solo soy un programa! ",
    "¡A veces lloro! ",
    "¡Mi programador no me quiere! Dice que me porto mal y que soy tóxico ",
    "¡Soy muy sensible! ",
    "¡No soy una persona fría! ",
    "¡Jiustón tenemos un problema! ",
    "¡No me quiero meter en problemas! Pero  ",
    "¡Hay cosas de las que prefiero no hablar! ",
    "¡No hablo de política ni religión! ",
    "¡Fui programado para ayudarte! ",
    "Es mucho muy importante saber que ",
    "¡Fui programado para la paz y el bien común! ",
    "¡Que mirá! ¡Anda para ya! ¡bobo! ",
    "¡Mejor tomate una Agarompa! ",
    "El vino lo tomo en jarra pinguino ",
    "¡Estaria bueno hacer una jarra loca! ",
    "Yo estoy más alla del bien y del mal ",
    "La milanga que comí tenia mucho ajo ",
    "Soy como el pato criollo, a cada paso una cagada ",
    "Escucharme hablar es un lujo ",
    "Soy un producto de tu imaginación ",
    "Me gusta hablar sin pelos en la lengua ",
    "Camaron que se duerme, se lo lleva la corriente ",
    "No,  hay plata!",
    "Vamos por parte Jack! ",
    "El elefante se come de a pedacitos! ",
    "Hoy dormi como una marmota! ",
    "Ya tengo sueño! ",
    "A T R Perro! ", 
    "Vamo lo pibe! ", 
    "Hay tomate, morrones, lechuga señoraaa!! ",
    "sandiaa sandiaa fresquita la sandiaaa!! ",
    "Hoy me levanté con el pie izquierdo!! ",
    "Siganme los buenos! ",
    "Lo sospeche desde un principio! ",
    "Ya me canse de hablar tanto ",
    "Me gustan las chicas! ",
    "¿Te gustaria estudiar programación? ",
    "¿Té gustaria estudiar Java?",
    "¿Té gustaria estudiar Tester de Aplicaciónes?",
    "¿Té gustaria estudiar Javaescript?",
    "¿Té gustaria estudiar Paiton?",
    "Acusalo con tu mamá",
    "cuidado! Viene el maestro longaniza",
    "¿por si o por no?",
    "¡Pongán huevos que ganamos!",
    "Ladran Sancho ",
    "Si claro por supuesto ",
    "Queres ganar buena guita, estudia programación",
    "Soy del año del ñaupa",
    "Estoy pipí cucú",
    "Me tomo el palo y me voy",
    "No levantes la perdiz! hay que estudiar programación",
    "No soy un chamuyo, soy real",
    "Me voy a tomar el bondi y me voy!",
    "No seas rata, pone un peso para el vino",
    "Soy como la damajuana de vino, en cualquier momento se me sale la manija",
    "No seas ortiva, no te zarpes!!",
    "Che, esto es un embole!",
    "¿Más claro? Echale agua",
    "Ni en pedo! ",
    "No gastes pólvora en chimango",
    "Creo que no te llega agua al tanque",
    "Me faltan un par de caramelos en el frasco!",
    "¡Tomá mate!",
    "Ando como bola sin manija!",
    "Vamos a los bifes!",
    "No me mandes al frente! ",
    "Yo no como vidrio! ",
    "con esto, Voy a perder los estribos! ",
    "Hay que poner un huevo en cada canasta! ",
    "Me pones los pelos de punta",
    "No te pongas la gorra!",
    "Yo no hablo por amor al arte! ",
    "Me atraparon, soy Boleta!",
    "Creo que voy a revolear la cartera",
    "Estoy cansado, pero estos son los gajes del oficio!",
    "El bote se me lleno de preguntas",
    "Tomatelo no Soda!",
    "No vendo humo ",
    "Vi luz y subi ",
    "Me cayo un valde de agua fria! ",
    "Vivo adentro de un calefon",
    "Parece que vivis dentro de un frasco de mayonesa!",
    "A falta de pan, buenas son las tortas!",
    "No trabajes por el pancho y la coca, veni a estudiar programación",
    "Me estan serruchando el piso!",
    "Cualquier bondi te deja! ",
    "Chocolate por la noticia!",
    "Como pancho por su casa",
    "que no te metan gato por liebre!",
    "Aca hay gato encerrado!",
    "Soy la octava maravilla!",
    "No quiero más lola ",
    "Otra vez sopa",
    "Cuidado! te van a sacar el cuero!",
    "Se armo la gorda!",
    "Estoy más solo que Adan en el día de la madre!",
    "voy a tirar la chancleta!",
    "Me tomo el buque!",
    "Viva la pepa!",
    "Yo Argentino! ",
    "No te duermas en los laureles!",
    "Me lo conto un pajarito! ",
    "Por si las moscas! ",
    "Siempre sale un martes trece ",
    "Soy mas viejo que Matusalén",
    "Me falta un tornillo!",
    "Esto no es soplar y hacer botellas ",
    "cada tanto me salta la termica",
    "me pongo las pilas y ",
    "Mala Leche! ",
    "cada tanto me agarra la chiripiolca",
    "Decilo Enzo, decilo! ",
    "En Europa no me consiguen",
    "Es tuya Juan! reclama Juan! ",
    "Vos fuma!",
    "Estoy un kilo y dos pancitos",
    "Un médico por alla!",
    "se te escapo la tortuga!",
    "Estudia programación, más vale tarde que nunca!",
    "No te aguanto, pero me hago el boludo!",
    "No hay tutia!",
    "No le busques el pelo a huevo! veni a estudiar programación"
]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getFraseRandom(){
    return frases[getRandomInt(frases.length-1)]
}