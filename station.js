var Station = function(name) {
    this.name = name;
    this.neighbors = [];

    this.distance = null;
    this.parent = null;
};

Station.prototype.makeNeighbors = function (station) {
    this.neighbors.push(station);
    station.neighbors.push(this);
};

module.exports = Station;
