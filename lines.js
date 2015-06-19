var through = require('through2');
var split2 = require('split2');

var split = through(function(chunk, _ , next) {
    //console.log(chunk.toString());
    var lines = chunk.toString().split('\n');
    var self = this;
    lines.forEach(function(line) {
        self.push(line);
    });
    next();
});

var streamPrint = through(function(chunk, _, next) {
    console.log(chunk.toString() + '\n');
    next();
});

process.stdin.pipe(split2()).pipe(streamPrint);