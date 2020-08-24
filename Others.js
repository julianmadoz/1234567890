function start_playing(){
  playVideos()
  audio_manager.play_all()
  setTimeout(() => {  playing = true; }, 500);
}

function check_ready(){
  noLoop()
  setTimeout(() => {  loop();  print('listu') }, 250);

}
