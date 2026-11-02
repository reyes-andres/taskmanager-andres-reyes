// TaskManager - Andrés Reyes Silva
// Programación de Sistemas Web - ECOTEC

// Elementos del HTML (DOM)
const formulario = document.getElementById('formulario');
const tituloFormulario = document.getElementById('titulo-formulario');
const titulo = document.getElementById('titulo');
const prioridad = document.getElementById('prioridad');
const errorTitulo = document.getElementById('error-titulo');
const errorPrioridad = document.getElementById('error-prioridad');
const guardar = document.getElementById('guardar');
const cancelar = document.getElementById('cancelar');
const listaTareas = document.getElementById('lista-tareas');
const estado = document.getElementById('estado');
const aviso = document.getElementById('aviso');

// Arreglo donde se guardan las tareas (let porque va a cambiar)
let tareas = [];

// Id de la tarea que se está editando (null = ninguna)
let idEditando = null;

// ----- localStorage -----

// Guardar las tareas en el navegador
function guardarTareas() {
    localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Leer las tareas guardadas en el navegador
function cargarTareas() {
    const datos = localStorage.getItem('tareas');

    if (datos !== null) {
        tareas = JSON.parse(datos);
    }
}

// ----- Formulario -----

// Revisar que los campos no estén vacíos
function validarFormulario() {
    const texto = titulo.value.trim();
    let mensajeTitulo = '';
    let mensajePrioridad = '';

    if (texto === '') {
        mensajeTitulo = 'Escribe el título de la tarea.';
    } else if (texto.length < 3) {
        mensajeTitulo = 'El título debe tener al menos 3 caracteres.';
    }

    if (prioridad.value === '') {
        mensajePrioridad = 'Selecciona una prioridad.';
    }

    // Mostrar los mensajes y marcar los campos con error
    errorTitulo.textContent = mensajeTitulo;
    errorPrioridad.textContent = mensajePrioridad;
    titulo.classList.toggle('invalido', mensajeTitulo !== '');
    prioridad.classList.toggle('invalido', mensajePrioridad !== '');

    // Poner el cursor en el primer campo con error
    if (mensajeTitulo !== '') {
        titulo.focus();
    } else if (mensajePrioridad !== '') {
        prioridad.focus();
    }

    return mensajeTitulo === '' && mensajePrioridad === '';
}

// Dejar el formulario como al inicio
function limpiarFormulario() {
    formulario.reset();
    errorTitulo.textContent = '';
    errorPrioridad.textContent = '';
    titulo.classList.remove('invalido');
    prioridad.classList.remove('invalido');

    idEditando = null;
    tituloFormulario.textContent = 'Nueva tarea';
    guardar.textContent = 'Agregar';
    cancelar.hidden = true;
}

// ----- CRUD -----

// Crear una tarea nueva y agregarla al arreglo
function agregarTarea() {
    const nuevaTarea = {
        id: Date.now(),
        titulo: titulo.value.trim(),
        prioridad: prioridad.value,
        completada: false,
        fecha: Date.now()
    };

    tareas.push(nuevaTarea);
    guardarTareas();
}

// Pasar los datos de una tarea al formulario para editarla
function prepararEdicion(id) {
    const tarea = tareas.find(function (t) {
        return t.id === id;
    });

    idEditando = id;
    titulo.value = tarea.titulo;
    prioridad.value = tarea.prioridad;

    tituloFormulario.textContent = 'Editar tarea';
    guardar.textContent = 'Guardar cambios';
    cancelar.hidden = false;
    titulo.focus();
}

// Guardar los cambios de la tarea que se está editando
function editarTarea() {
    const tarea = tareas.find(function (t) {
        return t.id === idEditando;
    });

    tarea.titulo = titulo.value.trim();
    tarea.prioridad = prioridad.value;
    guardarTareas();
}

// Marcar o desmarcar una tarea como completada
function cambiarEstado(id) {
    const tarea = tareas.find(function (t) {
        return t.id === id;
    });

    tarea.completada = !tarea.completada;
    guardarTareas();
    mostrarTareas();
}

// Eliminar una tarea por su id
function eliminarTarea(id) {
    const confirmar = confirm('¿Seguro que deseas eliminar esta tarea?');

    if (!confirmar) {
        return;
    }

    tareas = tareas.filter(function (tarea) {
        return tarea.id !== id;
    });

    // Si se estaba editando esa tarea, limpiar el formulario
    if (id === idEditando) {
        limpiarFormulario();
    }

    guardarTareas();
    mostrarTareas();
}

// ----- Mostrar en la página -----

// Dibujar la lista de tareas en la página
function mostrarTareas() {
    listaTareas.innerHTML = '';

    // Si no hay tareas, mostrar el mensaje
    if (tareas.length === 0) {
        estado.textContent = 'No hay tareas para mostrar.';
        estado.hidden = false;
        return;
    }

    estado.hidden = true;

    tareas.forEach(function (tarea) {
        const li = document.createElement('li');
        li.classList.add('tarea');

        if (tarea.completada) {
            li.classList.add('completada');
        }

        const fecha = new Date(tarea.fecha).toLocaleString('es-EC');

        li.innerHTML = `
      <input type="checkbox" aria-label="Marcar como completada">
      <div class="tarea-info">
        <p class="tarea-titulo"></p>
        <small>Creada: ${fecha}</small>
      </div>
      <span class="etiqueta ${tarea.prioridad.toLowerCase()}">${tarea.prioridad}</span>
      <button type="button" class="btn-editar">Editar</button>
      <button type="button" class="btn-eliminar">Eliminar</button>
    `;

        // El título se escribe con textContent
        li.querySelector('.tarea-titulo').textContent = tarea.titulo;

        const check = li.querySelector('input');
        check.checked = tarea.completada;

        check.addEventListener('change', function () {
            cambiarEstado(tarea.id);
        });

        li.querySelector('.btn-editar').addEventListener('click', function () {
            prepararEdicion(tarea.id);
        });

        li.querySelector('.btn-eliminar').addEventListener('click', function () {
            eliminarTarea(tarea.id);
        });

        listaTareas.appendChild(li);
    });
}

// ----- Eventos -----

// Evento del formulario: agregar o editar
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    if (!validarFormulario()) {
        return;
    }

    if (idEditando === null) {
        agregarTarea();
    } else {
        editarTarea();
    }

    limpiarFormulario();
    mostrarTareas();
    titulo.focus();
});

// Botón cancelar: salir del modo edición
cancelar.addEventListener('click', function () {
    limpiarFormulario();
});

// Al cargar la página: leer localStorage y mostrar
cargarTareas();
mostrarTareas();