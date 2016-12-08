'use strict';

/*
 * Clase Grafo
 *
 * vertices: Lista de vertices
 * aristas: Lista de listas de aristas
 */

function Grafo() {
    // Atributos
    this.vertices = [];
    this.aristas = [];

    // Getters
    this.getVertice = function (valor) {
        for (var i = 0; i < this.vertices.length; i++)
            if (valor === this.vertices[i].valor)
                return this.vertices[i];
        return null;
    };

    this.getVerticeByIndex = function (index) {
        if (index < 0 || index > this.vertices.length - 1)
            return null;
        return this.vertices[index];
    };

    this.getVerticeIndex = function (vertice) {
        for (var i = 0; i < this.vertices.length; i++)
            if (vertice.valor === this.vertices[i].valor)
                return i;
        return -1;
    };

    this.getArista = function (vOrigen, vDestino) {
        var index = this.getVerticeIndex(vOrigen);
        var aristas = this.aristas[index];
        for (var i = 0; i < aristas.length; i++)
            if(aristas[i].vertice.valor === vDestino.valor)
                return aristas[i];
        return null;
    };

    // Setters
    this.setVerticeCF = function (valor, CF) {
        for (var i = 0; i < this.vertices.length; i++)
            if (valor === this.vertices[i].valor) {
                this.vertices[i].CF = CF;
                return;
            }
    };

    // Metodos

    this.existeVertice = function (vertice) {
        for (var i = 0; i < this.vertices.length; i++)
            if (vertice.valor === this.vertices[i].valor)
                return true;
        return false;
    };

    this.posicionVertice = function (vertice) {
        for (var i = 0; i < this.vertices.length; i++)
            if (vertice.valor === this.vertices[i].valor)
                return i;
        return -1;
    };

    this.posicionVerticeArista = function (indexArista, vertice) {
        var listArista = this.aristas[indexArista];
        for (var i = 0; i < listArista.length; i++)
            if (vertice.valor === listArista[i].vertice.valor)
                return i;
        return -1;
    };

    this.insertarVertice = function (vertice) {
        if (!this.existeVertice(vertice)) {
            this.vertices.push(vertice);
            this.aristas.push([]);
            return true;
        }
        return false;
    };

    this.eliminarVertice = function (vertice) {
        if (this.existeVertice(vertice)) {
            var pos = this.posicionVertice(vertice);
            this.vertices.splice(pos, 1);
            this.aristas.splice(pos, 1);
            for (var i = 0; i < this.aristas.length; i++) {
                var posVertDelete = this.posicionVerticeArista(i, vertice);
                if (posVertDelete != -1)
                    this.aristas[i].splice(posVertDelete, 1);
            }
            return true;
        }
        return false;
    };

    this.existeVerticeArista = function (indexArista, vertice) {
        var listArista = this.aristas[indexArista];
        for (var i = 0; i < listArista.length; i++)
            if (vertice.valor === listArista[i].vertice.valor)
                return true;
        return false;
    };

    this.insertarArista = function (vOrigen, vDestino, prob) {
        if (vOrigen !== null && !this.existeVertice(vOrigen)) return false;
        if (vDestino !== null && !this.existeVertice(vDestino)) return false;
        var pOrigen = this.posicionVertice(vOrigen);
        if (this.existeVerticeArista(pOrigen, vDestino)) return false;

        this.aristas[pOrigen].push(new Arista(vDestino, prob));
        return true;
    };

    this.eliminarArista = function (vOrigen, vDestino) {
        if (vOrigen !== null && !this.existeVertice(vOrigen)) return false;
        if (vDestino !== null && !this.existeVertice(vDestino)) return false;

        var pOrigen = this.posicionVertice(vOrigen);
        if (!this.existeVerticeArista(pOrigen, vDestino)) return false;

        var pVerticeArista = this.posicionVerticeArista(pOrigen, vDestino);
        this.aristas[pOrigen].splice(pVerticeArista, 1);
        return true;
    };
}