'use strict';

/*
 * Clase Arista
 *
 * vertice: Indice del vertice al cual se apunta
 * prob: Probabilidad de la arista
 */

function Arista(vertice, prob) {
    this.vertice = vertice || null;
    this.prob = prob || 0.0;
}