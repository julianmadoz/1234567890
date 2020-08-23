let pN
let webCam
let poses = []
let samples = []
let pN_status = 0
let video
let playing = false


function preload() {
  loadAudios()
  loadvideos()

}

function setup() {
  noLoop() //para esperar que cargue el modelo en preload no funciona
  canvas = createCanvas(640, 480,WEBGL)
  webCam = createCapture(VIDEO)
  webCam.hide()
  loadPoseNet()
  b = createButton("start")
  b.mousePressed(start_playing)
}

function draw() {
  background(100)
  cubee()

}
