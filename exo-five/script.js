// hepl-mmi/meet-canvas - exo-five

let oApp;

class ExoFiveCanvApp extends CanvApp {
    drawStar() {
        let { context, width, height } = this,
            iStarSize = 200,
            iSteps = 13,
            iCurrentStep = 0;

        context.translate( width / 2, height / 2 );

        context.strokeStyle = "red";
        while( ++iCurrentStep <= iSteps ) {
            context.rotate( Math.PI * 2 / iSteps );
            context.strokeRect( iStarSize / 2 * -1, iStarSize / 2 * -1, iStarSize, iStarSize );
        }

    }

    draw() {
        this.drawStar();
    }
}

oApp = new ExoFiveCanvApp( "app" );
oApp.draw();
