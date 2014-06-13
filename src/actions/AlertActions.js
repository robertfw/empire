"use strict";

var actions = {
  addAlert: function(alert) {
    this.dispatch('ALERT:ADD', alert);
  }
};

module.exports = actions;
