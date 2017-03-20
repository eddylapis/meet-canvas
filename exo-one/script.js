// hepl-mmi/meet-canvas - exo-one

const oApp = {
    "canvas": null,
    "width": null,
    "height": null,
    "context": null,
};

const isCanvasSupported = function( $elt ) {
    return !!$elt.getContext;
};

oApp.setup = function() {
    this.canvas = document.getElementById( "app" );
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    if ( !isCanvasSupported( this.canvas ) ) {
        return console.error( "Your browser doesn't support canvas. Please update." );
    }
    this.context = this.canvas.getContext( "2d" );
};

oApp.drawRectangles = function() {
    let { context, width, height } = this;

    context.fillStyle = "purple";
    context.fillRect( 0, 0, width / 2, height / 2 );
    context.fillStyle = "hotpink";
    context.fillRect( width / 2, 0, width / 2, height / 2 );
    context.fillStyle = "gold";
    context.fillRect( 0, height / 2, width / 2, height / 2 );
    context.fillStyle = "moccasin";
    context.fillRect( width / 2, height / 2, width / 2, height / 2 );
};

oApp.drawText = function() {
    let { context } = this;

    context.fillStyle = "white";
    context.font = "36px Helvetica";
    context.textBaseline = "top";
    context.fillText( "Hello, World!", 20, 20 );
};

oApp.drawBorder = function() {
    let { context, width, height } = this;

    context.strokeStyle = "red";
    context.strokeRect( 10, 10, width - 20, height - 20 );
};

oApp.drawImage = function() {
    let { context, width, height } = this,
        oImage = new Image();

    oImage.addEventListener( "load", function() {
        context.drawImage( oImage, ( width - oImage.width ) / 2, ( height - oImage.height ) / 2 );
    } );
    oImage.src = "../_shared/small-kitten.png";
};

oApp.draw = function() {
    this.drawRectangles();
    this.drawText();
    this.drawBorder();
    this.drawImage();
};

oApp.setup();
oApp.draw();
