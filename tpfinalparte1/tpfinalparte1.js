//tp final parte 1
// Braian Bailate - Natalia Canabrava Basso
//aca va el link al video

let estadoActual = 0;

let cancion;

let colorMarron;
let colorNaranja;
let colorNaranjaClaro;

let imagenes = [];
let textos = [];
let pantallas = [];

let botonesComunes;
let botonesExtras;

//preload de imágenes y música
function preload() {
  cancion = loadSound("data/cancion.mp3");

  let nombresImagenes = [
    "fondoinicio.jpg",   //0 inicio
    "fondop1.jpg",       //1 pantalla 1
    "fondop2.jpg",       //2 pantalla 2
    "fondop3.jpg",       //3 pantalla 3
    "fondop4.jpg",       //4 pantalla 4
    "fondop5.jpg",       //5 pantalla 5 (dosOpciones)
    "fondop6b.jpg",      //6 pantalla 6B (Camino Rojo)
    "fondop7b.jpg",      //7 pantalla 7B (final rojo)
    "fondocreditos.jpg", //8 créditos
    "fondop6a.jpg",      //9 pantalla 6A (Camino Amarillo)
    "fondop7a.jpg",      //10 pantalla 7A
    "fondop8.jpg",       //11 pantalla 8 (león)
    "fondop9.jpg",       //12 pantalla 9 (Ciudad Esmeralda)
    "fondop10.jpg",      //13 pantalla 10 (Bruja final)
    "fondop11.jpg",      //14 pantalla 11 (decisión final)
    "fondop12a.jpg",     //15 pantalla 12A (final Oz)
    "fondop12b.jpg",     //16 pantalla 12B (despedida)
    "fondop13.jpg"       //17 pantalla 13 (final verdadero)
  ];

  //ciclo for
  for (let i = 0; i < nombresImagenes.length; i++) {
    imagenes[i] = loadImage("data/" + nombresImagenes[i]);
  }
}

