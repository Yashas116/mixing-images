var trumpet,drum,bass,Eguitar,harp,piano,saxophone,guitar,voilin;
var trumpetI,drumI,bassI,EguitarI,harpI,pianoI,saxophoneI,guitarI,voilinI;
function preload(){
  trumpetI=loadImage("images/thumpet.png");
  drumI=loadImage("images/drum.png");
  bassI=loadImage("images/bass.png");
  EguitarI=loadImage("images/E guitar.png");
  harpI=loadImage("images/harp.png");
  pianoI=loadImage("images/piano.png");
  saxophoneI=loadImage("images/saxophone.png");
  guitarI=loadImage("images/guitar.png");
  voilinI=loadImage("images/violin.png");
}
function setup(){
  createCanvas(1000,1000);
  
  guitar = createSprite(70, 190);
  guitar.addImage(guitarI);
  guitar.scale=0.5;

  trumpet = createSprite(330, 310);
  trumpet.addImage(trumpetI);
  trumpet.scale=0.5

  drum = createSprite(330, 190);
  drum.addImage(drumI);
  drum.width = 100;
  drum.height = 140;

  bass = createSprite(330, 70);
  bass.addImage(bassI);
  bass.width = 100;
  bass.height = 140;

  Eguitar = createSprite(200, 310);
  Eguitar.addImage(EguitarI);
  Eguitar.width = 100;
  Eguitar.height = 140;

  harp = createSprite(200, 190);
  harp.addImage(harpI);
  harp.width = 70;
  harp.height = 110;

  piano = createSprite(200, 70);
  piano.addImage(pianoI);
  piano.width = 100;
  piano.height = 140;

  saxophone = createSprite(70, 310);
  saxophone.addImage(saxophoneI);
  saxophone.height = 100;
  saxophone.width = 140;

  guitar = createSprite(70, 190);
  guitar.addImage(guitarI);
  guitar.height = 100;
  guitar.width = 140;

  voilin = createSprite(70, 70);
  voilin.addImage(voilinI);
  voilin.height = 100;
  voilin.width = 140;
}
function draw() {
  background("white");
  text("chose an instrument", 0, 15);
  if (mousePressedOver(voilin)) {
    voilin.x = World.mouseX;
    voilin.y = World.mouseY;
    guitar.destroy();
    saxophone.destroy();
    piano.destroy();
    harp.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
  } else if ((mousePressedOver(guitar))) {
    guitar.x = World.mouseX;
    guitar.y = World.mouseY;
    voilin.destroy();
    saxophone.destroy();
    piano.destroy();
    harp.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
  } else if ((mousePressedOver(saxophone))) {
    saxophone.x = World.mouseX;
    saxophone.y = World.mouseY;
    voilin.destroy();
    guitar.destroy();
    piano.destroy();
    harp.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
  } else if ((mousePressedOver(piano))) {
    piano.x = World.mouseX;
    piano.y = World.mouseY;
    voilin.destroy();
    guitar.destroy();
    saxophone.destroy();
    harp.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
  } else if ((mousePressedOver(harp))) {
    harp.x = World.mouseX;
    harp.y = World.mouseY;
    voilin.destroy();
    guitar.destroy();
    saxophone.destroy();
    piano.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
  } else if ((mousePressedOver(Eguitar))) {
    Eguitar.x = World.mouseX;
    Eguitar.y = World.mouseY;
    voilin.destroy();
    guitar.destroy();
    saxophone.destroy();
    piano.destroy();
    harp.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
  } else if ((mousePressedOver(bass))) {
    harp.x = World.mouseX;
    harp.y = World.mouseY;
    voilin.destroy();
    guitar.destroy();
    saxophone.destroy();
    piano.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();  } 
    else if ((mousePressedOver(drum))) {

  } 
  else {
    drum.x = World.mouseX;
    drum.y = World.mouseY;
    voilin.destroy();
    guitar.destroy();
    saxophone.destroy();
    piano.destroy();
    Eguitar.destroy();
    bass.destroy();
    drum.destroy();
    trumpet.destroy();
  }
  drawSprites();
}
