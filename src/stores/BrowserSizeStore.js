'use strict';

var Fluxxor = require('fluxxor');

var BrowserSizeStore = Fluxxor.createStore({

  initialize: function(options) {
    this.data = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };

    window.addEventListener('resize', this.handleResize);
  },

  handleResize: function(e) {
    this.data = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    };

    this.emit('change');
  },

  getBrowserSize: function() {
    return this.data;
  }
});

module.exports = BrowserSizeStore;
