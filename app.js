// TaskManager - Andrés Reyes Silva
// Programación de Sistemas Web - ECOTEC

// Elementos del HTML (DOM)
const formulario = document.getElementById('formulario');
const titulo = document.getElementById('titulo');
const prioridad = document.getElementById('prioridad');
const errorTitulo = document.getElementById('error-titulo');
const errorPrioridad = document.getElementById('error-prioridad');
const guardar = document.getElementById('guardar');
const cancelar = document.getElementById('cancelar');
const listaTareas = document.getElementById('lista-tareas');
const estado = document.getElementById('estado');
const aviso = document.getElementById('aviso');

// Arreglo donde se guardan las tareas
let tareas = [];

console.log('TaskManager cargado');