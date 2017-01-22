define(function(){
    //Core Module
    var coreModule = angular.module("coreModule",["ngRoute", "ui.router"]);
	//Loading all angular components defined in appReferences file
	require(['app-scripts/appReferences'], function(references) {
		require(references, function(){
			//Bootstraping angular to the document
			angular.bootstrap(document, ["coreModule"]);
		});
	});
})