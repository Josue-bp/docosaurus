---
id: consola
title: 🧑‍💻Consola
sidebar_position: 2
---

# Consola en DevTools

La pestaña **Consola** (Console) es como un panel de comunicación entre tú y la página web. Aquí puedes ver mensajes, errores, advertencias y también escribir código JavaScript en tiempo real.

## ¿Para qué sirve la consola?

- 🔍 **Ver errores de JavaScript**: Si algo falla en el código de una web, aquí verás el mensaje de error y en qué línea ocurrió.
- 📝 **Probar código JavaScript al instante**: Puedes escribir funciones, cálculos o probar elementos del DOM sin modificar los archivos originales.
- ⚠️ **Ver advertencias** sobre código no recomendado o potencialmente lento.
- 🧪 **Mostrar mensajes personalizados** usando `console.log()` en tus scripts.

## Ejemplo simple de uso

1. Abre cualquier página web.
2. Presiona `Ctrl + Shift + I` (o clic derecho → "Inspeccionar").
3. Haz clic en la pestaña **Consola**.
4. Escribe este código y presiona Enter:

```js
console.log("Hola, DevTools 🚀");
```

Deberías ver el mensaje en la consola.

# Otros métodos útiles de la consola

| Método       | Función  |
|--------------|-------------------|
| **console.log()** | Muestra información normal o de depuración |
| **console.error()** | Muestra errores en rojo |
| **console.warn()** | Muestra advertencias en amarillo |
| **console.table()** | Muestra datos en forma de tabla (ideal para arreglos u objetos) |
| **console.clear()** | Limpia la consola |

# Ejemplo con console.table():
```js
console.table([
  { nombre: "Josue", edad: 21 },
  { nombre: "Ana", edad: 19 }
]);
```

# 🧠 ¿Sabías que...?
Puedes interactuar con cualquier elemento de la página usando variables automáticas como $0, $1, etc. Estas hacen referencia a los elementos que has inspeccionado en la pestaña Elementos. Por ejemplo:

```js
$0.style.color = "red";
```
Esto cambia el color del último elemento que seleccionaste en la pestaña Elementos.

# 🛠️ Prueba rápida

1) Abre la consola en cualquier página.
2) Escribe: document.title → te mostrará el título actual de la página.
3) Escribe: alert("Probando DevTools") → abrirá una alerta.
4) Escribe: console.warn("Esto es una advertencia").

5) Escribe:
```js
console.table([
  { nombre: "Chrome", version: 123 },
  { nombre: "Firefox", version: 115 }
]);
```
