let pN
let webCam
let poses = []
let samples = []
let status = 'init'
let playing = false // determina si si esta reproduciendo o no
let camera //camara de la vista en 3D
let btns   = {} // botones
let planes = {} // planos que hacen al cubo
let videos = {} //videos cargados

function preload() {
  audio_manager.load_files(8)  // loadAudios()
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
  start = createGraphics(width,height)

  camera = cube.createCamera()
  cube.setCamera(camera)

  planes['plane1'] = new video_plane(video, 400)

  // slider = createSlider(0,400)
  // slider2 = createSlider(-200,200)

}

function draw() {

  if(status == 'init'){
    define_buttons()
    draw_buttons(start)
  }

    // camera.setPosition(0,100,0)
  if(status == 'playing'){
    background(0)
    cube.background(120)


    // camera.lookAt(100, sin(a), 100)
    camera.lookAt(0,0,0)
    camera.setPosition(sin(frameCount / 60) * 500, 500, 500)

    drawCube(cube)
    webCam_layer(gr, width-200 , height-150 ,0.3)


  }


}

function mousePressed() {
  for(key in btns){
    btns[key].clicked(mouseX,mouseY)
  }
}
