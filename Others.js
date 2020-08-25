function check_ready(){
  noLoop()
  setTimeout(() => {  loop();  print('listu') },100);

}


function loadvideos(n){
  for (i=0; i< n; i++){
    videos[i] = createVideo('videos/'+i+'.mp4')
  }
  video_loaded(n)
}

  function video_loaded(n){
    print('Videos are loaded!')
    for (i=0; i< n; i++){videos[i].hide()}
  }


function playVideos(){
  for(vid in videos){
    videos[vid].loop()
    videos[vid].volume(1)
    // videos[vid].hide()
}}

function create_gr(n){
  for (i=1; i<= n; i++){
    gr[i] = createGraphics(planeSize,planeSize)
  }}

function show_gr(number){
  noStroke()
  // gr[number].image(videos[number],0,0,planeSize,planeSize)
  //texture(gr[number])
  plane(planeSize,planeSize)


}
