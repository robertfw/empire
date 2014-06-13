/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react'),
    Fluxxor = require('fluxxor');

var Application = React.createClass({
  mixins: [Fluxxor.FluxMixin(React)],

  render: function() {
    return (
      <h1>EMPIRE: WARGAME OF THE CENTURY</h1>
    );
  }
});

module.exports = Application;
