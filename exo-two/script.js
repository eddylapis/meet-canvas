// hepl-mmi/meet-canvas - exo-two

const oApp = {
    "canvas": null,
    "width": null,
    "height": null,
    "context": null,
};

oApp.setup = function() {
    this.canvas = document.getElementById( "app" );
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    if ( !window.isCanvasSupported( this.canvas ) ) {
        return console.error( "Your browser doesn't support canvas. Please update." );
    }
    this.context = this.canvas.getContext( "2d" );
};

oApp.drawSwissFlag = function( iFlagHeight ) {
    let { context, width, height } = this,
        iFlagWidth = 1.5 * iFlagHeight,
        iCrossThickness = iFlagHeight * 0.1875,
        iCrossSize = iCrossThickness + ( 2 * ( iCrossThickness + iCrossThickness * 0.166666667 ) );

    context.fillStyle = "#da291c"; // Pantone 485C
    context.fillRect( ( width - iFlagWidth ) / 2, ( height - iFlagHeight ) / 2, iFlagWidth, iFlagHeight );
    context.clearRect( ( width - iCrossSize ) / 2, ( height - iCrossThickness ) / 2, iCrossSize, iCrossThickness );
    context.clearRect( ( width - iCrossThickness ) / 2, ( height - iCrossSize ) / 2, iCrossThickness, iCrossSize );
};

oApp.draw = function() {
    this.drawSwissFlag( 250 );
};

oApp.setup();
oApp.draw();
