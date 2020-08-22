let pN
let webCam
let poses = []
let samples = []
let start

function preload(){
  soundFormats('mp3', 'ogg');

  for(let i = 0;i < 8;i++){
    samples[i] = loadSound(`audios/${i+1}.mp3`);
  }

}

function setup(){
    webCam = createCapture(VIDEO)
    canvas = createCanvas(640,480)
    loadPoseNet()
    webCam.hide()
  }

function draw() {
    image(webCam, 0, 0, 640, 480);
    drawKeypoints()

    
  }
