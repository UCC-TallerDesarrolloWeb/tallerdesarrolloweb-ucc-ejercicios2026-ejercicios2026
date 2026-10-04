# Resumen HTML Avanzado

Basado en `U2_HTML_avanzado.html`.

## Que temas entran

- Repaso de etiquetas y atributos HTML.
- Formularios avanzados: `datalist`, `optgroup`.
- Barras y mediciones: `progress`, `meter`.
- Accesibilidad: `fieldset`, `legend`, `label`, `caption`, `alt`.
- Canvas.
- Multimedia: `video`, `audio`, `iframe`, `track`.
- Otras etiquetas: `figure`, `figcaption`, `small`, `br`, `hr`.
- Validacion W3C.
- Buenas practicas HTML.

## Repaso de etiquetas base

Etiquetas vistas antes y recordadas en la filmina:

- Estructura: `DOCTYPE`, `html`, `head`, `body`, `title`, `meta`.
- Semanticas: `header`, `nav`, `main`, `article`, `section`, `aside`, `footer`.
- Contenido: `div`, `h1` a `h6`, `p`, `strong`, `em`, `u`, `sub`, `sup`.
- Listas: `ol`, `ul`, `li`.
- Links e imagenes: `a`, `img`.
- Formularios: `form`, `input`, `select`, `option`, `textarea`, `button`.

## Repaso de atributos

Atributos que aparecen como importantes:

- `content`
- `name`
- `charset`
- `lang`
- `src`
- `href`
- `target`
- `colspan`
- `rowspan`
- `id`
- `type`
- `placeholder`
- `size`
- `maxlength`
- `min`
- `max`
- `value`
- `step`
- `checked`

## Formularios avanzados

### `datalist`

Permite mostrar opciones predefinidas en un `input`, pero tambien deja que el usuario escriba otro valor.

Idea clave:

- Se conecta con el `input` usando `list`.
- El `datalist` tiene un `id`.
- Las opciones se escriben con `option`.

Ejemplo:

```html
<input list="browsers" name="browser" id="browser">
<datalist id="browsers">
  <option value="Edge">
  <option value="Firefox">
  <option value="Chrome">
</datalist>
```

### `optgroup`

Permite agrupar opciones dentro de un `select` segun categorias.

Ejemplo:

```html
<select name="materias" id="materias">
  <option value="" disabled selected>Seleccione una materia</option>
  <optgroup label="Comunes">
    <option value="mat1">Analisis Matematico</option>
  </optgroup>
  <optgroup label="Ing. Informatica">
    <option value="web">Taller de Desarrollo Web</option>
  </optgroup>
</select>
```

## `progress` vs `meter`

| Etiqueta | Para que sirve |
|---|---|
| `progress` | Representa el progreso de una tarea en curso. |
| `meter` | Representa un valor dentro de un rango conocido. |

### `progress`

Ejemplos de uso:

- Descarga.
- Carga.
- Renderizado.
- Proceso que avanza hasta completarse.

Atributos comunes:

- `value`
- `max`

### `meter`

Ejemplos de uso:

- Nivel de bateria.
- Puntuacion.
- Temperatura.
- Calificacion.
- Uso de disco.

Atributos comunes:

- `value`
- `min`
- `max`
- `low`
- `high`
- `optimum`

Ojo: en la filmina aparece escrito `optimun`, pero la forma correcta del atributo HTML es `optimum`.

## Accesibilidad

### Definicion

La accesibilidad web busca que las paginas sean utilizables por el maximo numero de personas, independientemente de sus conocimientos o capacidades personales.

## `fieldset`, `legend` y `label`

| Etiqueta | Funcion |
|---|---|
| `fieldset` | Agrupa controles relacionados dentro de un formulario. |
| `legend` | Titulo o descripcion de un grupo `fieldset`. |
| `label` | Etiqueta asociada a un campo de formulario. |

### Clave para `label`

El atributo `for` del `label` debe coincidir con el `id` del `input`.

Ejemplo:

```html
<label for="email">Email:</label>
<input type="text" id="email">
```

## `caption`

`caption` agrega un titulo descriptivo a una tabla.

Ejemplo:

```html
<table>
  <caption>Tabla de alumnos</caption>
  <tr>
    <td>Nombre</td>
    <td>Nota</td>
  </tr>
</table>
```

## Consejos de accesibilidad

Marca como buenas practicas:

