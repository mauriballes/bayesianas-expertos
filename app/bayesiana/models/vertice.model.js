'use strict';

/*
 * Clase Vertice
 *
 * valor: Nombre del Vertice
 * CF: Factor de certeza
 */

function Vertice(id, valor, CF) {
    this.id = id || 0;
    this.valor = valor || 'vertice';
    this.CF = CF || 1.0;
}