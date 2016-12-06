(function () {
    'use strict';

    angular
        .module('app')
        .controller('Bayesiana', BayesianaController);

    BayesianaController.$inject = [];

    function BayesianaController() {
        var vm = this;

        vm.title = 'Hello World!';
        vm.container = document.getElementById('mynetwork');
        vm.red = new BayesianNetwork(vm.container);

        vm.metodo = miMetodo;

        activate();

        function activate() {
            // Hacer algo en el constructor
            vm.red.cargaAcme();
        }

        function miMetodo() {
            // Rellenar con codigo
        }
    }
})();