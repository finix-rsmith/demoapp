angular.module("appDemo", ["app.angularGit"])
	.controller("MainController", function($scope, AngularGit){
		var params = {category: "commits"};
		console.log(AngularGit.query(params))
	});

angular.module("app.angularGit", ["ngResource"])
	.factory("AngularGit", function($resource){
		return $resource("https://api.github.com/repos/angular/angular.js/:category/:sha")
	})