function setup() {
  createCanvas(640, 480);

  //definicion de colores  
  colorMarron = color(102, 51, 0);
  colorNaranja = color(255, 140, 0);
  colorNaranjaClaro = color(255, 190, 80);

  textFont("Georgia");

  // -----------------------------------------------------
  //TEXTOS DE BOTONES
  
  botonesComunes = ["Continuar", "FIN"];
  botonesExtras = [
    "Iniciar", "Créditos",
    "Camino Rojo", "Camino Amarillo",
    "Volver al inicio", "'Adiós...'",
    "Ir juntos", "Ayudar", "Acercarse",
    "¿Cuál es su hogar?", "Quedarse en Oz", "Volver a Kansas"
  ];

  // -----------------------------------------------------
  //TEXTOS
  textos = [
    "EL MAGO DE OZ", //0
    "Dorothy está en su casa de Kansas con su perrito Toto, cuando ve por la ventana un gran tornado acercándose.", //1
    "El tornado levanta la casa por los aires. Todo gira, los muebles flotan, y Dorothy abraza a Toto mientras la casa se eleva hacia las nubes.", //2
    "Cuando la casa aterriza, Dorothy sale y descubre un lugar lleno de colores, caminos dorados y criaturas extrañas. Ha llegado a Oz.", //3
    "Una bruja buena le dice a Dorothy que siga el camino amarillo hasta la Ciudad Esmeralda para encontrar al Mago de Oz.", //4
    "En el camino, Dorothy encuentra un cruce. ¿Seguirá hacia el camino rojo o tomará el sendero amarillo?", //5
    "Dorothy toma el camino rojo. Tras mucho caminar, cae en un profundo sueño y todo se desvanece lentamente...", //6
    "La pequeña despierta en su habitación de Kansas, ¡Todo fue un increíble sueño!", //7
    "Dorothy sigue por el camino y ve a lo lejos a un espantapájaros y un muñeco de hojalata.", //8 (Camino Amarillo 1)
    "Al acercarse a ellos, le dicen '¿Buscas al Mago de Oz? ¡Nosotros también!'", //9 (Camino Amarillo 2)
    "Los compañeros de viaje ven al costado del camino a un león atrapado. Él exclama: '¡Ayúdenme! ¡Necesito soltarme para encontrar al Mago de Oz!'", //10 (Camino Amarillo 3)
    "Dorothy y sus amigos ven al final del camino una ciudad de esmeralda, donde los espera la bruja buena, saludando animada con la mano.", //11 (Camino Amarillo 4)
    "¡Ellos siempre tuvieron lo que deseaban! El hombre de Lata es dulce, el Espantapájaros es inteligente, el León es valiente. Y Dorothy, con tan solo golpear tres veces sus zapatos, volverá a su hogar.", //12 (Camino Amarillo 5)
    "Dorothy se toma un momento para ver a sus amigos y a sus zapatos. Luego de tomar aire, ya sabe que hacer.", //13 (Camino Amarillo 6)
    "Dorothy decide ir a abrazar a sus amigos, admitiendo que nunca se divirtió tanto en su vida, y que prefiere quedarse con ellos en este mundo de fantasía.", //14 (Final Oz)
    "Dorothy se dirige junto a sus amigos uno por uno para despedirse antes de golpear sus zapatos y regresar a su hogar en Kansas. Antes de irse, saluda a todos y dice...", //15 (Despedida)
    "Luego de golpear sus zapatos rojos tres veces cierra sus ojos, para luego abrirlos y descubrir que, tal y como le dijo la bruja buena, volvió a su hogar en Kansas.", //16 (Final verdadero)
    "", //17
    "Aventura gráfica, arte y diseño:", //18
    "El Mago de Oz:", //19
    "Natalia Canabrava Basso — Braian Bailate", //20
    "Lyman Frank Baum (cuento) — Warner Bros (película)" //21
  ];

  // -----------------------------------------------------
  //PANTALLAS
  pantallas = [
    // ---------------- INICIO ----------------
    { tipo: "inicio", fondo: imagenes[0], texto: textos[0], botones: [[botonesExtras[0], 1], [botonesExtras[1], 8]] }, //0
    
    // ---------------- PRIMEROS PASOS ----------------
    { tipo: "unaOpcion", fondo: imagenes[1], texto: textos[1], botones: [[botonesComunes[0], 2]] }, //1
    { tipo: "unaOpcion", fondo: imagenes[2], texto: textos[2], botones: [[botonesComunes[0], 3]] }, //2
    { tipo: "unaOpcion", fondo: imagenes[3], texto: textos[3], botones: [[botonesComunes[0], 4]] }, //3
    { tipo: "unaOpcion", fondo: imagenes[4], texto: textos[4], botones: [[botonesComunes[0], 5]] }, //4
    { tipo: "dosOpciones", fondo: imagenes[5], texto: textos[5], botones: [[botonesExtras[2], 6], [botonesExtras[3], 9]] }, //5 cruce de caminos
    
     // ---------------- CAMINO ROJO (FINAL ALT 1)----------------
    { tipo: "unaOpcion", fondo: imagenes[6], texto: textos[6], botones: [[botonesComunes[0], 7]] }, //6 
    { tipo: "final", fondo: imagenes[7], texto: textos[7], botones: [[botonesComunes[1], 8]] }, //7 final rojo - pasa a creditos
    
    // ---------------- CREDITOS ----------------
    { tipo: "creditos", fondo: imagenes[8], titulos: [textos[18], textos[19]], textosCred: [textos[20], textos[21]], botones: [[botonesExtras[4], 0]] }, //8 
    
    // ---------------- CAMINO AMARILLO ----------------
    { tipo: "unaOpcion", fondo: imagenes[9], texto: textos[8], botones: [[botonesExtras[8], 10]] }, //9
    { tipo: "unaOpcion", fondo: imagenes[10], texto: textos[9], botones: [[botonesExtras[6], 11]] }, //10
    { tipo: "unaOpcion", fondo: imagenes[11], texto: textos[10], botones: [[botonesExtras[7], 12]] }, //11
    { tipo: "unaOpcion", fondo: imagenes[12], texto: textos[11], botones: [[botonesExtras[8], 13]] }, //12
    { tipo: "unaOpcion", fondo: imagenes[13], texto: textos[12], botones: [[botonesExtras[9], 14]] }, //13
    { tipo: "dosOpciones", fondo: imagenes[14], texto: textos[13], botones: [[botonesExtras[10], 15], [botonesExtras[11], 16]] }, //14
    
    // ----------------ME QUEDO EN OZ (FINAL ALT 2) ----------------
    { tipo: "unaOpcion", fondo: imagenes[15], texto: textos[14], botones: [[botonesComunes[1], 8]] }, //15 Quedarse en Oz - pasa a CreditoS
    
    // ----------------VUELVO A KANSAS (FINAL ORIGINAL) ----------------
    { tipo: "unaOpcion", fondo: imagenes[16], texto: textos[15], botones: [[botonesExtras[5], 17]] }, //16 Volver a Kansas 
    { tipo: "unaOpcion", fondo: imagenes[17], texto: textos[16], botones: [[botonesComunes[1], 8]] } //17 Final verdadero - pasa a Creditos
  ];
}


// -----------------------------------------------------------------------------
//MAQUINA DE ESTADOS IF ELSE

function draw() {
  background(220);
  if (imagenes.length > 0) { 
    dibujarPantallaActual(); //llama para mostrar la pantalla que tenga que mostrar segun estadoActual
  }
}


