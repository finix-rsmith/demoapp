angular.module("appDemo", ["app.angularGit"])
	.controller("MainController", function($scope, AngularGit){
		var brand = {file: "brand.json"};
		var web = {file: "web.json"};
		console.log(AngularGit.get(brand))
		console.log(AngularGit.get(web))
		console.log(AngularGit.query(web))
	});

angular.module("app.angularGit", ["ngResource"])
	.factory("AngularGit", function($resource){
		return $resource("json/:file")
	});