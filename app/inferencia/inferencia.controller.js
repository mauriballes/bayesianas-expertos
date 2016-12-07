(function () {
    'use strict';

    angular
        .module('app')
        .controller('Inferencia', InferenciaController);

    InferenciaController.$inject = ['AppService'];
    
    function InferenciaController(AppService) {
        var vm = this;

        vm.message = 'Hello World!';
        vm.red = {};
        
        activate();
        
        function activate() {
            if(AppService.red === null)
                vm.message = 'Cargue la red';
            else
                vm.red = AppService.red;
        }
    }
})();