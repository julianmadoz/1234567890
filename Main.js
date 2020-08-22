let pN
let webCam
let poses
let sample
let start

// function preload(){
//   soundFormats('mp3', 'ogg');
//   sample = loadSound('audios/ambience_1.mp3');
// }

function setup(){
    webCam = createCapture(VIDEO)
    canvas = createCanvas(640,480)
    loadPoseNet()
    webCam.hide()

  }

function draw() {
    image(webCam, 0, 0, 640, 480);
    try {drawKeypoints()}
    catch(error){console.error()}
    angle()

  }
