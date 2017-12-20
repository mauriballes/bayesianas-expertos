(function () {
    'use strict';

    /*
     * Servicio para obtener
     * el objeto Bayesiana Network
     */

    angular
        .module('app')
        .factory('AppService', AppService);

    AppService.$inject = [];

    function AppService() {
        return {
            red: null
        }
    }
})();