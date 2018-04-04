var Stations = require('./stations');
var Station = require('./station');


var Graph = function (data) {
    this.stations = new Stations();
    this.graph = {};

    data.forEach(function (d) {
        let from = this.graph[d.From] || new Station(d.From);
        let to = this.graph[d.To] || new Station(d.To);

        this.stations.add(from, to);

        this.graph[d.From] = from;
        this.graph[d.To] = to;
    }, this);
};

Graph.prototype.getStation = function (name) {
    return this.graph[name];
};

Graph.prototype.resetALl = function () {

};

module.exports = Graph;