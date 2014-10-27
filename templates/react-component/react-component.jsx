/** @jsx React.DOM */

'use strict';
/*ReadMe:
  Components are where you will be designing your view in the
  render section.  This code is written in jsx; <this.props.activeRouteHandler/>
  is used below for changing views for routing.  

  To add components, you can run react-fullstack:component, and it will create a new component file in the folder.
*/

var React = require('react');

var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');


function getAppState(){
  return AppStore.getData();
};

var <?? classifiedComponentName ?> = React.createClass({
  getInitialState: function(){
    return getAppState();
  },

  _onChange: function(){
    this.setState(getAppState());
  },

  componentDidMount: function(){
    AppStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function(){
    AppStore.removeChangeListener(this._onChange);
  },

  handleClick: function(){
    AppActions.exampleAction('Data from View');
  },
  
  render: function(){
    return (
      <div>
      </div>
    )
  }
})

module.exports = <?? classifiedComponentName ?>;
