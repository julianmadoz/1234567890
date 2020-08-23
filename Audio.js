function loadAudios() {
  soundFormats('mp3', 'ogg');

  for (let i = 0; i < 7; i++) {
    samples[i] = loadSound(`audios/${i+1}.mp3`);
  }
  print("Audios ready!")
}


function playAudios() {
  b = createButton('dioooos').hide()
  for (let i = 0; i < 3; i++) {
    let miNumero = Math.floor(Math.random() * 6) + 1;
    samples[miNumero].play()
  }
}
