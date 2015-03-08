var app = angular.module('appDemo', ['angularGit']);

app.controller('MainController', function($scope, AngularGit){
	var params = {file: 'brand'};//, sha: '80e7a4558490f7ffd33d142844b9153a5ed00e86'}
	//console.log(AngularGit.get(params))
	console.log(AngularGit.query(params))
});

angular.module('angularGit', ['ngResource'])
	.factory('AngularGit', function($resource){
		return $resource('json/:file.json')
	})