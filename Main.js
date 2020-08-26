let pN
let webCam
let poses = []
let samples = []
let status = 'init'
let playing = false // determina si si esta reproduciendo o no
let camera //camara de la vista en 3D
let btns = {} // botones
let videos = {} //videos cargados
let gr = {} // graphics donde van los videos y son la textura de los planos
let planeSize = 500 //distancia de planos al centro
let planes = {} /// contiene todos los planos
let retroGameFont
p5.disableFriendlyErrors = true;

function preload() {
	loadvideos( 10 )
	audio_manager.load_files( 8 ) // loadAudios()
	retroGameFont = loadFont( 'otros/RetroGaming.ttf' )

	anvas1 = createCanvas( 1, 1, WEBGL )
	// webCam = createCapture(VIDEO)
	// webCam.hide()
	// //Canvas y webcam antes de posenet sino no funciona
	//   loadPoseNet()

}

function setup() {
	frameRate( 30 )
	angleMode( DEGREES )
	pixelDensity( 1 ) // baja la resolucion

	canvas = createCanvas( windowWidth, windowHeight, WEBGL ) // Canvas principal
	canvas.position( 0, 0 )
	posenet_vid = createGraphics( 640, 480 ) // Junta la webcam con los puntos del cuerpo
	start = createGraphics( width, height ) //pantalla de inicio

	setAttributes( 'antialias', false );
	setAttributes( 'depth', false );
	setAttributes( 'stencil', true );
	setAttributes( 'alpha', true )

	camera = createCamera()
	setCamera( camera )


	define_buttons()
	create_gr( 6 )

	planes[ 1 ] = new plane_class( 1, planeSize, 0, 0, -planeSize / 2, 0, 0, 180 )
	planes[ 2 ] = new plane_class( 2, planeSize, 0, 0, -planeSize / 2, 0, 180, 180 )
	planes[ 3 ] = new plane_class( 3, planeSize, 0, 0, -planeSize / 2, 0, 90, 180 )
	planes[ 4 ] = new plane_class( 4, planeSize, 0, 0, -planeSize / 2, 0, -90, 180 )
	planes[ 5 ] = new plane_class( 5, planeSize, 0, 0, -planeSize / 2, 90, 0, 180 )
	planes[ 6 ] = new plane_class( 6, planeSize, 0, 0, planeSize / 2, 90, 0, 180 )


	// slider = createSlider(0,400)
	// slider2 = createSlider(-200,200)

}

function draw() {



	if ( status == 'init' ) {

		start.background( 100 )
		btns[ 'start' ].placeOnLayer( start )
		image( start, -width / 2, -height / 2 )
	}


	if ( status == 'playing' ) {
		background( 30, 0, 10 )
		pointLight( 255, 255, 255, 0, 19, 0 )
		spotLight( 255, 255, 255, 0, -planeSize / 2, 0, 0, -1, 0 )
		camera.setPosition( 0, 0, 0 )
		camera.perspective( 240 )

		// camera.lookAt(1*sin(map(angle(),-100,100,0,400)), 1*sin(map(mouseY,0,width,0,400)), 1*cos(map(angle(),-100,100,0,400)))
		camera.lookAt( 1 * sin( map( mouseX, 0, width, 0, 360 ) ), 5 * sin( map( mouseY, 0, width, 0, 400 ) ), 1 * cos( map( mouseX, 0, width, 0, 400 ) ) )
		// camera.lookAt(0,10,0)
		// camera.setPosition(sin(frameCount / 60) * 500, 500, 500)

		planes[ 1 ].render_plane( 1 )
		planes[ 2 ].render_plane( 2 )
		planes[ 3 ].render_plane( 3 )
		planes[ 4 ].render_plane( 4 )
		planes[ 5 ].render_plane( 5 )
		planes[ 6 ].render_plane( 6 )
		// webCam_layer(posenet_vid,0,0,0.3)
	}


}

function mousePressed() {
	for ( key in btns ) {
		btns[ key ].clicked( mouseX, mouseY )
		planes[ 1 ].render_plane( 2 )
	}
}