angular.module("appDemo", ["app.angularGit"])
	.controller("MainController", function($scope, AngularGit){
		var params = {folder: "json", file: "brand"};
		console.log(AngularGit.get(params))
	});

angular.module("app.angularGit", ["ngResource"])
	.factory("AngularGit", function($resource){
		return $resource("http://finix-rsmith.github.io/demoapp/:folder/:file.json")
	})