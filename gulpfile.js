const { src, watch , series, parallel } = require('gulp');
const connect = require('gulp-connect');

function server() {
    connect.server({
        port: 3000,
        livereload: true,
    })
}

function watcher() {
    watch('./**').on('all', function() {
        src('./index.html').pipe(connect.reload());
    });
}

exports.debug = parallel(server, watcher);
