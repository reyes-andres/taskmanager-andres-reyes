# TaskManager

**Estudiante:** Andrés Reyes Silva
**Carrera:** Ingeniería en Sistemas Inteligentes - Universidad ECOTEC
**Asignatura:** Programación de Sistemas Web

## Descripción

TaskManager es una aplicación para gestionar tareas hecha con HTML, CSS y JavaScript puro
(sin librerías ni frameworks). Permite crear, editar, eliminar y marcar tareas como
completadas. Las tareas se guardan en el navegador con `localStorage`, por eso la
aplicación sigue funcionando aunque no haya internet.

La primera vez que se abre, si no hay tareas guardadas, carga 10 tareas de prueba desde la
API de JSONPlaceholder.

## Funcionalidades

- Crear, editar, eliminar y completar tareas, con validación de campos vacíos.
- Filtro por estado: Todas, Pendientes y Completadas.
- Búsqueda en tiempo real por título.
- Orden por fecha (más recientes / más antiguas) o por prioridad (Alta, Media, Baja).
- Dashboard con el total de tareas, pendientes y completadas.
- Carga inicial desde la API con `fetch` y `async/await`.
- Aviso en pantalla si falla la conexión con la API (`try/catch`).
- Guardado en `localStorage` con `JSON.stringify()` y lectura con `JSON.parse()`.

## Componente de investigación: Opción B - CustomEvent

Cada vez que las tareas cambian, la aplicación lanza un evento personalizado llamado
`tareasActualizadas` con `new CustomEvent()` y `dispatchEvent()`. El dashboard escucha ese
evento con `addEventListener()` y actualiza sus números solo, sin que las funciones del CRUD
tengan que llamarlo directamente.

## Tecnologías utilizadas

- HTML5
- CSS3 (variables, flexbox y media queries)
- JavaScript (ES6+): eventos del DOM, métodos de arreglos, `fetch`, `async/await`,
  `localStorage` y `CustomEvent`
- Git y GitHub

## Cómo ver el proyecto

1. Descargar o clonar el repositorio:
   ```
   git clone https://github.com/reyes-andres/taskmanager-andres-reyes.git
   ```
2. Abrir la carpeta `taskmanager-andres-reyes`.
3. Hacer doble clic en `index.html` para abrirlo en el navegador.

## Estructura

```
taskmanager-andres-reyes/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── README.md
└── AI_DECLARATION.md
```

## Referencias

- Material de clase de Programación de Sistemas Web (ECOTEC): Introducción a JavaScript,
  guía de validaciones de formularios y práctica de consumo de APIs.
- MDN Web Docs - Usar promesas: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises
- MDN Web Docs - Fetch API: https://developer.mozilla.org/es/docs/Web/API/Fetch_API
- MDN Web Docs - localStorage: https://developer.mozilla.org/es/docs/Web/API/Window/localStorage
- MDN Web Docs - CustomEvent: https://developer.mozilla.org/es/docs/Web/API/CustomEvent
- JSONPlaceholder: https://jsonplaceholder.typicode.com/