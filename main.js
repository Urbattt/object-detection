Status="";
img="";
object={};
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(400,400);
   
}

function modelloaded(){
console.log("model is loaded");
Status=true;
object_detector.detect(video,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
    }
}

function preload(){
img=loadImage("cat-dog.jpg");
}

function draw(){
image(video,0,0,500,500);
if(Status!=""){
    for(i=0; i<=object.length; i++){
        r = random(255);
        g = random(255);
        b = random(255);
        document.getElementById("status").innerHTML="status is object detected";
        document.getElementById("numberofobjectsdetected").innerHTML="number of objects detected are " + object.length;
        fill(r,g,b);
        stroke(r,g,b);
        noFill();
        percent=floor(object[i].confidence*100);
        text(object[i].label+" "+percent+"%",object[i].x, object[i].y);
        rect(object[i].x, object[i].y, object[i].width, object[i].height);
        
    
    }


}
}

function start(){
    object_detector=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="detecting objects";

}