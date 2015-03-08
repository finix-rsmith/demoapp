var app = angular.module('appDemo', ['angularGit']);

app.controller('MainController', function($scope, AngularGit){
	var params = {file: 'brand'}
	console.log(AngularGit.query(params));
});

angular.module('angularGit', ['ngResource'])
	.factory('AngularGit', function($resource){
		return $resource('json/:file.json')
	})