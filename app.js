angular.module('appDemo', ['app.angularGit'])
	.controller('MainController', function($scope, AngularGit){
		var params = {'file': 'brand.json'}
		console.log(AngularGit.get(params))
		console.log(AngularGit.query())
	});

angular.module('app.angularGit', ['ngResource'])
	.factory('AngularGit', function($resource){
		return $resource('json/:file')
	});