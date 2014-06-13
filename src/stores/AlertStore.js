'use strict';

var Fluxxor = require('fluxxor');

var AlertStore = Fluxxor.createStore({

  initialize: function(options) {
    this.alerts = options.alerts || [];
    this.bindActions('ALERT:ADD', this.onAddAlert);
  },

  onAddAlert: function(payload) {
    this.alerts.push(payload);
    this.emit("change");
  },

  getAlerts: function() {
    return this.alerts;
  },
});

module.exports = AlertStore;
