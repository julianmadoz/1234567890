//////// CAPA QUE DIBUJA EL CUBO
function magicCube(layer){
  if(playing==true){
    layer.background(0)
    let ang = map(angle(),-50,50,0.2,2.3, false)
    layer.perspective(ang)
    print(ang)
    layer.texture(video)
    layer.noStroke()
    layer.box(1000,1000,1000)
    image(layer,0,0)

}}
//////// CAPA QUE DIBUJA LA CAMARA WEB
function webCam_layer(layer,x,y,scale){
  layer.background(0)
  layer.image(webCam,0,0)
  drawKeypoints(layer)
  image(layer,x,y,layer.width*scale,layer.height * scale)
  // layer.scale(scale,scale)
}
///////// CAPA QUE DIBUJA EL BOTON DE INICIO
function start_button(layer){
  layer.background('red')
  layer.mouseClicked(start_playing)
  imageMode(CENTER)
  image(layer,0,0)

  function start_playing(){
    playVideos()
    audio_manager.play_all()
    status = 'playing'
    print(status)
    setTimeout(() => {  playing = true; }, 100);
  }

}







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
