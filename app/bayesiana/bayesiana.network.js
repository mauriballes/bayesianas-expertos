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

    this.addVertice = function (valor) {
        id_nodes++;
        var vertice = new Vertice(id_nodes, valor);

        var result = this.grafo.insertarVertice(vertice);

        if (result) {
            this.nodes.add({id: id_nodes, label: vertice.valor, color: '#01579B', font: {color: 'white'}});
        } else {
            id_nodes--;
        }
    };

    this.deleteVertice = function (valor) {
        var result = this.grafo.eliminarVertice(new Vertice(0, valor));

        if (result)
            this.rebuild();
    };

    this.addArista = function (vOrigen, vDestino, prob) {
        var result = this.grafo.insertarArista(new Vertice(0, vOrigen), new Vertice(0, vDestino), prob);
        var idOrigen = this.grafo.getVertice(vOrigen).id;
        var idDestino = this.grafo.getVertice(vDestino).id;
        if (result) {
            this.edges.add({from: idOrigen, to: idDestino, arrows: 'to', label: prob});
        }
    };

    this.deleteArista = function (vOrigen, vDestino) {
        var result = this.grafo.eliminarArista(new Vertice(0, vOrigen), new Vertice(0, vDestino));

        if (result)
            this.rebuild();
    };

    this.rebuild = function () {
        // Funcion para reconstruir los atributos nodes y edges a partir del grafo
    };

    this.redibujar = function () {
        this.red.redraw();
    };

    this.cargaAcme = function () {
        this.addVertice('A');
        this.addVertice('B');
        this.addVertice('C');
        this.addVertice('Q');
        this.addVertice('P');
        this.addVertice('M');

        this.addArista('A', 'Q', 0.5);
        this.addArista('B', 'Q', 0.5);
        this.addArista('B', 'P', 0.5);
        this.addArista('C', 'P', 0.5);
        this.addArista('Q', 'M', 0.5);
        this.addArista('P', 'M', 0.5);

        this.refreshData();
        this.redibujar();
    };
}