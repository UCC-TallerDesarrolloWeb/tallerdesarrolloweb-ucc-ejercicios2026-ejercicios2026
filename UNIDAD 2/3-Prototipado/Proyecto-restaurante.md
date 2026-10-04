# Proyecto - Pagina web de restaurante

## Objetivo

Diseñar un sitio responsivo para presentar el restaurante, mostrar su carta y permitir que un cliente prepare un pedido.

## Categorias principales

1. **Inicio:** presentacion breve, platos destacados y accesos a Menu y Pedido.
2. **Conocenos:** historia, cocina y equipo. Termina con un mapa enlazado a Google Maps.
3. **Menu:** entradas, platos principales, bebidas y postres.
4. **Pedido:** productos seleccionados, datos del cliente, metodo de pago y confirmacion.

## Navegacion

La ubicacion no es una categoria del menu principal. Se integra al final de Conocenos para que el visitante encuentre primero la historia del restaurante y luego la direccion.

## Comportamiento responsivo

En computadora, los bloques de Conocenos alternan imagen a la izquierda y texto a la derecha, y luego texto a la izquierda e imagen a la derecha. En celular, todos los bloques se apilan con la imagen antes del texto.

## Flujo principal

```text
Inicio -> Menu -> Agregar productos -> Pedido -> Completar datos -> Confirmar
                                      |                         |
                                      |                         +-> Compra confirmada
                                      +-> Corregir campos faltantes
```

## Contacto

El pie de pagina muestra un contacto breve. La direccion y el acceso al mapa se presentan dentro de Conocenos.
