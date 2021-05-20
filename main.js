canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var track_img=["cartoon_Q_Track.jpg","cartoonTrack.png","O_track.jpg","S_Track.jpg","U_track.jpg","W_Track.jpg"];
var random_number=Math.floor(Math.random()*5);

var car_width=100;
var car_height=90;
car_img="carTopView1.png";
var car_x=10;
var car_y=10;

var car1_width=100;
var car1_height=90;
 car1_img="carTopView2.jpg"
var car1_x=10;
var car1_y=100;

background_img=track_img[random_number];
console.log("background img is= "+background_img);

background_img="O_Track.jpg";
car_img="carTopView1.png";
car1_img="carTopView2.jpg";

function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_img;

    car_imgTag=new Image();
    car_imgTag.onload=uploadcar;
    car_imgTag.src=car_img;

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_img;
}

function uploadcar(){
    ctx.drawImage(car_imgTag,car_x,car_y,car_width,car_height);

}

function uploadcar1(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);

}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);

}

window.addEventListener("keydown",my_keydown) ;
function my_keydown(e) {
    var keypress=e.keyCode;
    console.log(keypress);

    if (keypress=="38"){
    up();
    console.log("up");
    }

    if (keypress=="40"){
        down();
        console.log("down");
        }

             if (keypress=="37"){
            left();
            console.log("left");
            }

                 if (keypress=="39"){
                right();
                console.log("right");
                }



                

                    if (keypress=="65"){
                    up1();
                    console.log("a");
                    }

                        if (keypress=="83"){
                        down1();
                        console.log("s");
                        }

                            if (keypress=="68"){
                            left1();
                            console.log("d");
                            }

                                if (keypress=="70"){
                                right1();
                                console.log("f");
                                }
}

function up(){
if (car_y >=0){
    car_y=car_y-10;
    console.log("when up arrow is press,x= " +car_x+" y= " +car_y);
    uploadBackground();
    uploadcar();
    uploadcar1();
}
}

function down(){
    if (car_y <=500){
        car_y=car_y+10;
        console.log("when up arrow is press,x= " +car_x+" y= " +car_y);
        uploadBackground();
        uploadcar();
        uploadcar1();
    }
    }

    function left(){
        if (car_x >=0){
            car_x=car_x-10;
            console.log("when up arrow is press,x= " +car_x+" y= " +car_y);
            uploadBackground();
            uploadcar();
            uploadcar1();
        }
        }

        function right(){
            if (car_x <=700){
                car_x=car_x+10;
                console.log("when up arrow is press,x= " +car_x+" y= " +car_y);
                uploadBackground();
                uploadcar();
                uploadcar1();
            }
            }







            function up1(){
                if (car1_y >=0){
                    car1_y=car1_y-10;
                    console.log("when up arrow is press,x= " +car1_x+" y= " +car1_y);
                    uploadBackground();
                    uploadcar1();
                    uploadcar();

                }
                }
                
                function down1(){
                    if (car1_y <=500){
                        car1_y=car1_y+10;
                        console.log("when up arrow is press,x= " +car1_x+" y= " +car1_y);
                        uploadBackground();
                        uploadcar1();
                        uploadcar();
                    }
                    }
                
                    function left1(){
                        if (car1_x >=0){
                            car1_x=car1_x-10;
                            console.log("when up arrow is press,x= " +car1_x+" y= " +car1_y);
                            uploadBackground();
                            uploadcar1();
                            uploadcar();
                        }
                        }
                
                        function right1(){
                            if (car1_x <=700){
                                car1_x=car1_x+10;
                                console.log("when up arrow is press,x= " +car1_x+" y= " +car1_y);
                                uploadBackground();
                                uploadcar1();
                                uploadcar();
                            }
                            }


  if (car1_x>700){
      console.log("car1_won");
      document.getElementById('game_status').innerHTML="car1_won!";
  }  
  
  if (car_x>700){
    console.log("car_won");
    document.getElementById('game_status').innerHTML="car_won!";
}  