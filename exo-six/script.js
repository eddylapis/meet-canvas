// hepl-mmi/meet-canvas - exo-six

( function( CanvApp ) {

    "use strict";

    var oSource,
        oCopy,
        fSetup,
        fImageLoaded,
        fCopySourceAtMousePosition;

    oSource = new CanvApp( "#source" );
    oCopy = new CanvApp( "#copy" );

    fSetup = function() {
        var oImage = new Image();

        // load image
        oImage.addEventListener( "load", fImageLoaded );
        oImage.src = "../_shared/big-kitten.jpg";

        // mouse event
        oSource.canvas.addEventListener( "mousemove", fCopySourceAtMousePosition );
    };

    fImageLoaded = function() {
        var oImageData;

        oSource.context.drawImage( this, 0, 0 );

        oImageData = oSource.context.getImageData( 0, 0, oCopy.width, oCopy.height );

        oCopy.context.putImageData( oImageData, 0, 0 );
    };

    fCopySourceAtMousePosition = function( oEvent ) {
        var oSourceCanvasRect = oSource.canvas.getBoundingClientRect(),
            iSourceCanvasFrameX = oEvent.clientX - oSourceCanvasRect.left - oCopy.width / 2,
            iSourceCanvasFrameY = oEvent.clientY - oSourceCanvasRect.top - oCopy.height / 2,
            oImageData;

        // shortcut for "if variable is smaller than zero, set variable to zero"
        ( iSourceCanvasFrameX < 0 ) && ( iSourceCanvasFrameX = 0 );
        ( iSourceCanvasFrameY < 0 ) && ( iSourceCanvasFrameY = 0 );

        // shortcut for "if variable is greater than [value], set variable to [value]"
        ( iSourceCanvasFrameX > oSource.width - oCopy.width ) && ( iSourceCanvasFrameX = oSource.width - oCopy.width );
        ( iSourceCanvasFrameY > oSource.height - oCopy.height ) && ( iSourceCanvasFrameY = oSource.height - oCopy.height );

        oImageData = oSource.context.getImageData( iSourceCanvasFrameX, iSourceCanvasFrameY, oCopy.width, oCopy.height );

        oCopy.context.putImageData( oImageData, 0, 0 );
    };

    fSetup();

} )( window.CanvApp );
