function cubee(){
  if(playing==true){
    // rotateX(map(angle(),-50,50,-2,2))
    // perspective(map(angle(),-50,50,1,2.3, false))
    perspective(slider.value()/100)
    texture(video)
    noStroke()
    box(1000,1000,1000)

}}

function loadvideos(){
  video = createVideo('videos/2.mp4', loaded)
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
