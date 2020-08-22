//Carga poseNet
function loadPoseNet(){
  pN = ml5.poseNet(webCam,{
    imageScaleFactor: 0.5,
    outputStride: 16,
    minConfidence: 0.4,
    detectionType: 'single'
  }, modelReady);

  pN.on('pose', function(results) {
    poses = results;
  });
}

function modelReady() {
  console.log('Model Loaded!');
}

//Dibuja puntitos en los keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

//Calcula el angulo con el que gira la cabeza como si fuese un paneo
function angle(){
  let p = {}
  try{
    p.lx = poses[0].pose.leftEye.x,
    p.ly = poses[0].pose.leftEye.y,
    p.rx = poses[0].pose.rightEye.x,
    p.ry = poses[0].pose.rightEye.y
    p['atan']= Math.atan((p.ly-p.ry)/(p.lx-p.rx))*180/Math.PI
    p.pan = round(map(p.atan,-50,50,-100,100, true))
    textSize(30)
    color('black')
    text('pan: ' + p.pan , 30, 450)
  }
  catch(err){console.log(err)}
}
