var Bfs = require('./bfs');
var argv = require('minimist')(process.argv.slice(2));


var start = 'East Ham',
    stops = 5;

if (argv.s && typeof(argv.s)==='string') {
   start = argv.s;
}

if (argv.n && Number.isInteger((argv.n))){
    stops = argv.n;
}
console.log(`Start -> ${start} ;  Stops -> ${stops}`);

var bfs = new Bfs();
console.log(bfs.find(start, stops));