define(function(){
	var controller = require("userFBox0e119cfcd4cb943Controller");
	var controllerActions = ["FBox0e119cfcd4cb943ControllerActions"];

	for(var i = 0; i < controllerActions.length; i++){
		var actions = require(controllerActions[i]);
		for(var key in actions){
			controller[key] = actions[key];
		}
	}

	return controller;
})