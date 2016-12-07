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
        vm.removeVertice = removeVertice;
        vm.removeArista = removeArista;

        activate();

        function activate() {
            // Obtener la red
            if (AppService.red === null) {
                vm.red = new BayesianNetwork(vm.container);
                vm.red.cargaAcme();

                AppService.red = vm.red;
            } else{
                vm.red = AppService.red;
                vm.red.rebuild();
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

        function removeVertice() {
            vm.red.deleteVertice(vm.vertice.valor);
            vm.red.refreshData();
            vm.red.redibujar();
        }

        function removeArista() {
            vm.red.deleteArista(vm.arista.vOrigen, vm.arista.vDestino);
            vm.red.refreshData();
            vm.red.redibujar();
        }
    }
})();