const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var score = 0;

function preload(){

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
   
     Polygon= new polygon(100,200,50,50)
     slingshot=new SlingShot(Polygon.body,{x:100,y:200})

     floor1=new Floor(400,330,300,10)
     floor2=new Floor(1000,250,300,10)

    block1=new Blocks(290,275,30,20)
    block2=new Blocks(340,275,30,20)
    block3=new Blocks(390,275,30,20)
    block4=new Blocks(440,275,30,20)
    block5=new Blocks(490,275,30,20)
    block6=new Blocks(350,230,30,20)
    block7=new Blocks(400,230,30,20)
    block8=new Blocks(450,230,30,20)
    block9=new Blocks(410,200,30,20)
    block10=new Blocks(900,195,30,20)
    block12=new Blocks(950,195,30,20)
    block13=new Blocks(1000,195,30,20)
    block14=new Blocks(1050,195,30,20)
    block15=new Blocks(980,155,30,20)
    block16=new Blocks(1000,155,30,20)
   
    


    
}

function draw(){
    background("green");
    Engine.update(engine);
    strokeWeight(4);
     

    slingshot.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    Polygon.display();


    floor1.display();
    floor2.display();

    fill("white")
    textSize(20)
    text("Press Space For Another Attempt.",800,50)
    textSize(30)
   text ("score:"+score,200,40)
    
   
}

function mouseDragged(){
Matter.Body.setPosition(Polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
slingshot.fly();
}

function keyPressed(){
    if(keyCode ===32){
        slingshot.attach(Polygon.body,{x:100,y:200})
    }
}