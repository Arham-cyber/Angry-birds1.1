const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, log1, bird;
var box1, box2;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    
box1 = new Box(800,475,70,70);
box2 = new Box(1000,475,70,70);
log1 = new Log(900,450,200,PI/2)
ground1= new Ground(600,590,1200,20 )
bird  = new Bird(50,50)

}

function draw(){
    background(0);
    Engine.update(engine);
    
box1.display();
box2.display();
ground1.display();
log1.display();
bird.display();

//box1.debug = true
//console.log(box1)
}
