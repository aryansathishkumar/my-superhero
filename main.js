var canvas = new fabric.Canvas("myCanvas");

var block_img = ""
var player_img = ""

var player_x = 10;
var player_y = 10;

var block_height = 30;
var block_width = 30;

keyPressed = "";

function player_update(){
    fabric.Image.fromURL("player.png", function(Img){
    player_img = Img;
    player_img.scaleToWidth(150);
    player_img.scaleToHeight(140);
    player_img.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_img);
    });
}

function block_update(getImage){
    fabric.Image.fromURL(getImage, function(Img){
    block_img = Img;
    block_img.scaleToWidth(block_width);
    block_img.scaleToHeight(block_height);
    block_img.set({
        top:player_y,
        left:player_x
    });
    canvas.add(block_img);
    });
}

window.addEventListener("keydown", key_down)

function key_down(event)
{
    keyPressed = event.keyCode;
    if(event.keyCode == '81')
    {
        block_height = block_height + 10;
        block_width = block_width + 10;
        console.log("height = "+ block_height + "width = "+ block_width);
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }
    if(event.keyCode == '79')
    {
        block_height = block_height - 10;
        block_width = block_width - 10;
        console.log("height = "+ block_height + "width = "+ block_width);
        document.getElementById("width").innerHTML = block_width;
        document.getElementById("height").innerHTML = block_height;
    }
    if(keyPressed == '38')
    {
        up();
        console.log('up');
    }
    if(keyPressed == '40')
    {
        down();
        console.log('down');
    }
    if(keyPressed == '37')
    {
        left();
        console.log('left');
    }
    if(keyPressed == '39')
    {
        right();
        console.log('right');
    }
    if(keyPressed == '67')
    {
        block_update("captain_america_left_hand.png")
        console.log('left hand (cap)');
    }
    if(keyPressed == '72')
    {
        block_update("hulk_face.png");
        console.log('hulk face');
    }
    if(keyPressed == '73')
    {
        block_update("hulk_legs.png");
        console.log('legs of hulk');
    }
    if(keyPressed == '76')
    {
        block_update("ironman_face.png");
        console.log('ironman face');
    }
    if(keyPressed == '77')
    {
        block_update("ironman_body.png");
        console.log('body of ironman');
    }
    if(keyPressed == '84')
    {
        block_update("spiderman_face.png");
        console.log('spiderman face');
    }
    if(keyPressed == '85')
    {
        block_update("spiderman_right_hand.png");
        console.log('spiderman right hand');
    }
    if(keyPressed == '87')
    {
        block_update("captain_america_left_hand.png");
        console.log('cap america left hand');
    }
    if(keyPressed == '89')
    {
        block_update("thor_right_hand.png");
        console.log('thor right hand');
    }
    if(keyPressed == '90')
    {
        block_update("thor_face.png");
        console.log('thor face');
    }
    if(keyPressed == '65')
    {
        block_update("spiderman_body.png");
        console.log('spiderman body');
    }
    if(keyPressed == '66')
    {
        block_update("ironman_legs.png");
        console.log('iron man legs');
    }
    if(keyPressed == '68')
    {
        block_update("hulkd.png");
        console.log('hulk body');
    }
    if(keyPressed == '69')
    {
        block_update("spiderman_legs.png");
        console.log('spider man legs');
    }
}
function up()
{
    if(player_y >= 10)
    {
        player_y-=block_height;
        console.log("moving up");
        canvas.remove(player_img)
        player_update();
    }
}
function down()
{
    if(player_y <= 700)
    {
        player_y+=block_height;
        console.log("moving down");
        canvas.remove(player_img)
        player_update();
    }
}
function left()
{
    if(player_x >= 10)
    {
        player_x-=block_width;
        console.log("moving left");
        canvas.remove(player_img)
        player_update();
    }
}
function right()
{
    if(player_y <= 950)
    {
        player_x+=block_width;
        console.log("moving right");
        canvas.remove(player_img)
        player_update();
    }
}
