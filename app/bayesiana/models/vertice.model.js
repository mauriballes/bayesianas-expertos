(function () {
    'use strict';

    /*
    * Clase Vertice
    *
    * valor: Nombre del Vertice
    * CF: Factor de certeza
    */

    function Vertice(valor, CF) {
        this.valor = valor || 'vertice';
        this.CF = CF || 1.0;
    }
})();