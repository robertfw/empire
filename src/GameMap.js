'use strict';

var GameMap = function(rows, cols) {
  this.map = [];
  this.cols = cols;
  this.rows = rows;
  this.initialize(rows, cols);
};

GameMap.prototype.initialize = function(rows, cols) {
  for(var r = 0; r < rows; r++) {
    this.map[r] = [];
    for(var c = 0; c < cols; c++) {
      this.map[r][c] = {
        terrain: Math.random() > 0.7 ? '.' : '~',
        unit: null,
        city: null
      };
    }
  }
};

module.exports = GameMap;
