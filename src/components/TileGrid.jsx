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
    var td_style = {
        margin: 0,
        padding: 0,
    };

    var div_style = {
        width: 16,
        height: 16,
        margin: 0,
        padding: 0
    };

    if(this.props.cell.terrain === '~') {
      div_style.backgroundColor = 'blue';
    } else if (this.props.cell.terrain === '.') {
      div_style.backgroundColor = 'green';
    }

    return (
      <td style={td_style}><div style={div_style}></div></td>
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
    var style = {
      position: 'absolute',
      top: 0,
      left: 0,
      border: 'none',
      borderCollapse: 'collapse',
      tableLayout: 'fixed'
    };

    var rows = [];
    for(var r in this.props.gamemap.map) {
      var row = this.props.gamemap.map[r];
      var tiles = [];
      for(var c in row) {
        var cell = row[c];

        var tile_id = 't' + r + '-' + c;
        tiles.push(<Tile key={tile_id} cell={cell}/>);
      }
      var row_id = 'r' + r;
      rows.push(<TileRow key={row_id}>{tiles}</TileRow>);
    }

    return (
      <table style={style}>
        {rows}
      </table>
    );
  }
});

module.exports = TileGrid;
