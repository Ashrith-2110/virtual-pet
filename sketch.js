//Create variables here
var dog , happydog , foodS , foodstock
var database

function preload(){
  //load images here
  dogImage = loadImage("images/dogImg.png") 
  happydogImage = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500, 500);
  var database = firebase.database();

  dog= createSprite(200,200,20,20)
  dog.addImage(dogImage);
  dog.scale= 0.5

  foodstock=database.ref("food")
  foodstock.on("value",readStock);
  
}


function draw() {  

  background(46,139,87);
  

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage("happydog")
 }
 textsize= 39
 text("press up arrow key to feed draco milk",200,200)

  drawSprites();

  




}



function readStock(data){
foodS= data.val();
}

function writeStock(x){

  if(x<=0){
   x=0;
  } else{
   x=x-1

  }
database.ref('/').update({
  food:x
})


}








