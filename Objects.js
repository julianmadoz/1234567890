class customButton {
  constructor(x,y, scl){
    this.x = x
    this.y = y
    this.ratio = 5/3
    this.scl = scl
    this.w =  this.ratio*this.scl
    this.h=  this.scl/this.ratio
    this.x1 = this.x - this.w/2
    this.y1 = this.y - this.h/2
    this.x2 = this.x + this.w/2
    this.y2 = this.y + this.h/2
    this.mycallback = 0
    this.visible = true

    this.label = ' asdsf'
    this.fillColor = 'green'
    this.stkColor = ''
    this.stkWeight = 10
    this.txtColor = 'black'
    this.txtSize = this.h*0.7

  }

    placeOnLayer(layer){
      this.gr = createGraphics(this.w,this.h)
      this.gr.fill('green')
      this.gr.stroke(this.stkColor);
      this.gr.strokeWeight(this.stkWeight);
      this.btn = this.gr.rect(0,0,this.gr.width,this.gr.height )
      this.gr.textSize(this.txtSize)
      this.gr.textAlign(CENTER, CENTER)
      this.gr.stroke(this.txtColor)
      this.gr.noStroke()
      this.gr.fill(this.txtColor)
      this.gr.text(this.label,this.gr.width/2,this.gr.height/2)
      layer.imageMode(CENTER)
      layer.image(this.gr,width/2,height/2)
  }

    clicked(x,y){
      if(x>this.x1 && x < this.x2 && y>this.y1 && y< this.y2 && this.visible == true){

      this.mycallback()}

    }


}

class video_plane{
  constructor(video,size = '300'){
    this.size = size
    this.video = video

    //layer.noStroke()
    // translate(100,100,100)
    // layer.push()

    // layer.pop()

  }
  placeOnLayer(layer,video){

    layer.texture(video)
    layer.box(this.size ,this.size,this.size)

  }

}
