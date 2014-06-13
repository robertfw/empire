'use strict';

var CONS = {
  SEA: '~',
  LAND: '.'
};

var GameMap = function(rows, cols) {
  this.map = [];
  this.initialize(rows, cols);
};

GameMap.prototype.initialize = function(rows, cols) {
  for(var r = 0; r < rows; r++) {
    this.map[r] = [];
    for(var c = 0; c < cols; c++) {
      this.map[r][c] = {
        terrain: Math.random() > 0.7 ? CONS.LAND : CONS.SEA,
        unit: null,
        city: null
      };
    }
  }
};

module.exports = GameMap;
