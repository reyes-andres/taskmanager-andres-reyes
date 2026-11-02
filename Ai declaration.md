# Declaración de uso de Inteligencia Artificial

**Estudiante:** Andrés Reyes Silva
**Proyecto:** TaskManager - Programación de Sistemas Web (ECOTEC)

## Resumen de mi trabajo

Para desarrollar el proyecto, organicé el trabajo por etapas y definí la estructura que
seguiría en cada commit. También reuní los materiales utilizados durante las clases y los
tomé como referencia para mantener el código acorde con lo aprendido en la materia. Para el
componente de investigación elegí la Opción B (CustomEvent).

Creé y organicé el repositorio, preparé la estructura de carpetas y fui integrando cada
funcionalidad de manera progresiva, realizando los commits y el push desde mi computadora.
Después de cada etapa realicé pruebas en el navegador para comprobar el funcionamiento del
CRUD, `localStorage`, la API, los filtros, la búsqueda y el dashboard.

Además, utilicé las herramientas de desarrollo del navegador para revisar los datos
almacenados, probar el comportamiento de la aplicación sin conexión y detectar errores.
Durante este proceso identifiqué varios problemas, realicé los ajustes necesarios y
verifiqué nuevamente el funcionamiento de la aplicación.

## 1. ¿Qué herramientas de IA utilicé y en qué momentos?

Utilicé **Claude** (de Anthropic) como apoyo en tres momentos:

- **Planificación:** para analizar las instrucciones y ordenar las etapas de trabajo.
- **Estructura del código:** para organizar los archivos y las funciones de cada etapa.
  Claude generó el código base a partir del plan y del material de clase; yo lo revisé,
  lo probé y lo integré al proyecto.
- **Corrección:** para resolver los problemas que encontré durante las pruebas.

También me apoyé en Claude para el borrador del README y de este archivo, que revisé y
ajusté.

## 2. Prompts clave utilizados

A continuación se presentan algunos de los prompts utilizados durante el desarrollo, resumidos para mostrar el propósito de cada interacción con la herramienta de IA.

**Prompt 1 (planificación):**

> "A partir del siguiente requerimiento, organiza una estructura de trabajo que permita desarrollar la aplicación de manera progresiva. Divide el proyecto en etapas claras, identifica las funcionalidades principales y propón un orden lógico para su implementación."

**Prompt 2 (estructura e integración):**

> "A partir de la estructura definida para el proyecto, organiza los archivos y las funciones necesarias para implementar cada una de las funcionalidades, manteniendo una separación clara entre la estructura HTML, los estilos CSS y la lógica de JavaScript."

**Prompt 3 (verificación de integridad):**

> "Revisa los archivos generados y verifica la integridad y correlación entre ellos. Comprueba que las referencias entre HTML, CSS y JavaScript sean correctas, que las funciones utilizadas estén definidas y que no existan inconsistencias que impidan la correcta ejecución de la aplicación."

**Prompt 4 (revisión y corrección):**

> "Analiza el comportamiento observado durante las pruebas de la aplicación, identifica la posible causa del problema y propone los ajustes necesarios sin modificar las funcionalidades que ya se encuentran operativas."

## 3. ¿Qué partes del código sugerido por la IA tuvieron errores o necesitaron ajustes?

- **Estilo diferente al de la clase:** la primera versión de `app.js` no seguía la guía de
  validaciones de la materia. Al revisarla con el material de clase, pedí cambiarla para
  usar `getElementById`, `novalidate` en el formulario, el script con `defer` y mensajes de
  error por campo con `textContent`.
- **Rutas de los archivos:** después del primer commit noté que la página no cargaba los
  estilos ni el JavaScript, porque `index.html` buscaba los archivos en `css/` y `js/`.
  Lo corregí moviendo los archivos a sus carpetas en el segundo commit.
- **Datos de la API:** JSONPlaceholder solo trae `title` y `completed`, sin prioridad ni
  fecha. Hubo que adaptar los datos con `map()` para que funcionaran el orden y las
  etiquetas de prioridad.
- **Prueba del manejo de errores:** las instrucciones para probar el error sin internet no
  funcionaron al primer intento. Al revisar, vi que las tareas seguían guardadas en
  `localStorage`, por lo que la aplicación no llamaba a la API. Lo resolví borrando los
  datos con `localStorage.removeItem('tareas')` desde la consola, con la red en modo
  Offline. También quité un filtro de la pestaña Network que ocultaba las peticiones.