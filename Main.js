let pN
let webCam
let poses = []
let samples = []
let status = 'init'
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
  frameRate(30)

  canvas = createCanvas(windowWidth, windowHeight)
  cube = createGraphics(width, height,WEBGL)
  gr = createGraphics(640,480)
  start = createGraphics(500,500)

  // camera = createCamera()
  // gr.setCamera(camera)

  // slider = createSlider(0,400)
  //slider2 = createSlider(-200,200)

}

function draw() {
  background(0)
  // camera.lookAt(0, 1, 1)
  // camera.setPosition(0,0,0)
  // camera.pan(slider2.value())

  magicCube(cube)
  webCam_layer(gr, width-200 , height-150 ,0.3)
  if(status == 'init'){
    start_button(start)
  }


}
