
//////// CAPA QUE DIBUJA LA CAMARA WEB
function webCam_layer(layer,x,y,scale){
  // layer.background(0)
  layer.image(webCam,0,0)
  drawKeypoints(layer)
  image(layer,x,y,layer.width*scale,layer.height*scale)
  // layer.scale(scale,scale)
}


///////// CAPA QUE DIBUJA EL BOTON DE INICIO
function define_buttons(){
  //start
  btns['start'] = new customButton(width/2,height/2, 100)
  btns['start'].label = 'Start!'
  btns['start'].mycallback = function start_playing(){
    // playVideos()
    audio_manager.play_all()
    playVideos()
    btns['start'].visible = false
    status = 'playing'
    print(status)
    loop()
    setTimeout(() => { playing = true;  }, 100);
  }
  noLoop()

}

function draw_buttons(layer){
  layer.background(0)
  btns['start'].placeOnLayer(layer)
  image(layer,width/2,height/2)

}
