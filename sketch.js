const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;


var myEngine,myWorld;

var ball;
var rope;
var roof;

function setup(){
  var canvas=createCanvas(400,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  ball=new Ball(300,200);
  roof = new Roof();
  rope=new Rope(ball.body,roof.body);

  

  /*rect1=Bodies.rectangle(200,100,50,50);
  World.add(myWorld,rect1);
  console.log(rect1);*/

}
function draw(){
  rectMode(CENTER);
  background(0);
  Engine.update(myEngine);
  roof.display();
  ball.display();
  rope.display();
  
}