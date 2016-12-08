(function () {
    'use strict';

    angular
        .module('app')
        .controller('Inferencia', InferenciaController);

    InferenciaController.$inject = ['AppService'];

    function InferenciaController(AppService) {
        var vm = this;

        vm.message = 'Inferencia!';
        vm.red = {};
        vm.metas = [];

        activate();

        vm.getMetas = getMetas;
        vm.getCFsMetas = getCFsMetas;

        function activate() {
            if (AppService.red === null)
                vm.message = 'Cargue la red para la inferencia...';
            else {
                vm.red = AppService.red;
                vm.red.grafo.cleanCFs();
            }
        }

        function getMetas() {
            vm.metas = vm.red.getMetas();
        }

        function getCFsMetas() {
            for (var i = 0; i < vm.metas.length; i++) {
                vm.metas[i].CF = vm.red.getCF(vm.metas[i]);
            }
        }
    }
})();