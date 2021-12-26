var dog,sadDog,happyDog;
var feed,addFood
var foodObj
function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
   
}

function setup() {
  createCanvas(1000,400);
  foodObj = new Food()
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;
  
  feed = createButton("feed the dog")
  feed.position(700,95)
  feed.mousePressed(feedDog)
  
  addFood = createButton("add fod")
  addFood.position(800,95)
  addFood.mousePressed(addFoods)
}

function draw() {
  background(46,139,87);
  drawSprites();
}


