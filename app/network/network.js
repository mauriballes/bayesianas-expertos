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

    this.getAdy = function (vertice) {
        // Devuelve los vertices entrantes al vertice en un vector
        var aristas = this.grafo.aristas;
        var vect = [];

        for (var i = 0; i < aristas.length; i++) {
            var aristaVect = aristas[i];
            for (var j = 0; j < aristaVect.length; j++) {
                if (vertice.valor === aristaVect[j].vertice.valor) {
                    vect.push(this.grafo.getVerticeByIndex(i));
                    break;
                }
            }
        }
        return vect;
    };

    this.isHecho = function (vertice) {
        // Valida si el vertice es Hecho Nativo
        if ((this.getAdy(vertice)).length === 0)
            return true;
        return false;
    };

    this.CFHecho = function (vertice) {
        // Cuando el vertice es hecho, devuelve el cf dado por el cliente
        var dato = prompt('Inserte Factor de Certeza:', 0.5);
        var value = 0.0;
        if (dato !== null && typeof dato == 'number')
            value = dato;
        this.grafo.setVerticeCF(vertice.valor, value);
        return value;
    };

    this.getProb = function (vOrigen, vDestino) {
        // Devuelve la probabilidad de un arista
        var arista = this.grafo.getArista(vOrigen, vDestino);
        if (arista !== null)
            return arista.prob;
        else
            return 0.0;
    };

    this.getCF = function (vertice) {
        // Devuelve el CF calculado de un vertice
        if (this.isHecho(vertice)) return this.CFHecho(vertice);
        var v = this.getAdy(vertice);
        var ac = 0.0;
        for (var i = 0; i < v.length; i++)
            ac += (this.getCF(v[i]) * this.getProb(v[i]));
        return ac;
    };

    this.getMetas = function () {
        var vertices = this.grafo.vertices;
        var metas = [];
        for (var i = 0; i < vertices.length; i++) {
            var index = this.grafo.getVerticeIndex(vertices[i]);
            if (this.grafo.aristas[index].length === 0)
                metas.push(vertices[i]);
        }
        return metas;
    };

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
        var vertOrigen = this.grafo.getVertice(vOrigen);
        var vertDestino = this.grafo.getVertice(vDestino);
        var result = this.grafo.insertarArista(vertOrigen, vertDestino, prob);
        if (result) {
            this.edges.add({from: vertOrigen.id, to: vertDestino.id, arrows: 'to', label: prob});
        }
    };

    this.deleteArista = function (vOrigen, vDestino) {
        var result = this.grafo.eliminarArista(new Vertice(0, vOrigen), new Vertice(0, vDestino));

        if (result)
            this.rebuild();
    };

    this.rebuild = function () {
        // Funcion para reconstruir los atributos nodes y edges a partir del grafo
        this.edges.clear();
        this.nodes.clear();

        // Reconstruir los Vertices
        var vertices = this.grafo.vertices;
        for (var i = 0; i < vertices.length; i++)
            this.nodes.add({id: vertices[i].id, label: vertices[i].valor, color: '#01579B', font: {color: 'white'}});

        // Reconstruir las aristas
        var aristas = this.grafo.aristas;
        for (var i = 0; i < aristas.length; i++) {
            // Obtener aristas de un vertice
            var aristasVertice = aristas[i];
            for (var j = 0; j < aristasVertice.length; j++) {
                var idOrigen = vertices[i].id;
                var idDestino = aristasVertice[j].vertice.id;
                this.edges.add({from: idOrigen, to: idDestino, arrows: 'to', label: aristasVertice[j].prob});
            }
        }
    };

    this.redibujar = function () {
        this.red.redraw();
    };

    this.restart = function (container) {
        this.container = container;
        this.red = new vis.Network(this.container, {nodes: this.nodes, edges: this.edges}, {});
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
    };
}