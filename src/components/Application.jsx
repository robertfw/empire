/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react'),
    Fluxxor = require('fluxxor'),

    GameMap = require('../GameMap'),

    TileGrid = require('./TileGrid.jsx'),

    WindowSizeWidget = require('./WindowSizeWidget.jsx');

var Application = React.createClass({
  mixins: [Fluxxor.FluxMixin(React)],

  getWindowSize: function() {
    return this.getFlux().store('BrowserSizeStore').getBrowserSize();
  },

  updateWindowSize: function() {
    this.setState(this.getWindowSize());
  },

  getInitialState: function() {
    return this.getWindowSize();
  },

  componentDidMount: function() {
    this.getFlux().store('BrowserSizeStore').on('change', this.updateWindowSize);
  },

  componentWillUnmount: function() {
    this.getFlux().store('BrowserSizeStore').removeListener('change', this.updateWindowSize);
  },

  render: function() {
    var gamemap = new GameMap(100, 100);

    return (
      <div>
        <TileGrid gamemap={gamemap} />
      </div>
    );
  }
});

module.exports = Application;
