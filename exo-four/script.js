// hepl-mmi/meet-canvas - exo-four

let oApp;

class ExoFourCanvApp extends CanvApp {
    // useless constructor, for example purposes
    constructor( sCanvasID ) {
        super( sCanvasID );
    }

    drawHouse() {
        let { context } = this;

        context.strokeStyle = "red";
        context.lineWidth = 5;

        // roof
        context.beginPath();
        context.moveTo( 40, 80 );
        context.lineTo( 80, 40 );
        context.lineTo( 120, 80 );

        // walls
        context.moveTo( 60, 80 );
        context.lineTo( 60, 120 );
        context.lineTo( 100, 120 );
        context.lineTo( 100, 80 );

        // door
        context.rect( 75, 100, 10, 20 );

        context.stroke();
    }

    drawSun() {
        let { context } = this;

        context.fillStyle = "yellow";
        context.strokeStyle = "orange";

        context.beginPath();
        context.arc( 180, 40, 30, 0, Math.PI * 2, true );

        context.fill();
        context.stroke();
    }

    drawPalmtree() {
        let { context } = this;

        context.strokeStyle = "limegreen";

        context.beginPath();
        context.moveTo( 20, 120 );
        context.arcTo( 20, 0, 100, 100, 20 ); // some additional explainations about arcTo: http://www.scriptol.com/html5/canvas/arcto.php

        context.stroke();
    }

    drawWaves() {
        let { context } = this;

        context.strokeStyle = "turquoise";

        context.beginPath();
        context.moveTo( 20, 150 );
        context.bezierCurveTo( 80, 130, 80, 180, 140, 150 );
        context.moveTo( 20, 170 );
        context.bezierCurveTo( 80, 150, 80, 200, 140, 170 );

        context.stroke();
    }

    draw() {
        this.drawHouse();
        this.drawSun();
        this.drawPalmtree();
        this.drawWaves();
    }
}

oApp = new ExoFourCanvApp( "app" );
oApp.draw();
