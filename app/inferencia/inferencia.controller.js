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
        
        activate();
        
        function activate() {
            if(AppService.red === null)
                vm.message = 'Cargue la red para la inferencia...';
            else
                vm.red = AppService.red;
        }
    }
})();