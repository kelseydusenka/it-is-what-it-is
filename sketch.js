let fonts = [];
let word1 = "it";
let word2 = "is";
let word3 = "what";
let word4 = "it";
let word5 = "is";

let r, g, b;

function preload() {
  fonts.push(loadFont("assets/AUTHENTICSans-90.otf"));
  fonts.push(loadFont("assets/AUTHENTICSans-Condensed-90.otf"));
  fonts.push(loadFont("assets/Archivo-Italic.otf"));
  fonts.push(loadFont("assets/Archivo-Regular.otf"));
  fonts.push(loadFont("assets/Aspekta-350.ttf"));
  fonts.push(loadFont("assets/Boris.otf"));
  fonts.push(loadFont("assets/CenturySchL-Roma.ttf"));
  fonts.push(loadFont("assets/CenturySchL-Ital.ttf"));
  fonts.push(loadFont("assets/Compagnon-Roman.otf"));
  fonts.push(loadFont("assets/Compagnon-Script.otf"));
  fonts.push(loadFont("assets/Gemini-Regular.otf"));
  fonts.push(loadFont("assets/Hershey-Noailles-Cursive.otf"));
  fonts.push(loadFont("assets/Hershey-Noailles-Futura-Simplex-Regular.otf"));
  fonts.push(loadFont("assets/Hershey-Noailles-Times-Mono-Regular.ttf"));
  fonts.push(loadFont("assets/InclusiveSans-Regular.ttf"));
  fonts.push(loadFont("assets/InstrumentSerif-Italic.ttf"));
  fonts.push(loadFont("assets/Linden Hill Italic.otf"));
  fonts.push(loadFont("assets/Linden Hill.otf"));
  fonts.push(loadFont("assets/ManifontGroteskBook.ttf"));
  fonts.push(loadFont("assets/NationalPark-Regular.ttf"));
  fonts.push(loadFont("assets/Ocr-Pbi-print.otf"));
  fonts.push(loadFont("assets/PicNic-Regular.otf"));
  fonts.push(loadFont("assets/VioletSans-Regular.otf"));
  fonts.push(loadFont("assets/cmunci.ttf"));
  fonts.push(loadFont("assets/cmunui.ttf"));
  fonts.push(loadFont("assets/courier-code_italic.otf"));
  fonts.push(loadFont("assets/courier-code_regular.otf"));
  fonts.push(loadFont("assets/happy-times-NG_italic_master.otf"));
  fonts.push(loadFont("assets/happy-times-NG_regular_master.otf"));
  fonts.push(loadFont("assets/junicode_regular-italic.otf"));
  fonts.push(loadFont("assets/routed-gothic-italic.ttf"));
  fonts.push(loadFont("assets/routed-gothic.ttf"));
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  background(r, g, b);

  textSize(width * 0.33);

  font1 = random(fonts);
  font2 = random(fonts);
  font3 = random(fonts);
  font4 = random(fonts);
  font5 = random(fonts);

  // remix button
  let remixButton = createButton("REMIX");
  remixButton.class("remixButton");
  remixButton.mousePressed(remix);

  // save button
  let saveButton = createButton("REMEMBER");
  saveButton.class("saveButton");
  saveButton.mousePressed(remember);

  // info modal
  let modal = document.getElementById("myModal");
  let btn = document.getElementById("myBtn");
  let span = document.getElementsByClassName("close")[0];
  btn.onclick = function () {
    modal.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}


function remix() {
  resizeCanvas(windowWidth, windowHeight);
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  background(r, g, b);
  font1 = random(fonts);
  font2 = random(fonts);
  font3 = random(fonts);
  font4 = random(fonts);
  font5 = random(fonts);
}


function remember() {
  resizeCanvas(850, 1100);
  textSize(280);
  background(r, g, b);
  fill(0);
  textFont(font1);
  textAlign(RIGHT);
  text(word1, 408, 330);
  textFont(font2);
  textAlign(LEFT);
  text(word2, 442, 330);
  textFont(font3);
  textAlign(CENTER);
  text(word3, 425, 605);
  textFont(font4);
  textAlign(RIGHT);
  text(word4, 408, 880);
  textFont(font5);
  textAlign(LEFT);
  text(word5, 442, 880);
  saveCanvas("it-is-what-it-is.jpg");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(r, g, b);
}

function draw() {
  fill(0);
background(r, g, b);
  textSize((windowWidth + windowHeight) * 0.1);
  textFont(font1);
  textAlign(RIGHT);
  text(word1, width * 0.48, height * 0.33);
  textFont(font2);
  textAlign(LEFT);
  text(word2, width * 0.52, height * 0.33);
  textFont(font3);
  textAlign(CENTER);
  text(word3, width * 0.5, height * 0.6);
  textFont(font4);
  textAlign(RIGHT);
  text(word4, width * 0.48, height * 0.87);
  textFont(font5);
  textAlign(LEFT);
  text(word5, width * 0.52, height * 0.87);

}
