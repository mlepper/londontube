var Graph = require('./graph');
var data = require('./data/lines');

var Bfs = function(){
    this.graph = new Graph(data);
};

Bfs.prototype.find = function (start, numStops) {
    const queue = [],
        results = [];

    let station = this.graph.getStation(start);

    station.distance = 0;
    queue.push(station);

    while (queue.length > 0) {
        station = queue.shift();
        if (station.distance > numStops) {
            break;
        }

        station.neighbors.forEach(function (n) {
            if (n.distance === null) {
                n.distance = station.distance + 1;
                n.parent = station;
                queue.push(n);

                if (n.distance === numStops) {
                    results.push(n.name);
                }
            }
        });
    }

    return results.sort();
};


module.exports = Bfs;
