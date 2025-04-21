---
id: elementos
title: Elementos
sidebar_position: 1
---


# Elementos

La pestaña **Elementos** en DevTools es donde puedes visualizar y modificar el **HTML** y el **CSS** de una página web en tiempo real. Esta herramienta es especialmente útil para:

- Explorar la estructura del sitio web.
- Cambiar estilos sin editar archivos originales.
- Probar colores, fuentes, tamaños, etc.
- Analizar cómo se organizan los elementos en la página.

## ¿Qué se puede ver en la pestaña Elementos?

Cuando abres esta pestaña, verás dos áreas principales:

- **A la izquierda**, está el árbol del **HTML**, que representa la estructura de la página (como etiquetas, contenedores, imágenes, títulos, etc.).
- **A la derecha**, están los **estilos CSS**, reglas aplicadas al elemento seleccionado.

Puedes hacer clic sobre cualquier parte del HTML para inspeccionar un elemento en específico y modificar su contenido o sus estilos directamente.

## Ejemplo en vivo

Imagina que estás en una página web que tiene este HTML:

```html
<h1 class="titulo">¡Hola, mundo!</h1>
<p class="descripcion">Este es un párrafo de ejemplo.</p>

```

Y en los estilos CSS aparece esto:
```html
.titulo {
  color: red;
  font-size: 32px;
}

.descripcion {
  color: gray;
  font-style: italic;
}
```
# En DevTools, podrías:

1) Hacer doble clic en ¡Hola, mundo! y cambiarlo por Bienvenido a mi web.

2) Cambiar color: red por color: blue para ver el cambio visual inmediatamente.

3) Desactivar temporalmente una regla de estilo marcando su checkbox.

# Trucos útiles

- Ctrl + clic en el nombre de una clase CSS en el HTML te lleva al archivo de estilos correspondiente.

- Puedes arrastrar elementos en el árbol HTML para reorganizarlos temporalmente.

- Al escribir un nuevo estilo, DevTools ofrece autocompletado para propiedades CSS y valores.

# ¿Qué no hace?
Aunque puedes editar el HTML y CSS desde DevTools, estos cambios no se guardan permanentemente. Son solo para pruebas. Al recargar la página, todo vuelve a su estado original.

# Prueba rápida

1) Abre cualquier página web (incluso esta).

2) Haz clic derecho sobre un texto → Inspeccionar.

3) Cambia el texto desde la pestaña Elementos.

4) Cambia un color o tamaño de fuente.

5) Observa los cambios al instante.

# 🧠 ¿Sabías que...?

Puedes guardar los cambios que hagas en HTML y CSS desde DevTools de forma temporal usando Snippets o copiando el código modificado y pegándolo en tu propio proyecto. Aunque los cambios no se guardan en la web real, puedes usarlos para aprender, hacer prototipos o preparar tus tareas más rápido.