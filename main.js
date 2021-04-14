var canvas=new fabric.Canvas('myCanvas');
block_image_width =30;
block_image_height=30;
player_x=10;
player_y=10;
var player_object="";

function player_update()
{
    fabric.Image.fromUrl("player.png", function(Img){
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromUrl(get_image,function(Img){
        block_image_object= Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown",byKeedoun);
 function byKeedoun(e) {
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey==true && keyPressed=='80') {
       console.log("p and shift pressed together");
          block_image_width=block_image_width+10;
          block_image_height=block_image_height+10
          document.getElementById("current_width").innerHTML=block_image_width;
          document.getElementById("current_height").innerHTML=block_image_height;
    }
    if (e.shiftKey==true && keyPressed=='80') {
        console.log("p and shift pressed together");
           block_image_width=block_image_width-10;
           block_image_height=block_image_height-10
           document.getElementById("current_width").innerHTML=block_image_width;
           document.getElementById("current_height").innerHTML=block_image_height;
     }

     if (keyPressed=='72') {
      new_image('thor_face.png');
      console.log("h");  
     }
     if (keyPressed=='90') {
        new_image('thor_left_hand.png');
        console.log("z");  
    }
    if (keyPressed=='89') {
        new_image('spiderman_body.png');
        console.log("y");  
    }
    if (keyPressed=='88') {
        new_image('ironman_legs.png');
        console.log("x");  
       }
       if (keyPressed=='87') {
        new_image('hulk_right_hand.png');
        console.log("w");  
       }