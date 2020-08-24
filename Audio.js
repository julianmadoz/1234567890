/*        FUNCIONA ASI
  .debug = true ---> debugua
  .load_files(numero)       ---> carga 'numero' cantidad de arhivos empzando
                                  desde el 0.mp3

  .play_all()               ---> reproduce todo
  .setVolume(file, volume)  ---> setea volumen de file.mp3 a volume
  .stop()                   ---> para todos

  Habia hecho mas cosas pero no eran tan utiles y se volvio paja
*/

let audio_manager = {

  all_files: [],
  playing: [],
  volumes: [],
  debug: false,
  masterVolume: 1,

  //LOAD FILES
  load_files: async function(number) {
    soundFormats('mp3', 'ogg');

    for (let i = 0 ; i < number; i++) {
      this.all_files[i] = loadSound(`audios/${i}.mp3`);
      if (this.debug == true) {
        print(i + '.mp3 has been loaded')
      }

    }
    print('Audios ready!')

  },
  //PLAY ALL FILES
  play_all: function() {
    for (i = 0; i < this.all_files.length; i++) {
      this.all_files[i].loop()
      this.playing.push(i)
      if (this.debug == true) {
        print(i + '.mp3 is now playing')
      }

    }
    if (this.debug == true) {
      print('playing ' + this.playing.length + ' audio files')

      return
    }


  },

// [x,y] volumen y al audio x
  setVolume: function(file,volume) {
    if (this.debug == true) {
      print('Request received: set volume of' + file + '.mp3 to ' + volume)
    }
    this.all_files[file].setVolume(this.masterVolume*volume)
  },

  //STOP ALL FILES
  stop: function() {
    if (this.debug == true) {
      print('Request received: stopping all audios')
    }
    for (i = 0; i < this.all_files.length; i++) {
      try{this.all_files[i].stop()}
      catch{print('err')}

    }
    this.playing = []
    print(this.all_files)

  }

  //reprudcir X cantidad de audios simultaneamente
  //   play: function(amount) {
  //
  //     if (this.debug == true) {
  //       print('Request received: play ' + amount + ' audios')
  //     }
  //
  //     //reproducir esa cantidad si estan en 0
  //     if (int(this.playing.length) <  amount) {
  //       try {
  //       while (this.playing.length != amount) {
  //
  //           let number = round(random(this.all_files.length - 1))
  //           if (this.playing.includes(number)) {
  //             number = round(random(this.all_files.length - 1))
  //           } else {
  //             this.all_files[number].play()
  //             this.playing.push(number)
  //             if (this.debug == true) {
  //               print(number + ' is now playing')
  //             }
  //           }
  //         }
  //
  //       }catch(err) {
  //         print('Error while trying to play ' + number + '.mp3')
  //       }
  //     }
  //
  //   //si ya hay esa cantidad
  //   if (this.playing.length == amount) {
  //     print('llegue =')
  //     if (this.debug == true) {
  //       print('trying to play ' + amount +
  //         ' audios but there are already ' + amount + ' playing')
  //     }
  //     return
  //   }
  //
  //   //si hay de mas
  //   if (this.playing.length > amount) {
  //     print('more')
  //     let tostop = this.playing.length - amount
  //     this.stop(tostop)
  //     if (this.debug == 1) {
  //       print(tostop + 'were stoppped. Because only' +
  //         amount + 'audios were requested')
  //     }
  //   }
  //
  //   if (this.debug == true) {
  //     print('playing ' + this.playing.length + ' audio files')
  //
  //   return}
  //
  // },

}
