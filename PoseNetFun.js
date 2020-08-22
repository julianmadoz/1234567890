function loadPoseNet(){
  pN = ml5.poseNet(webCam,{
    imageScaleFactor: 0.5,
    outputStride: 16,
    minConfidence: 0.4,
    detectionType: 'single'

  });
  pN.on('pose', function(results) {
    poses = results;
  });
}


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
        avg = avg + keypoint.score
        sum ++
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}