- Usar `alt` en imagenes.
- Usar `caption` en tablas.
- Usar `label` y `for` en inputs.
- Usar encabezados, listas y estructura de manera consistente.
- Usar hipervinculos con texto claro. Evitar "Click aqui".
- Usar lectores de pantalla como JAWS o NVDA para probar.
- Usar validadores/herramientas como W3C Accessibility Validator o Axe.
- Describir figuras, diagramas o animaciones con `longdesc` cuando corresponda.
- Usar `map` para zonas activas.

## Ejercicios de accesibilidad

- En el formulario, usar `label for="mismo_id"`.
- Agregar `alt` a todas las imagenes.
- Agregar `caption` a todas las tablas.
- Incluir 3 `fieldset` con `legend` para agrupar:
  - Datos Personales.
  - Datos de la Cuenta.
  - Tipo de Suscripcion.

## Canvas

`canvas` proporciona una API para dibujar lineas, imagenes y textos en dos dimensiones.

Claves:

- Es un contenedor de graficos.
- Necesita JavaScript/script para dibujar.
- Permite controlar cada pixel del lienzo.

Ejemplo:

```html
<canvas id="myCanvas" width="200" height="100">
  Tu navegador no soporta canvas.
</canvas>
```

## Multimedia

HTML5 permite incluir audio y video de forma nativa sin plugins de terceros.

Si el navegador no soporta una etiqueta multimedia, se puede incluir texto alternativo dentro de la etiqueta.

## `video`

Permite agregar video a una pagina.

Formatos citados:

- `mp4`
- `webm`
- `ogg`

Atributos citados:

- `controls`
- `width`
- `height`
- `autoplay`
- `muted`

Etiqueta relacionada:

- `source`: permite ofrecer varios formatos.
- `track`: permite subtitulos o descripciones.

Ejemplo:

```html
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.ogg" type="video/ogg">
  <track src="subtitulos.vtt" kind="subtitles" srclang="es" label="Espanol">
  Tu navegador no soporta video.
</video>
```

## `audio`

Permite agregar audio a una pagina.

Formatos citados:

- `mp3`
- `ogg`
- `aac`
- `opus`
- `flac`
- `wav`

Atributos citados:

- `src`
- `preload`
- `mediagroup`
- `autoplay`
- `loop`
- `muted`
- `controls`

## `iframe`

Permite incrustar otro documento HTML dentro del actual.

Ejemplo:

```html
<iframe src="https://example.com" title="Sitio externo"></iframe>
```

Para YouTube normalmente se usa `iframe`.

## Ejercicio multimedia

Con el template `ej_animales`:

- Agregar un audio desde la carpeta `resources`.
- Agregar un video desde la carpeta `resources`.
- Agregar un video de YouTube.

## Otras etiquetas

### `figure` y `figcaption`

Sirven para agrupar una imagen con su pie de pagina.

```html
<figure>
  <img src="foto.jpg" alt="Descripcion de la foto">
  <figcaption>Pie de foto</figcaption>
</figure>
```

### `small`

Sirve para escribir texto mas pequeno.

```html
<p><small>Texto secundario</small></p>
```

### `br`

Inserta un salto de linea.

```html
Linea 1<br>
Linea 2
```

### `hr`

Agrega un separador tematico entre secciones.

```html
<hr>
```

## Validacion

La filmina recomienda validar el codigo con:

- W3C Markup Validation Service.

Sirve para encontrar errores de HTML con facilidad.

## Buenas practicas HTML

Marca como correctas:

- Cerrar las etiquetas.
- Escribir nombres de etiquetas en minuscula.
- Poner comillas a todos los atributos.
- Validar el codigo.
- Indentar correctamente.
- Tener en cuenta accesibilidad.
- Usar `alt` y `title` para imagenes cuando corresponda.
- Usar `label` para inputs.
- No utilizar etiquetas deprecadas.
- Usar archivos externos para CSS y JavaScript.

## Trampas probables de multiple choice

- `progress` no es para nivel de bateria: eso es `meter`.
- `meter` no es progreso de descarga: eso es `progress`.
- `label for` debe coincidir con el `id` del input, no necesariamente con el `name`.
- `caption` es para tablas, no para imagenes.
- `figcaption` es para pie de imagen/figura, no para tablas.
- `canvas` no dibuja solo: necesita script.
- `video` y `audio` no requieren plugins externos en HTML5.
- `iframe` incrusta otro documento HTML.
- `optgroup` agrupa opciones dentro de `select`.
- `datalist` sugiere opciones para un `input`, pero permite escribir valores libres.
- `alt` es accesibilidad para imagenes.
- "Click aqui" es mal texto de enlace porque no tiene sentido por si mismo.

