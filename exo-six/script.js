// hepl-mmi/meet-canvas - exo-six

let oApp;

class ExoSixCanvApp extends CanvApp {
    constructor( sSourceID, sCopyID ) {
        super( sSourceID );
        this.copyCanvas = document.getElementById( sCopyID );
        this.copyWidth = this.copyCanvas.width;
        this.copyHeight = this.copyCanvas.height;
        this.copyContext = this.copyCanvas.getContext( "2d" );
    }

    draw() {
        let { context, width, height } = this;

        this.image = new Image();

        this.image.addEventListener( "load", () => {
            context.drawImage( this.image, 0, 0, width, height );
            this.updateCopy();
            this.canvas.addEventListener( "mousemove", this.handleMouseOver.bind( this ) );
        } );
        this.image.src = "../_shared/big-kitten.jpg";
    }

    handleMouseOver( { clientX, clientY } ) {
        let { width, height, copyWidth, copyHeight } = this,
            { top, left } = this.canvas.getBoundingClientRect(),
            x, y;

        x = clientX - left - copyWidth / 2;
        y = clientY - top - copyHeight / 2;

        ( x < 0 ) && ( x = 0 );
        ( y < 0 ) && ( y = 0 );

        ( x > width - copyWidth ) && ( x = width - copyWidth );
        ( y > height - copyHeight ) && ( y = height - copyHeight );

        this.updateCopy( x, y );
    }

    updateCopy( x = 0, y = 0 ) {
        let { context, copyContext, copyWidth, copyHeight } = this,
            oCopy;

        oCopy = context.getImageData( x, y, copyWidth, copyHeight );
        copyContext.putImageData( oCopy, 0, 0 );
    }
}

oApp = new ExoSixCanvApp( "source", "copy" );
oApp.draw();
