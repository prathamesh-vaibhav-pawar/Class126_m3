song = ""
song2 = ""
RightWristX = 0
RightWristY = 0
LeftWristX = 0
LeftWristY = 0
function preload(){
    song = loadSound("music.mp3")
    song2 = loadSound("music2.mp3")
}
function setup(){
    Canvas = createCanvas(500,600)
    Canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    pose = ml5.poseNet(video,Modelloaded)
    pose.on('pose',Gotresult)
}
function Modelloaded(){
    console.log("Model loaded")
}
function PlayMusic(){
    song.play()
    song.setVolume(1)
    song.rate(1)
}
function draw(){
    image(video,0,0,500,500) 
}
function Gotresult(result){
    if(result.length > 0){
        console.log(result)
        RightWristX = result[0].pose.result.RightWrist.x 
        RightWristY = result[0].pose.result.RightWrist.y 
        LeftWristX = result[0].pose.result.LeftWrist.x
        LeftWristY = result[0].pose.result.LeftWrist.y
    }
}