(function () {
    'use strict';

    angular
        .module('app')
        .controller('Bayesiana', BayesianaController);

    BayesianaController.$inject = ['AppService'];

    function BayesianaController(AppService) {
        var vm = this;

        vm.container = document.getElementById('mynetwork');
        vm.red = {};

        vm.vertice = {};
        vm.arista = {};

        vm.reload = reload;
        vm.addVertice = addVertice;
        vm.addArista = addArista;

        activate();

        function activate() {
            // Obtener la red
            if (AppService.red === null) {
                vm.red = new BayesianNetwork(vm.container);
                vm.red.cargaAcme();

                AppService.red = vm.red;
            } else{
                vm.red = AppService.red;
            }
            vm.reload();
        }

        function reload() {
            vm.red.refreshData();
            vm.red.redibujar();
        }

        function addVertice() {
            vm.red.addVertice(vm.vertice.valor);
            vm.red.refreshData();
            vm.red.redibujar();
        }

        function addArista() {
            vm.red.addArista(vm.arista.vOrigen, vm.arista.vDestino, vm.arista.prob);
            vm.red.refreshData();
            vm.red.redibujar();
        }
    }
})();