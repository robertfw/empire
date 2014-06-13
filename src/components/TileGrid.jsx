/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react');

var Tile = React.createClass({
  statics: {
    TILE_SIZE: 16
  },

  render: function() {
    return (
      <td><div></div></td>
    );
  }
});

var TileRow = React.createClass({
  render: function() {
    return (
      <tr>
        {this.props.children}
      </tr>
    );
  }
});

var TileGrid = React.createClass({
  render: function() {
    var rows = [];
    for(var r = 0; r < this.props.numRows; r++) {
      var tiles = [];
      for(var c = 0; c < this.props.numCols; c++) {
        var tile_id = 't' + r + '-' + c;
        tiles.push(<Tile key={tile_id} />);
      }

      var row_id = 'r' + r;
      rows.push(<TileRow key={row_id}>{tiles}</TileRow>);
    }

    return (
      <table id='tilegrid'>
        {rows}
      </table>
    );
  }
});

module.exports = TileGrid;
