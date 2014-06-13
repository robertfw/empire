/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react'),
    Fluxxor = require('fluxxor');

var WindowSizeWidget = React.createClass({
  mixins: [Fluxxor.FluxChildMixin(React), Fluxxor.StoreWatchMixin("BrowserSizeStore")],

  getStateFromFlux: function() {
    return this.getFlux().store('BrowserSizeStore').getBrowserSize();
  },

  render: function() {
    return (
      <div>({this.state.windowWidth}, {this.state.windowHeight})</div>
    );
  }
});

module.exports = WindowSizeWidget;
