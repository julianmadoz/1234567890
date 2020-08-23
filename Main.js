let pN
let webCam
let poses = []
let samples = []
let randomSamples = []
let start
let pN_status = 0

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
    if(pN_status == 1){image(webCam, 0, 0, 640, 480)}
    drawKeypoints()
    angle()

    for(let i = 0;i < 3;i++){
      let miNumero = Math.floor(Math.random() * 8) + 1;
      samples[miNumero].play()
    }
  }
