function preload(){
  treximg= loadAnimation("trex1.png","trex3.png","trex4.png") 
  groundimg = loadImage("ground2.png")
  cloudimg = loadImage("cloud.png")
}

function setup(){
  createCanvas(600, 200)
  trex = createSprite(50, 180, 50, 30)
  trex.addAnimation("trexani",treximg)
  trex.scale = 0.5
  ground = createSprite(300, 190, 600, 20)
  ground.addImage(groundimg)
  ground2 = createSprite(300, 200, 600, 20)
  ground2.visible = false
}

function draw(){
  background(173, 164, 173)
  console.log(frameCount)
  clouds()
  ground.velocityX = -5
  trex.collide(ground2)
  if (ground.x<0){
    ground.x = 600
  }
  if (keyDown(" ") && trex.y>166){
    trex.velocityY = -6
  }
  trex.velocityY = trex.velocityY + 0.2
  drawSprites()  
}

function clouds(){
  if (frameCount%60===0){
   cloud = createSprite(600, random(20, 100), 40, 20)
   cloud.velocityX = -5
   cloud.addImage(cloudimg)
   cloud.scale = 0.8
  }
}