function dibujarPantallaActual() {
  let p = pantallas[estadoActual];

  if (p.tipo === "inicio") { //decide que tipo de pantalla mostrar segun el tipo que este en el momento
    pantallaInicio(p.fondo, p.texto, p.botones);
  } else if (p.tipo === "unaOpcion") {
    pantallaUnaOpcion(p.fondo, p.texto, p.botones);
  } else if (p.tipo === "dosOpciones") {
    pantallaDosOpciones(p.fondo, p.texto, p.botones);
  } else if (p.tipo === "final") {
    pantallaFinal(p.fondo, p.texto, p.botones);
  } else if (p.tipo === "creditos") {
    pantallaCreditos(p.fondo, p.titulos, p.textosCred, p.botones);
  } else {
    background(220);
    fill(0);
    textAlign(CENTER, CENTER);
    text("Pantalla no definida: " + estadoActual, width / 2, height / 2);
  }
}

// -----------------------------------------------------------------------------
// FUNCIONES QUE DIBUJAN CADA TIPO DE PANTALLA UNA VEZ
function pantallaInicio(fondo, texto, btn) {
  image(fondo, 0, 0, width, height);
  fill(colorMarron);
  estiloTitulo();
  text(texto, width / 2, height / 3);
  DibujarDosBotonesLadoALado(btn);
}

function pantallaUnaOpcion(fondo, texto, btn) {
  image(fondo, 0, 0, width, height);
  fill(colorMarron);
  estiloTexto();
  textAlign(CENTER, TOP);
  text(texto, 80, 60, width - 160, height / 2);
  DibujarUnBoton(btn);
}

function pantallaDosOpciones(fondo, texto, btn) {
  image(fondo, 0, 0, width, height);
  fill(colorMarron);
  estiloTexto();
  textAlign(CENTER, TOP);
  text(texto, 80, 60, width - 160, height / 2);
  DibujarDosBotonesLadoALado(btn);
}

function pantallaFinal(fondo, texto, btn) {
  image(fondo, 0, 0, width, height);
  fill(colorMarron);
  estiloTexto();
  textAlign(CENTER, TOP);
  text(texto, 80, 60, width - 160, height / 2);
  DibujarUnBoton(btn);
}

function pantallaCreditos(fondo, titulos, textosCred, btn) {
  image(fondo, 0, 0, width, height);
  fill(colorMarron);

  estiloTitulo();
  text(titulos[0], width / 2, height / 4 - 30);
  estiloTexto();
  text(textosCred[0], width / 2, height / 4 + 20);

  estiloTitulo();
  text(titulos[1], width / 2, height / 2 + 40);
  estiloTexto();
  text(textosCred[1], width / 2, height / 2 + 90);

  DibujarUnBoton(btn);
}

// -----------------------------------------------------------------------------
// BOTONES
let botonClickeado = null; //null limpia la variable para que cuando vuelvo a hacer click se pueda usar como de cero para evitar superposicion de sonido y pantallas

function DibujarBoton(texto, x, y, w, h, destino, colorBase) {
  let dentro = mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
  let c = dentro ? lerpColor(colorBase, color(255), 0.3) : colorBase;
  fill(c);
  rect(x, y, w, h, 10);
  estiloBoton();
  text(texto, x + w / 2, y + h / 2);

  if (dentro && mouseIsPressed) {
    botonClickeado = destino;
  }
}

function DibujarUnBoton(btn) {
  let botonAncho = 220;
  let botonAlto = 50;
  let x = width / 2 - botonAncho / 2;
  let y = height - 80;
  DibujarBoton(btn[0][0], x, y, botonAncho, botonAlto, btn[0][1], colorNaranja);
}

function DibujarDosBotonesLadoALado(btn) {
  let botonAncho = 200;
  let botonAlto = 50;
  let espacio = 40;
  let totalAncho = botonAncho * 2 + espacio;
  let x1 = width / 2 - totalAncho / 2;
  let x2 = x1 + botonAncho + espacio;
  let y = height - 100;

  DibujarBoton(btn[0][0], x1, y, botonAncho, botonAlto, btn[0][1], colorNaranja);
  DibujarBoton(btn[1][0], x2, y, botonAncho, botonAlto, btn[1][1], colorNaranjaClaro);
}

// -----------------------------------------------------------------------------
//REPRODUCE LA MUSICA
function mouseClicked() { 
  if (botonClickeado !== null) { 
    if (estadoActual === 0 && botonClickeado === 1 && !cancion.isPlaying()) { //Esto indica que estoy en la pantalla de Inicio y clickee el boton para la primera pantalla, y tambien se fija si la cancion esta sonando para que no suene superpuesta
      cancion.loop(); //Que no pare la fiesta dont stop the paaarty :D eee ie ie 
      cancion.setVolume(0.2); //regulador volumen
    }
    
    estadoActual = botonClickeado;
    botonClickeado = null;
  }
}

// -----------------------------------------------------------------------------
// ESTILOS
function estiloTitulo() {
  textAlign(CENTER, CENTER);
  textSize(39);
  textStyle(BOLD);
  textFont("Georgia");
}

function estiloTexto() {
  textAlign(CENTER, CENTER);
  textSize(20);
  textFont("Georgia");
}

function estiloBoton() {
  textAlign(CENTER, CENTER);
  textSize(20);
  textFont("Georgia");
  fill(colorMarron);
}
