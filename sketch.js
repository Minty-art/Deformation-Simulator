var car, wall;
var speed, weight;
function setup() {
  createCanvas (1600,800);
  speed = random (55,90);
  weight = random(200, 1500);
  car = createSprite(50, 200, 50,50);
  wall = createSprite(1500,300, 50, height/2);
  car.velocityX = speed;
  
}

function draw() {
  background(0);
  if(car.isTouching(wall)) {
    car.velocityX = 0;
    var deform = (0.5 * weight * speed * speed)/22500
    if(deform < 100){
      car.shapeColor= color(0, 255, 0);
    }
    if(deform > 100 && deform < 180){
      car.shapeColor=color(230,230,0);
    }
    
    if(deform > 181){
      car.shapeColor=color(255, 0 ,0);
    }
  }
  
  drawSprites();
}