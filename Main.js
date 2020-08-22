let pN
let webCam
let poses
function setup(){
    webCam = createCapture(VIDEO, 640, 480)
    loadPoseNet()

  }

function draw() {
    image(webCam, 0, 0, width, height);
    drawKeypoints();
    angle()
  }
