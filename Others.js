function check_ready(){
  noLoop()
  setTimeout(() => {  loop();  print('listu') },100);

}


function loadvideos(){
  video = createVideo('videos/5.mp4', loaded)
  // video.size(200,200)
  video.hide()


  function loaded(){
    print('Video Ready!')
  }

}

function playVideos(){
  video.loop()
  video.volume(1)
}
