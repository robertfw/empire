/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react'),
    Fluxxor = require('fluxxor'),

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
    return (
      <div>
        <TileGrid
          gamemap={this.props.gamemap}
          windowWidth={this.state.windowWidth}
          windowHeight={this.state.windowHeight}
          cursor_r={0}
          cursor_c={0}
        />
      </div>
    );
  }
});

module.exports = Application;
