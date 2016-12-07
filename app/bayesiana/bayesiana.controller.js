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

        vm.vertice = {};
        vm.arista = {};

        vm.addVertice = addVertice;
        vm.addArista = addArista;

        activate();

        function activate() {
            vm.red.cargaAcme();
        }

        function addVertice() {
            vm.red.addVertice(vm.vertice.valor);
            vm.red.refreshData();
            vm.red.redibujar();
        }
        
        function addArista() {
            vm.red.addArista(vm.arista.vOrigen,vm.arista.vDestino,vm.arista.prob);
            vm.red.refreshData();
            vm.red.redibujar();
        }
    }
})();