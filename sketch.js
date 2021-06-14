const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var stone;
var iron;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    hammer = new Hammer(10,100);

  rubber = new Rubber(900,350,80);

  plane = new Plane(600,height,1200,20)
  stone = new Stone(1000,350,50)
  iron = new Iron(500,350,20)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber.display();
    stone.display();
    iron.display();
}