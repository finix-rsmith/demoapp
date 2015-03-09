angular.module("appDemo", ["app.angularGit"])
	.controller("MainController", function($scope, AngularGit){
		var params = {folder: "products"};
		var params2 = {folder: "products", product: "brand"};
		console.log(AngularGit.query(params))
		console.log(AngularGit.get(params2))
	});

angular.module("app.angularGit", ["ngResource"])
	.factory("AngularGit", function($resource){
		return $resource("http://www.finixcreative.com/reboot/app/pages/products/:folder/:product")
	})