//////// CAPA QUE DIBUJA EL CUBO
function drawCube(layer){
  cube.background(120)
  for(key in planes){
    planes[key].placeOnLayer(layer, video)
  }
  image(cube,0,0)

}

function magicCube(layer){
  if(playing==true){
    // let ang = map(angle(),-50,50,2,3, false)
    // layer.perspective(ang)
    planes['1'] = new video_plane(video, 400)



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
function define_buttons(){
  //start
  btns['start'] = new customButton(width/2,height/2, 100)
  btns['start'].label = 'Start!' 
  btns['start'].mycallback = function start_playing(){
    playVideos()
    audio_manager.play_all()
    btns['start'].visible = false
    status = 'playing'
    print(status)
    setTimeout(() => {  playing = true; }, 100);
  }


}

function draw_buttons(layer){
  layer.background(0)
  btns['start'].placeOnLayer(layer)



  image(layer,0,0)



}
