(function(){
	'use strict';

	angular
		.module('app')
		.config(config);

	function config($routeProvider){
		$routeProvider
        .when('/', {
            templateUrl: 'app/bayesiana/bayesiana.html',
            controller: 'Bayesiana',
            controllerAs: 'vm'
        });
	}
})();