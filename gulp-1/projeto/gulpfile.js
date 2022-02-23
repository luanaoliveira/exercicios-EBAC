const gulp = require('gulp')
const concat = require('gulp-concat')
const cssmin = require('gulp-cssmin')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')
const stripJs = require('gulp-strip-comments')
const stripCss = require('gulp-strip-css-comments')

function tarefasCSS(cb) {

    return gulp.src([
        './node_modules/bootstrap/dist/css/bootstrap.css',
        './node_modules/@fortawesome/fontawesome-free/css/fontawesome.css',
        './vendor/owl/css/owl.carousel.css',
        './vendor/jquery-ui/jquery-ui.css',
        './src/css/style.css'

    ], { allowEmpty: true })

        .pipe(stripCss())                  // remove comentários
        .pipe(concat('styles.css'))        // mescla arquivos
        .pipe(cssmin())                    // minifica js
        .pipe(rename({ suffix: '.min' }))   // styles.min.css
        .pipe(gulp.dest('./dist/css'))     // cria arquivo em novo diretório
}

function tarefasJS() {

    return gulp.src([
        './node_modules/jquery/dist/jquery.js',
        './node_modules/bootstrap/dist/js/bootstrap.js',
        './vendor/owl/js/owl.carousel.js',
        './vendor/jquery-mask/jquery.mask.js',
        './vendor/jquery-ui/jquery-ui.js',
        './src/js/custom.js'
    ], { allowEmpty: true })

        .pipe(stripJs())                   // remove comentários
        .pipe(concat('scripts.js'))        // mescla arquivos
        .pipe(uglify())                    // minifica js
        .pipe(rename({ suffix: '.min' }))   //scripts.min.js
        .pipe(gulp.dest('./dist/js'))      // cria arquivo em novo diretório
}

function tarefasImagem() {

    return gulp.src('./src/imagens/*')
        .pipe(imagemin({
            pngquant: true,
            optipng: false,
            zopflipng: true,
            jpegRecompress: false,
            mozjpeg: true,
            gifsicle: true,
            svgo: true,
            concurrent: 10,
            quiet: true
        }))
        .pipe(gulp.dest('./dist/images'))
}

exports.styles = tarefasCSS
exports.scripts = tarefasJS
exports.images = tarefasImagem
exports.default = gulp.series(tarefasCSS, tarefasJS, tarefasImagem);