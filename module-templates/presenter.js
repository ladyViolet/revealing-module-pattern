//namespace object for this app
var {{namespace}} = {{namespace}} || {};

//Presenter module for your app to initialize and controll all other modules

{{namespace}}.{{modulename}} = (function() {
//turning js strict-mode on
  "use strict";

  var that = {}//,
  //your modules to be initialised go here
    ;


  function init() {
    //initModule1();
    //..
  }

  //your functions

  //if init is true
  //that.init = init;
  return that;
}());
//if init is true
//{{namespace}}.{{modulename}}.init();
