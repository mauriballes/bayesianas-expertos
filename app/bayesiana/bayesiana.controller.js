(function () {
    'use strict';

    angular
        .module('app')
        .controller('Bayesiana', BayesianaController);

    BayesianaController.$inject = [];

    function BayesianaController() {
        var vm = this;

        vm.title = 'Hello World!';
        // vm.nodes = new vis.DataSet([
        // 	{id: 1, label: 'Node 1'},
        // 	{id: 2, label: 'Node 2'},
        // 	{id: 3, label: 'Node 3'},
        // 	{id: 4, label: 'Node 4'},
        // 	{id: 5, label: 'Node 5'}
        // 	]);
        // vm.edges = new vis.DataSet([
        // 	{from: 1, to: 3},
        // 	{from: 1, to: 2},
        // 	{from: 2, to: 4},
        // 	{from: 2, to: 5}
        // 	]);
        vm.container = document.getElementById('mynetwork');
        // var data = {
        // 	nodes: vm.nodes,
        // 	edges: vm.edges
        // };
        // var options = {};
        // vm.network = new vis.Network(vm.container, data, options);
        vm.red = new BayesianNetwork(vm.container);

        vm.metodo = miMetodo;

        activate();

        function activate() {
            // Hacer algo en el constructor
            vm.red.cargaAcme();
            console.log(vm.red);
        }

        function miMetodo() {
            // Rellenar con codigo
        }
    }
})();