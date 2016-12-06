'use strict';

/*
 * Clase BayesianNetwork
 */

function BayesianNetwork(container) {
    this.grafo = new Grafo();
    this.container = container;
    this.nodes = new vis.DataSet({});
    this.edges = new vis.DataSet({});
    this.red = new vis.Network(this.container, {nodes: this.nodes, edges: this.edges}, {});
    var id_nodes = 0;

    this.refreshData = function () {
        this.red.setData({nodes: this.nodes, edges: this.edges});
    };

    this.addVertice = function (valor, CF) {
        id_nodes++;
        var vertice = new Vertice(id_nodes, valor, CF);

        var result = this.grafo.insertarVertice(vertice);

        if (result) {
            this.nodes.add({id: id_nodes, label: vertice.valor});
        } else {
            id_nodes--;
        }
    };

    this.addArista = function (vOrigen, vDestino, prob) {
        var result = this.grafo.insertarArista(vOrigen, vDestino, prob);
        var idOrigen = this.grafo.getVertice(vOrigen).id;
        var idDestino = this.grafo.getVertice(vDestino).id;

        if (result) {
            this.edges.add({from: idOrigen, to: idDestino});
        }
    };

    this.redibujar = function () {
        this.red.redraw();
    };

    this.cargaAcme = function () {
        this.addVertice('Node 1', 0.7);
        this.addVertice('Node 2', 0.7);
        this.addVertice('Node 3', 0.7);
        this.addVertice('Node 4', 0.7);
        this.addVertice('Node 5', 0.7);

        this.addArista('Node 1', 'Node 3', 0.5);
        this.addArista('Node 1', 'Node 2', 0.5);
        this.addArista('Node 2', 'Node 4', 0.5);
        this.addArista('Node 2', 'Node 5', 0.5);

        this.refreshData();
        this.redibujar();
    };
}