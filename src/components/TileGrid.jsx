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

    var margin_adjustment = 0.9;
    var visible_rows = Math.floor(this.props.windowHeight * margin_adjustment / Tile.TILE_SIZE);
    var visible_cols = Math.floor(this.props.windowWidth * margin_adjustment / Tile.TILE_SIZE);

    var r_start, r_end, c_start, c_end;
    if(this.props.cursor_r + visible_rows > this.props.gamemap.rows) {
      r_start = this.props.gamemap.height - visible_rows;
      r_end = this.props.gamemap.height;
    } else {
      r_start = this.props.cursor_r;
      r_end = r_start + visible_rows;
    }

    if(this.props.cursor_c + visible_cols > this.props.gamemap.cols) {
      c_start = this.props.gamemap.width - visible_cols;
      c_end = this.props.gamemap.width;
    } else {
      c_start = this.props.cursor_c;
      c_end = c_start + visible_cols;
    }

    console.log(r_start, r_end, c_start, c_end);

    var cursor_key = 'c' + this.props.cursor_c + '-' + this.props.cursor_r;
    var rows = [];
    for(var r = r_start; r <= r_end; r++) {
      var row = this.props.gamemap.map[r];
      var tiles = [];
      for(var c = c_start; c <= c_end; c++) {
        var cell = row[c];

        var tile_key = cursor_key + 't' + r + '-' + c;
        tiles.push(<Tile key={tile_key} cell={cell}/>);
      }
      var row_key = cursor_key + 'r' + r;
      rows.push(<TileRow key={row_key}>{tiles}</TileRow>);
    }

    return (
      <table style={style}>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});

module.exports = TileGrid;
