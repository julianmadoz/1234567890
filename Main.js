let pN
let webCam
let poses
function setup(){
  function setup() {
    webCam = createCapture(VIDEO, 640, 480)
    webCam.hide()
    loadPoseNet()

  }

function draw() {
    image(webCam, 0, 0, width, height);
    drawKeypoints();
    angle()
  }


}
