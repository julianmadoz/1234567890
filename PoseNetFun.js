//Carga poseNet
function loadPoseNet(){
  pN = ml5.poseNet(webCam,
    {
    architecture: 'MobileNetV1',
    multiplier: 0.5,
    outputStride: 16,
    minConfidence: 0.2,
    detectionType: 'single',
    // quantBytes: 2
    },
  modelReady);

  pN.on('pose', function(results) {
    poses = results;
  });

}
function modelReady() {
  console.log('Model Loaded!')
}

//Dibuja puntitos en los keypoints
function drawKeypoints(layer)  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.1) {
        layer.fill(255, 0, 0);
        layer.noStroke();
        layer.ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

//Calcula el angulo con el que gira la cabeza como si fuese un paneo
function angle(){
  let p = {}
  p.atan = 0
  if(poses.length > 0){
    p.lx = poses[0].pose.leftEye.x,
    p.ly = poses[0].pose.leftEye.y,
    p.rx = poses[0].pose.rightEye.x,
    p.ry = poses[0].pose.rightEye.y
    p['atan']= Math.atan((p.ly-p.ry)/(p.lx-p.rx))*180/Math.PI
    p.pan = round(map(p.atan,-50,50,-100,100, true))
  if(isNaN(p.atan)){
    print('is not a number')
    return 0
  }
  else{
  return p.atan
  }

}
}
