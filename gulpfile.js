const gulp = require("gulp");
const sass = require("gulp-sass");
const postcss = require("gulp-postcss");
const nano = require("cssnano");
const prefixer = require("autoprefixer");
const imagemin = require("gulp-imagemin");

//defines some tasks for gulp to run

//compile and minify sass files

function compile(done) {
    gulp.src("./sass/**/*.scss")
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(postcss([prefixer(), nano()])) //might not work
        .pipe(gulp.dest("./css"))
        done()
}

//minify every image
function squashImg(done) {
        gulp.src("./images/**")
        .pipe(imagemin())
        .pipe(gulp.dest("./dist/images"))
        done()
    }

exports.compile = compile;
exports.squash = squashImg;