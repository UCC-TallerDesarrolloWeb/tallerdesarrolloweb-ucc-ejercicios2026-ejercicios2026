# Prototipado - Pagina web de restaurante

Entregables realizados a partir de `U2_prototipado.html` y de las decisiones del equipo para el proyecto del restaurante.

## Archivos

- `index.html`: presentacion completa de los entregables.
- `Proyecto-restaurante.md`: descripcion funcional y decisiones aprobadas.
- `Evaluacion-interfaz.md`: aplicacion de principios de diseño, mensajes y usabilidad.
- `diagrama-organizacion.svg`: arquitectura de informacion.
- `Sketch/`: thumbnail sketches para computadora y celular.
- `Wireframes/`: wireframes desktop/mobile y wireflow del pedido.
- `prototipo.html`: prototipo navegable de fidelidad media.
- `verify.js`: comprobacion automatica de archivos y requisitos.

## Consignas cubiertas

| Consigna | Entregable |
| --- | --- |
| Diagrama de organizacion | `diagrama-organizacion.svg` |
| Sketch / Thumbnail Sketch | `Sketch/sketch-desktop.svg` y `Sketch/sketch-mobile.svg` |
| Wireframe de escritorio | `Wireframes/wireframe-desktop.svg` |
| Wireframe para celular | `Wireframes/wireframe-mobile.svg` |
| Wireflow | `Wireframes/wireflow.svg` |
| Prototipo navegable | `prototipo.html` |
| Evaluacion de interfaz | Seccion Evaluacion de `index.html` |

## Decisiones de interfaz

- Navegacion principal: Inicio, Conocenos, Menu y Pedido.
- La ubicacion no aparece como categoria independiente.
- CONOCENOS alterna imagen y texto en escritorio; en celular apila imagen y texto.
- El mapa se ubica al final de CONOCENOS y abre Google Maps.
- El pie de pagina conserva solamente un contacto breve.
- Pedido incluye productos, datos del cliente, metodo de pago y confirmacion.

## Verificacion

```powershell
node "UNIDAD 2\3-Prototipado\verify.js"
```
