angular.module('appDemo', ['app.angularGit'])
	.controller('MainController', function($scope, AngularGit){
		var params = {file: 'brand'}
		console.log(AngularGit.query(params))
	});

angular.module('app.angularGit', ['ngResource'])
	.factory('AngularGit', function($resource){
		return $resource('json/:file.json')
	});