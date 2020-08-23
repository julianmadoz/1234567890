function cubee(){
  if(playing==true){
    rotateX(map(angle(),-50,50,-2,2))
    perspective(map(angle(),-50,50,1,2.3))
    texture(video)
    noStroke()
    box(800,800,800)

}}

function loadvideos(){
  video = createVideo('1.mp4', loaded)
  video.size(200,200)
  video.hide()


  function loaded(){
    print('Video Ready!')
  }

}

function playVideos(){
  video.loop()
  video.volume(1)
}
