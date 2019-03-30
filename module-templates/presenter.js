//namespace object for this app
var {{namespace}} = {{namespace}} || {};

//Presenter module for your app to initialize and controll all other modules

{{namespace}}.{{modulename}} = {{scopeBegin}}function() {
//turning js strict-mode on
  "use strict";

  var that = {}//,
  //your modules to be initialised go here
    ;

  {{initialBegin}}

  //your functions
 {{functions}}   

  //functions to be revealed   
 {{revealingFunctions}}
  {{revealInitial}}
  return that;
}(){{scopeEnd}};
{{initialEnd}}
