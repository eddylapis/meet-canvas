/* leny/meet-canvas
 *
 * /gulpfile.js - Gulp tasks
 *
 * coded by leny@flatLand!
 * started at 13/03/2017
 */

var gulp = require( "gulp" ),
    babel = require( "gulp-babel" ),
    rename = require( "gulp-rename" ),
    sourcemaps = require( "gulp-sourcemaps" ),
    fCompileExo;

fCompileExo = function( sFolderName ) {
    return function() {
        gulp.src( [ sFolderName + "/*.js", "!" + sFolderName + "/*.min.js" ] )
            .pipe( sourcemaps.init() )
            .pipe( babel() )
            .on( "error", function( oError ) {
                console.error( oError );
                this.emit( "end" );
            } )
            .pipe( sourcemaps.write() )
            .pipe( rename( function( path ) {
                path.basename += ".min";
            } ) )
            .pipe( gulp.dest( sFolderName ) );
    };
};

// --- Task for js

let aFolders = [ "_shared", "exo-one", "exo-two", "exo-three", "exo-four", "exo-five", "exo-six", "exo-seven" ];

aFolders.forEach( function( sFolder ) {
    gulp.task( sFolder, fCompileExo( sFolder ) );
} );

// --- Watch tasks

gulp.task( "watch", function() {
    aFolders.forEach( function( sFolder ) {
        gulp.watch( [ sFolder + "/*.js", "!" + sFolder + "/*.min.js" ], [ sFolder ] );
    } );
} );

// --- Aliases

gulp.task( "default", aFolders );
gulp.task( "work", [ "default", "watch" ] );
