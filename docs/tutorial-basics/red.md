---
sidebar_position: 4
---

# Pestaña Red (Network)

La pestaña **Red** (o **Network**) de DevTools te permite ver en tiempo real **todas las solicitudes** que hace una página web: archivos que se cargan, peticiones al servidor, imágenes, scripts, fuentes, y más. Es fundamental para depurar problemas de carga y rendimiento.

---

## 🔴 Botones en la parte superior

En la esquina superior izquierda verás **dos botones importantes**:

- 🔴 **Grabar (Record)**: Este botón activa o pausa el registro de las solicitudes.  
  - Si está **rojo**, significa que está grabando lo que pasa en la red.
  - Puedes pausarlo para no seguir registrando solicitudes.
  
- 🚫 **Borrar (Clear)**: El botón con el ícono de prohibición borra el historial de solicitudes registradas.  
  - Útil para limpiar la vista antes de hacer una nueva prueba.

---

## 🎛️ Barra de configuración (debajo del botón rojo)

Aquí tienes varias opciones útiles:

| Opción | Descripción |
|--------|-------------|
| **Preservar registro** | Mantiene el historial aunque recargues la página. Útil para ver lo que pasa desde el inicio. |
| **Deshabilitar caché** | Fuerza la recarga de recursos desde el servidor (ignora la caché). |
| **Throttling** | Permite simular conexiones lentas (por ejemplo, 3G). |
| **Captura de pantalla** | Captura cómo se carga la página en diferentes momentos. |
| **Filtro de tipo de archivo** | Puedes elegir qué tipo de recursos ver (JS, CSS, XHR, Img, Font, etc.). |

---

## 🔍 Barra de filtros

Esta barra aparece justo encima de la lista de solicitudes. Aquí puedes:

- **Buscar por nombre o URL**: Filtra lo que ves escribiendo parte del nombre del archivo o una palabra clave.
- **Filtrar por tipo**: Ver solo imágenes, JS, CSS, documentos, etc.
- **Invertir**: Invierte la selección.
- **Mostrar solicitudes bloqueadas**: Activa si quieres ver qué fue bloqueado por el navegador o por políticas de seguridad.
- **Más filtros**: Al hacer clic en el ícono de embudo (funnel), puedes elegir entre más tipos de filtros personalizados.

---

## ⏱️ Barra de tiempo (milisegundos)

Justo debajo verás una barra que muestra una escala de tiempo en milisegundos (ms), por ejemplo:

500 ms | 1000 ms | 1500 ms | ...


Esta barra indica **cuánto tiempo tardan las solicitudes** en completarse y te ayuda a visualizar cuáles son más lentas. Las líneas verticales se alinean con las barras de cada solicitud en la lista de abajo.

---

## 📄 Lista de solicitudes (la tabla principal)

Debajo de todo verás una tabla con columnas. Cada fila representa una solicitud que la página hace, y cada columna tiene información clave:

| Columna | Qué muestra |
|---------|-------------|
| **Nombre** | El nombre del archivo o recurso solicitado. Puedes hacer clic para ver más detalles. |
| **Estado** | Código HTTP (200 OK, 404 Not Found, 500 Error, etc.). |
| **Tipo** | El tipo de recurso: documento, imagen, JS, XHR, fuente, etc. |
| **Iniciador** | Muestra quién o qué originó la solicitud (por ejemplo, `index.html`, `main.js`). |
| **Tamaño** | Tamaño del archivo descargado. |
| **Tiempo** | Tiempo que tardó en descargarse. |
| **Cronología (Timeline)** | Una barra visual que muestra cuándo comenzó y terminó cada solicitud en la línea de tiempo. Es útil para identificar cuellos de botella.

---

## 📌 ¿Qué puedes hacer desde aquí?

- **Ver detalles completos**: Haz clic en cualquier solicitud y se abrirá un panel con información:
  - Encabezados (Headers)
  - Vista previa del contenido
  - Respuesta
  - Cookies
  - Tiempo de carga detallado

- **Copiar solicitudes**: Puedes hacer clic derecho sobre cualquier línea y copiar como `cURL`, ver en nueva pestaña, bloquear, etc.

---

## 🚀 Prueba rápida

1. Abre una página web.
2. Abre DevTools y ve a la pestaña **Red**.
3. Recarga la página y observa cómo se registran todas las solicitudes.
4. Activa "Deshabilitar caché" y vuelve a recargar.
5. Filtra por "Img" para ver solo imágenes.
6. Haz clic en un archivo para ver su información completa.

---

## 🧠 ¿Sabías que...?

- Si activas "Deshabilitar caché", aseguras que los recursos se carguen **siempre desde el servidor**.
- Puedes exportar todas las solicitudes como un archivo `.har` para analizarlas después.
- También puedes ver el orden en que se cargan los elementos, lo cual es clave para **optimizar el rendimiento** de tu sitio.

