// referenties leggen naar de tools (die geïnstalleerd zijn)
let gulp = require("gulp"),
    sourcemaps = require("gulp-sourcemaps"),
    authoprefixer = require("gulp-autoprefixer"),
    cleanCSS = require("gulp-clean-css"),
    ccslint = require("gulp-csslint"),
    jshint = require("gulp-jshint"),
    jsStylish = require("jshint-stylish"),
    uglify = require("gulp-uglify"),
    notify = require("gulp-notify"),
    concat = require("gulp-concat"),
    sass = require("gulp-sass");

const PATHS = {
    HTML : {
        SRC : './src/*.html',
        DIST: './dist/',
    },
    JS : {
        SRC : './src/js/**/*.js',    //Die twee sterren is voor submappen ook mee te nemen!
        DIST: './dist/js/'
    },
    CSS: {
        SRC : './src/css/**/screen.scss',
        DIST: './dist/css/'
    }
};

gulp.task("default", function(){
    //watch
    let htmlWatcher = gulp.watch(PATHS.HTML.SRC, ['copy-html']);
    let cssWatcher = gulp.watch('./src/**/*.scss', ['css']);
    let jsWatcher = gulp.watch(PATHS.JS.SRC, ['js']);

    /*
    htmlWatcher.on('change', function(event){
        console.log("File " + event.path + " was " + event.type);
    })

    gulp.watch(PATHS.JS.SRC, ['js']);
    gulp.watch(PATHS.CSS.SRC, ['css']);
    */
});

gulp.task("js", function(){
    gulp.src(PATHS.JS.SRC)
        .pipe(concat("app.js"))
        .pipe(gulp.dest(PATHS.JS.DIST));
});

gulp.task("css", function(){
    gulp.src("./src/css/screen.scss")
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest(PATHS.CSS.DIST));

});

gulp.task("copy-html", function(){
    gulp.src(PATHS.HTML.SRC)
        .pipe(gulp.dest(PATHS.HTML.DIST));
});