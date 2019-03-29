//namespace object for this app
var {{namespace}} = {{namespace}} || {};

//Standard module for your app

{{namespace}}.{{modulename}} = {{scopeBegin}}function() {
  //turning js strict-mode on
  "use strict";

  var that = new EventTarget()//,
  //your components go here..
  ;

  //your functions
  {{functions}}  
     
  //functions to be revealed   
  {{revealingFunctions}}
  return that;
}(){{scopeEnd}};
