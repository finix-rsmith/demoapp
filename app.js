angular.module("appDemo", ["app.angularGit"])
	.controller("MainController", function($scope, AngularGit){
		var params = {folder: "json"};
		var params2 = {folder: "json", product: "brand"};
		console.log(AngularGit.query(params))
		console.log(AngularGit.get(params2))
	});

angular.module("app.angularGit", ["ngResource"])
	.factory("AngularGit", function($resource){
		return $resource("http://finix-rsmith.github.io/demoapp/:folder/:product")
	})