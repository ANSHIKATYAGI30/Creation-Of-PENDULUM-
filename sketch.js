const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

let engine;
let world;
var ball;
var con;
var ball2;
var cons;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  ball_options= {
    restitution: 0.8
  }
  ball2_options= {
    restitution: 0.9
  }

  ball= Bodies.circle(200,50,15,ball_options);
  World.add(world,ball);
  ball2= Bodies.circle(350,10,15, ball2_options);
  World.add(world,ball2);
  
  con= Constraint.create({
    pointA: {x:200,y:20},
    bodyB: ball,
    pointB: {x:0,y:0},
    length: 100,
    stiffness: 0.1
  })
  cons= Constraint.create({
    bodyA: ball,
    pointA: {x:0,y:0},
    bodyB: ball2,
    pointB: {x:0,y:0},
    length: 100,
    stiffness: 0.2
  })


  World.add(world,con);
  World.add(world,cons);
  rectMode(CENTER);
  ellipseMode(RADIUS);


  
  
}

function draw() 
{
  background(150);
  Engine.update(engine);
  fill("red");
  ellipse(ball.position.x, ball.position.y, 15);
  ellipse(ball2.position.x, ball2.position.y,15);
  push();
  strokeWeight(4);
  stroke("green");

  line(con.pointA.x, con.pointA.y, ball.position.x, ball.position.y);
  line(ball.position.x, ball.position.y, ball2.position.x,ball2.position.y);
  pop();

  
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
  }
}

