(function () {
    'use strict';

    /*
    * Clase Arista
    *
    * vertice: Indice del vertice al cual se apunta
    * prob: Probabilidad de la arista
    */

    function Arista(vertice, prob) {
        this.vertice = vertice || 'vertice';
        this.prob = prob || 1.0;
    }
})();