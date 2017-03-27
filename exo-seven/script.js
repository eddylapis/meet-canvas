// hepl-mmi/meet-canvas - exo-seven

let oApp;

class ExoSevenCanvApp extends CanvApp {
    draw() {
        let { context, width, height } = this,
            oImage = new Image();

        oImage.addEventListener( "load", () => {
            context.drawImage( oImage, 0, 0, width, height );
            document.querySelectorAll( "button" ).forEach( ( $elt ) => {
                $elt.addEventListener( "click", this.applyFilter.bind( this ) );
            } );
            this.image = context.getImageData( 0, 0, width, height );
        } );
        oImage.src = "../_shared/big-kitten.jpg";
    }

    applyFilter( oEvent ) {
        oEvent.preventDefault();

        let { context, width, height } = this,
            oFilteredImageData = context.getImageData( 0, 0, width, height );

        switch ( oEvent.currentTarget.id ) {
            case "no-red":
                oFilteredImageData = this.applyNoRedFilter( oFilteredImageData );
                break;
            case "negative":
                oFilteredImageData = this.applyNegativeFilter( oFilteredImageData );
                break;
            case "bw":
                oFilteredImageData = this.applyBlackAndWhiteFilter( oFilteredImageData );
                break;
            case "reset":
            default:
                oFilteredImageData = this.image;
                break;
        }

        context.putImageData( oFilteredImageData, 0, 0 );
    }

    applyNoRedFilter( { data, width, height } ) {
        return new ImageData( data.map( ( iCurrent, iIndex ) => {
            return ( iIndex % 4 === 0 ) ? 0 : iCurrent;
        } ), width, height );
    }

    applyNegativeFilter( { data, width, height } ) {
        return new ImageData( data.map( ( iCurrent, iIndex ) => {
            return ( iIndex % 4 !== 3 ) ? ( 255 - iCurrent ) : 255;
        } ), width, height );
    }

    applyBlackAndWhiteFilter( { data, width, height } ) {
        let iCurrentLuminance;

        return new ImageData( data.map( ( iCurrent, iIndex ) => {
            if ( iIndex % 4 !== 3 ) {
                if ( iIndex % 4 === 0 ) {
                    iCurrentLuminance = 0.299 * data[ iIndex ] + 0.587 * data[ iIndex + 1 ] + 0.114 * data[ iIndex + 2 ];
                }
                return iCurrentLuminance;
            }
            return iCurrent;
        } ), width, height );
    }
}

oApp = new ExoSevenCanvApp( "app" );
oApp.draw();
