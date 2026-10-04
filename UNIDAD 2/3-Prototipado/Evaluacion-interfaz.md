# Evaluacion de interfaz - Restaurante

Aplicacion de los contenidos de `U2_interfazUsuario.html` al prototipo del restaurante.

## Principios de diseño

| Principio | Aplicacion en el proyecto |
| --- | --- |
| Visibilidad | Inicio muestra accesos directos a Menu y Pedido. Los botones de cada producto indican la accion Agregar. |
| Consistencia | La navegacion mantiene Inicio, Conocenos, Menu y Pedido en el mismo orden. Botones, titulos y campos conservan estilos uniformes. |
| Retroalimentacion | Al agregar un plato se informa que fue incorporado. Al confirmar se muestra un mensaje de error o exito. |
| Flexibilidad y eficiencia | El usuario puede ir directamente a Menu, volver a agregar productos o abrir Pedido desde cualquier pantalla. |
| Jerarquia visual | El nombre del restaurante, CONOCENOS, NUESTRO MENU y las acciones principales se distinguen del contenido secundario. |
| Estetica y diseño | Se emplea una paleta breve, buen contraste, imagenes relevantes y espacios constantes. |
| Tolerancia a errores | El pedido no se confirma si el carrito esta vacio o faltan datos. Los productos agregados se conservan al informar el error. |
| Ayuda y documentacion | Los campos obligatorios se marcan con asterisco y los mensajes explican como continuar. |

## Mensajes del sistema

- Producto agregado: mensaje corto, positivo y relacionado con la accion.
- Carrito vacio: `Agrega al menos un producto antes de confirmar.`
- Datos incompletos: `Completa todos los campos obligatorios y el metodo de pago.`
- Compra correcta: `Pedido confirmado. Nos comunicaremos para coordinar la entrega.`

Los mensajes evitan codigos tecnicos, expresiones negativas o frases fuera de contexto.

## Atributos de usabilidad

- **Facilidad de aprendizaje:** categorias y acciones usan nombres conocidos.
- **Eficiencia:** el flujo principal requiere Menu, Pedido y Confirmar.
- **Memorabilidad:** la navegacion es corta y permanece estable.
- **Errores:** se validan carrito, datos personales y metodo de pago.
- **Satisfaccion:** las imagenes muestran los platos y el total se actualiza al instante.
- **Accesibilidad:** imagenes con texto alternativo, campos etiquetados y mensajes con `aria-live`.
- **Utilidad:** permite conocer el restaurante, consultar la carta y preparar un pedido.
- **Integridad:** no se acepta una compra incompleta.
- **Consistencia:** los componentes mantienen lenguaje y comportamiento uniforme.

## Tecnica de evaluacion propuesta

Realizar una prueba de observacion con tres usuarios. Cada persona debe:

1. Encontrar una pizza en el menu.
2. Agregar dos pizzas y una hamburguesa.
3. Consultar el total.
4. Intentar confirmar sin completar los datos.
5. Corregir el formulario y finalizar el pedido.
6. Encontrar la ubicacion y abrirla en Google Maps.

Registrar el tiempo, errores, dudas y comentarios. El objetivo es que todos completen el flujo sin explicaciones externas.
