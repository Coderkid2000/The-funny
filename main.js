function preload(){

}
noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
        canvas = createCanvas(800,700);
        video = createCapture(VIDEO);
        canvas.position(1000,150);
        video.position(150 , 60 );
        video.size(800,900);
        poseNet = ml5.poseNet(video , modelLoaded);
        poseNet.on('pose', gotPoses)
}

function modelLoaded(){
    console.log('Posenet is initiated');
}

function draw(){
background('#d3d3d3');

document.getElementById("square_side").innerHTML = "Width And Height of a font will be = "+ difference+"px";
fill('#dd3300');
stroke('#dd3300');
textSize(difference);
text("Kazotsky Kick", noseX , noseY);
}

function gotPoses(results){
    if(results.length > 0){
            console.log(results);
            noseX = results[0].pose.nose.x;
            noseY = results[0].pose.nose.y;
            console.log("noseX = " + noseX + " noseY = "+ noseY);

            leftWristX = results[0].pose.leftWrist.x;
            leftWristY = results[0].pose.leftWrist.y;
            difference = floor(leftWristX - rightWristX);
    }
}