var Stations = function () {
    this.stations = []
};

Stations.prototype.add = function (from, to) {
    from.makeNeighbors(to);

    this.stations.push(from);
    this.stations.push(to);
};

module.exports = Stations;
