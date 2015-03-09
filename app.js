angular.module("appDemo", ["app.angularGit"])
	.controller("MainController", function($scope, AngularGit){
		var params2 = {category: "commits", sha: "80e7a4558490f7ffd33d142844b9153a5ed00e86"};
		var params = {category: "commits"};
		console.log(AngularGit.get(params2))
		console.log(AngularGit.query(params))
	});

angular.module("app.angularGit", ["ngResource"])
	.factory("AngularGit", function($resource){
		return $resource("https://api.github.com/repos/angular/angular.js/:category/:sha")
	})