/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react'),
    Fluxxor = require('fluxxor');

var Alert = React.createClass({
  render: function() {
    var classes = "alert alert-dismissable alert-" + this.props.type;
    return (
      <div className={classes}>
        <button type="button" className="close" data-dismiss="alert" aria-hidden="true">x</button>
        <h4>
          {this.props.title}
        </h4>
        {this.props.message}
      </div>
    );
  }
});

var Alerts = React.createClass({
  mixins: [Fluxxor.FluxChildMixin(React), Fluxxor.StoreWatchMixin('AlertStore')],

  getStateFromFlux: function() {
    return {
      alerts: this.getFlux().store('AlertStore').getAlerts()
    };
  },

  render: function () {
    var alerts = this.state.alerts.map(function(alert) {
      return <Alert key={alert.message} title={alert.title} message={alert.message} type={alert.type} />;
    });

    return (
      <div className="row clearfix">
        <div className="col-md-10 col-md-offset-1">
          {alerts}
        </div>
      </div>
    );
  }

});

module.exports = Alerts;
