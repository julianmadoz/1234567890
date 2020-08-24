let pN
let webCam
let poses = []
let samples = []
let status = 0
let video
let playing = false
let camera


function preload() {
  // loadAudios()
  audio_manager.load_files(8)
  loadvideos()
  canvas1 = createCanvas(1, 1,WEBGL)
  webCam = createCapture(VIDEO)
  webCam.hide()
  //Canvas y webcam antes de posenet sino no funciona
  loadPoseNet()


}

function setup() {
  frameRate(20)

  canvas = createCanvas(windowWidth, windowHeight,WEBGL)
  camera = createCamera()
  setCamera(camera)

  b = createButton("start")
  b.mousePressed(start_playing)
  slider = createSlider(0,400)
  slider2 = createSlider(-10,10)

}

function draw() {
  camera.lookAt(0, 1, 1)
  camera.setPosition(0,0,0)
  camera.pan(slider2.value())
  background(0)
  cubee()


}
