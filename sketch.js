const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myengine,myworld;
var ground;
var ball1,rope1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
function setup() {
  createCanvas(1200,800);
  myengine = Engine.create();
  myworld = myengine.world;
  ground = new Ground(600,height,1200,20);
  //first layer
  ball1 = new ball(20,170,40);
  rope1 = new Rope(ball1.body,{x:120,y:120})
  box1 = new Box(300,650,50,50);
  box2 = new Box(300,600,50,50);
  box3 = new Box(300,550,50,50);
  box4 = new Box(300,500,50,50);
  box5 = new Box(300,450,50,50);
  box6 = new Box(300,400,50,50);
  box7 = new Box(300,350,50,50);
  box8 = new Box(300,300,50,50);
  box9 = new Box(300,250,50,50);
  box10 = new Box(300,200,50,50);
}

function draw() {
  background("black");  
  rectMode(CENTER);
  ground.display()
  ball1.display()
  rope1.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()

  Engine.update(myengine);
  
  console.log(box2.body.angle);
}