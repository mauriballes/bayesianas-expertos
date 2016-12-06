(function () {
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

        // Metodos
        this.existeVertice = existeVertice;
        this.posicionVertice = posicionVertice;
        this.posicionVerticeArista = posicionVerticeArista;
        this.insertarVertice = insertarVertice;
        this.eliminarVertice = eliminarVertice;

        this.existeVerticeArista = existeVerticeArista;
        this.insertarArista = insertarArista;
        this.eliminarArista = eliminarArista;

        function existeVertice(vertice) {
            for (var i = 0; i < this.vertices.length; i++)
                if (vertice.valor === this.vertices[i].valor)
                    return true;
            return false;
        }

        function posicionVertice(vertice) {
            for (var i = 0; i < this.vertices.length; i++)
                if (vertice.valor === this.vertices[i].valor)
                    return i;
            return -1;
        }

        function posicionVerticeArista(indexArista, vertice) {
            var listArista = this.aristas[indexArista];
            for (var i = 0; i < listArista.length; i++)
                if (vertice.valor === listArista[i].vertice)
                    return i;
            return -1;
        }

        function insertarVertice(vertice) {
            if (!existeVertice(vertice)) {
                this.vertices.push(vertice);
                this.aristas.push([]);
            }
        }

        function eliminarVertice(vertice) {
            if (existeVertice(vertice)) {
                var pos = posicionVertice(vertice);
                this.vertices.splice(pos, 1);
                this.aristas.splice(pos, 1);
                for (var i = 0; i < this.aristas.length; i++) {
                    var posVertDelete = posicionVerticeArista(i, vertice);
                    if (posVertDelete != -1)
                        this.aristas[i].splice(posVertDelete, 1);
                }
            }
        }

        function existeVerticeArista(indexArista, vertice) {
            var listArista = this.aristas[indexArista];
            for (var i = 0; i < listArista.length; i++)
                if (vertice.valor === listArista[i].vertice)
                    return true;
            return false;
        }
        
        function insertarArista(vOrigen, vDestino, prob) {
            if(!existeVertice(vOrigen)) return;
            if(!existeVertice(vDestino)) return;

            var pOrigen = posicionVertice(vOrigen);
            if(existeVerticeArista(pOrigen, vDestino)) return;

            this.aristas[pOrigen].push(new Arista(vDestino, prob));
        }
        
        function eliminarArista(vOrigen, vDestino) {
            if(!existeVertice(vOrigen)) return;
            if(!existeVertice(vDestino)) return;

            var pOrigen = posicionVertice(vOrigen);
            if(!existeVerticeArista(pOrigen, vDestino)) return;
            var pVerticeArista = posicionVerticeArista(pOrigen, vDestino);
            this.aristas[pOrigen].splice(pVerticeArista, 1);
        }
    }
})();