---
sidebar_position: 5
---

# Pestaña Rendimiento (Performance)

La pestaña **Rendimiento** te permite analizar cómo se comporta tu sitio web en términos de **tiempo de carga, interactividad, fluidez visual y uso de recursos**. Es ideal para optimizar la experiencia de usuario.

---

## 🎥 Botones principales (parte superior)

En la parte superior de la pestaña verás varios botones:

| Botón | Función |
|-------|---------|
| **Grabar** (⏺️) | Comienza a grabar lo que hace la página en cuanto a rendimiento (interacciones, scripts, render, etc.). |
| **Grabar y recargar** (⏺️🔄) | Recarga la página automáticamente y graba desde el inicio de la carga. Ideal para analizar todo el proceso. |
| **Borrar** (🚫) | Borra los perfiles de rendimiento anteriores. |
| **Cargar perfil...** | Permite importar un archivo `.json` o `.cpuprofile` generado previamente con otra sesión de rendimiento. |

---

## 📊 Métricas locales

Una vez grabado un perfil, se mostrarán varias métricas locales (arriba del panel de resultados). Las más importantes:

### ✅ LCP (Largest Contentful Paint)

- **Qué es**: El tiempo que tarda en aparecer el **contenido principal visible** (ej. imagen grande, bloque de texto).
- **Meta recomendada**: Menos de **2.5 segundos**.
- **Importancia**: Afecta directamente la **percepción de carga** del sitio.

### ⚠️ CLS (Cumulative Layout Shift)

- **Qué es**: Mide cuánto se **mueven los elementos en pantalla** mientras la página carga.
- **Meta recomendada**: Menos de **0.1**.
- **Ejemplo de mal CLS**: Estás por hacer clic y de repente un banner empuja todo y haces clic en otra cosa.

### ⏱️ INP (Interaction to Next Paint)

- **Qué es**: Mide la **respuesta del sitio cuando el usuario interactúa** (clics, teclas, toques).
- **Meta recomendada**: Menos de **200 ms**.
- **Importancia**: Evalúa qué tan rápido responde tu web a la acción del usuario.

---

## 🧩 Interacciones y cambios de diseño

Debajo de las métricas verás un panel con muchas pistas visuales. Aquí se representan gráficamente varios procesos que afectan al rendimiento:

| Sección | Qué muestra |
|--------|-------------|
| **Frames** | Cada cuadro que el navegador ha dibujado. |
| **Interacciones** | Acciones del usuario (clics, desplazamientos, etc.). |
| **Script Evaluation** | Procesamiento del código JS (qué tanto tiempo tarda y qué hace). |
| **Layout** | Cambios de diseño y reubicaciones en la página. |
| **Paint / Composite** | Qué se ha dibujado y combinado visualmente en pantalla. |

---

## 🎬 Cómo hacer una grabación

1. Abre la pestaña **Rendimiento (Performance)** en DevTools.
2. Haz clic en **"Grabar y recargar"**.
3. Espera que cargue la página y **detén la grabación**.
4. Aparecerá una vista con todo lo que ocurrió durante ese proceso.
5. Revisa las métricas LCP, CLS, INP y las secciones gráficas.
6. Puedes hacer zoom, mover el cursor y analizar cada detalle.

---

## 🧠 ¿Sabías que...?

- El botón **"Cargar perfil"** te permite analizar datos de rendimiento obtenidos en otro dispositivo o navegador.
- Puedes exportar el perfil con clic derecho en el timeline y seleccionar “Guardar perfil como...”.
- La pestaña **Rendimiento** también puede mostrar cuánto **consume tu web en CPU**, lo que es útil para optimizar apps lentas.

---

