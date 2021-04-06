const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var engine, world;
var football ;
var backgroundImg,ground;
var jack ;

var gameState = "onSling";

function preload() {
       backgroundImg = loadImage("Images/background.jpg");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    jack = new Jack(700,320,70,70);
    football = new Football(200,50,70,70);

    
}

function draw(){
   if(backgroundImg)
      background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
    jack.display();
    football.display();
    
    
    
}


function keyPressed(){
    if (keyDown("LEFT_ARROW")) { 
       jack.body.position.x -=5 ;
      // jack.body.position.y = mouseY;
    Matter.Bodies.setPosition(jack.body,{x:jack.body.position.x, y:jack.body.position.y})
      }
    
}

