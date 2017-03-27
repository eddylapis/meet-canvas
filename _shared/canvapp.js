// hepl-mmi/meet-canvas - canvapp

class CanvApp {
    constructor( sCanvasID ) {
        this.canvas = document.getElementById( sCanvasID );
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        if ( !window.isCanvasSupported( this.canvas ) ) {
            return console.error( "Your browser doesn't support canvas. Please update." );
        }
        this.context = this.canvas.getContext( "2d" );
    }

    draw() {
        console.warn( "The draw method must be overrided!" );
    }
}

window.CanvApp = CanvApp;
