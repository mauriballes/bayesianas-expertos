(function () {
    'use strict';

    angular
        .module('app')
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/bayesiana/bayesiana.html',
                controller: 'Bayesiana',
                controllerAs: 'vm'
            })
            .when('/inferir',{
                templateUrl: 'app/inferencia/inferencia.html',
                controller: 'Inferencia',
                controllerAs: 'vm'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();