# Resumen CSS Avanzado

## Temas vistos

- **Herencia:** algunas propiedades CSS se transmiten desde el elemento padre a los hijos.
- **Especificidad:** si varias reglas compiten, gana la regla con mayor peso. Si empatan, gana la escrita mas abajo.
- **Position:** permite modificar la posicion de los elementos con valores como `static`, `relative`, `fixed`, `absolute` e `inherit`.
- **Float y clear:** permiten armar columnas clasicas sacando elementos del flujo normal y limpiando flotantes.
- **Flexbox:** modelo unidimensional para ordenar elementos en fila o columna.
- **Grid:** modelo bidimensional para organizar elementos en filas y columnas.
- **Grid areas:** permite nombrar zonas de una grilla y ubicar semantica de pagina: header, nav, aside, main y footer.
- **Transitions:** animan cambios de propiedades CSS, por ejemplo color de fondo o padding en `:hover`.
- **Variables CSS:** se declaran en `:root` y se reutilizan con `var(--nombre)`.
- **Reset CSS / Normalize:** formas de controlar diferencias de estilos por defecto entre navegadores.
- **Viewport:** meta etiqueta clave para que el sitio se adapte correctamente a pantallas chicas.
- **Media queries:** reglas condicionales para aplicar estilos segun ancho, orientacion o tipo de medio.

## Consignas resueltas

| Consigna | Archivo |
| --- | --- |
| 2 columnas con CSS2 y CSS3 | `2-CSS/ej_columnas.html` |
| Position fixed en el CV | `2-CSS/ej_cv.html` |
| Backgrounds con imagen, color, origin, position, repeat y size | `2-CSS/ej_backgrounds.html` |
| Grid basico con tarjetas de productos | `2-CSS/productos.html` |
| Grid areas con header, nav, aside, main y footer | `2-CSS/productos.html` |
| Mejora con `fieldset` y `legend` | `2-CSS/productos.html` |
| Transitions con botones de nav y variables CSS | `2-CSS/productos.html` |
| Viewport | `2-CSS/ej_cv.html`, `2-CSS/ej_instagram.html`, `2-CSS/productos.html` |
| Responsive con 3 columnas desde 601px y 1 columna hasta 600px | `2-CSS/ej_instagram.html` |

## Ideas que suelen tomar

- `position: fixed` deja el elemento fijo respecto al viewport.
- `float: left` y `width: 50%` permiten dos columnas clasicas.
- `column-count` y `column-gap` permiten columnas de texto con CSS3.
- `display: grid` crea una grilla; `grid-template-columns` define columnas.
- `grid-template-areas` permite dibujar la distribucion de la pagina.
- `display: flex` trabaja principalmente en un eje.
- `transition` suaviza cambios; no crea una animacion por si sola sin cambio de estado.
- `@media` permite cambiar estilos segun el tamanio de pantalla.
- El viewport recomendado en clase fue:

```html
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1">
```
