'use strict';

var GameMap = function() {
  this.map = [];
};

GameMap.prototype.initialize = function(rows, cols) {
  for(var r = 0; r < rows; r++) {
    for(var c = 0; c < cols; c++) {
      this.map[c][r] = 'X';
    }
  }
};

module.exports = GameMap;
