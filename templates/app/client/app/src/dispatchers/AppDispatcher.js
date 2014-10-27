'use strict';

/*ReadMe:
  Dispatchers operates as the central hub of data flow in a Flux application.
  They organize events into a single flow and ensure dependencies are taken care
  of at the right time before events continue to process.  Dispatchers act as a
  bridge function between user events/ web APIs and the stores so that the correct 
  changes can be made.
*/


var Dispatcher = require('flux').Dispatcher;
var copyProperties = require('react/lib/copyProperties');
var AppDispatcher = copyProperties(new Dispatcher(), {

  handleViewAction: function(action) {
    return this.dispatch({
      source: 'VIEW_ACTION',
      action: action
    });
  }

});

module.exports = AppDispatcher;
