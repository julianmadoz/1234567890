class customButton {
	constructor( x, y, scl ) {
		this.x = x
		this.y = y
		this.ratio = 5 / 3
		this.scl = scl
		this.w = this.ratio * this.scl
		this.h = this.scl / this.ratio
		this.x1 = this.x - this.w / 2
		this.y1 = this.y - this.h / 2
		this.x2 = this.x + this.w / 2
		this.y2 = this.y + this.h / 2
		this.mycallback = 0
		this.visible = true

		this.label = ' asdsf'
		this.fillColor = 'green'
		this.stkColor = 'white'
		this.stkWeight = 10
		this.txtColor = 'black'
		this.txtSize = this.h * 0.5
	}
	placeOnLayer( layer ) {
		this.gr = createGraphics( this.w, this.h )
		this.gr.fill( 'green' )
		this.gr.stroke( this.stkColor );
		this.gr.strokeWeight( this.stkWeight );
		this.btn = this.gr.rect( 0, 0, this.gr.width, this.gr.height )
		this.gr.textSize( this.txtSize )
		this.gr.textAlign( CENTER, CENTER )
		this.gr.color( this.txtColor )
		this.gr.stroke( this.stkColor )
		this.gr.strokeWeight( 2 )
		this.gr.textFont( retroGameFont )
		this.gr.fill( this.txtColor )
		this.gr.text( this.label, this.gr.width / 2, this.gr.height / 2 )
		layer.imageMode( CENTER )
		layer.image( this.gr, width / 2, height / 2 )
	}
	clicked( x, y ) {
		if ( x > this.x1 && x < this.x2 && y > this.y1 && y < this.y2 && this.visible == true ) {
			playVideos()
			this.mycallback()
		}
	}
}
class plane_class {
	constructor( number, planesize, tx, ty, tz, rx, ry, rz ) {
		this.id = number
		this.size = planesize
		this.tX = tx
		this.tY = ty
		this.tZ = tz
		this.rX = rx
		this.rY = ry
		this.rZ = rz
	}
	render_plane( vid ) {
		// print(vid)
		// print(this.tX,this.tY,this.tZ)
		// print(this.rX,this.rY,this.rZ)
		// print(gr[this.id])
		// print(videos[vid])
		push()
		specularMaterial( 'white' )
		rotateX( this.rX )
		rotateY( this.rY )
		rotateZ( this.rZ )
		translate( this.tX, this.tY, this.tZ )
		noStroke()
		gr[ this.id ].fill( 0, 10 + random( -10, 10 ) )
		gr[ this.id ].textAlign( CENTER, CENTER )
		gr[ this.id ].textSize( 40 )
		gr[ this.id ].textFont( retroGameFont )
		gr[ this.id ].image( videos[ vid ], 0, 0, planeSize, planeSize )
		// gr[this.id].text(this.id,planeSize/2,planeSize/2)
		gr[ this.id ].stroke( 255, 50 + random( -10, 10 ) )
		gr[ this.id ].strokeWeight( 1 )
		gr[ this.id ].text( 'Cuanto \n te \n queda?', planeSize / 2 + random( -20, 20 ), planeSize / 2 + random( -20, 20 ) )
		gr[ this.id ].text( 'Cuanto \n te \n queda?', planeSize / 2 + random( -20, 20 ), planeSize / 2 + random( -20, 20 ) )
		texture( gr[ this.id ] )
		plane( planeSize, planeSize )

		pop()


	}
}