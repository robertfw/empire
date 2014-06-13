/**
 * @jsx React.DOM
 */

'use strict';

var React = require('react'),
    Fluxxor = require('fluxxor'),

    _ = require('lodash'),

    Application = require('./components/Application.jsx'),

    AlertStore = require('./stores/AlertStore'),
    alertActions = require('./actions/AlertActions'),

    BrowserSizeStore = require('./stores/BrowserSizeStore');

//export React to window so that React Dev Tools will show up
window.React = React;

var stores = {
  AlertStore: new AlertStore(),
  BrowserSizeStore: new BrowserSizeStore()
};

var actions = _.extend(
  {},
  alertActions
);

var flux = new Fluxxor.Flux(stores, actions);

//export flux so that we can access it easily from the console
window.flux = flux;

React.renderComponent(<Application flux={flux} />, document.getElementById('react-container'));
