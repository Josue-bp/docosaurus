---
sidebar_position: 8
---

# 🌟 Lighthouse

**Lighthouse** es una herramienta automatizada integrada en DevTools que evalúa el rendimiento y calidad de una página web. Ayuda a desarrolladores a optimizar sus sitios para mejorar la experiencia del usuario, accesibilidad, rendimiento, y más.

---

## 🚀 ¿Qué es Lighthouse?

Lighthouse ejecuta una serie de auditorías en tu página y genera un **informe detallado** dividido en categorías. Es útil para desarrolladores web que quieren:

- Optimizar rendimiento
- Hacer accesible su web
- Cumplir con buenas prácticas
- Mejorar SEO
- Convertir su sitio en una PWA

---

## 🧪 ¿Cómo generar un informe?

1. Abre DevTools (`F12` o clic derecho → Inspeccionar).
2. Ve a la pestaña **"Lighthouse"**.
3. Elige lo siguiente:

   - ✅ **Categorías a auditar**:
     - Performance
     - Accessibility
     - Best Practices
     - SEO
     - Progressive Web App

   - 🖥️ **Dispositivo simulado**:
     - Móvil
     - Escritorio

4. Haz clic en **"Analyze page load"** o **"Generate report"**.

> 🔄 Lighthouse recargará la página y comenzará el análisis automáticamente.

---

## 📊 Resultados del Informe

Cada informe muestra una **puntuación del 0 al 100** en las siguientes áreas:

### ⚡ Rendimiento (Performance)

Evalúa la velocidad de carga y experiencia del usuario. Algunas métricas importantes:

- **FCP (First Contentful Paint)**: Tiempo en que aparece el primer contenido.
- **LCP (Largest Contentful Paint)**: Tiempo en que el elemento más grande es visible.
- **Speed Index**: Qué tan rápido el contenido es visualmente visible.
- **Time to Interactive (TTI)**: Cuándo la página está lista para ser usada.
- **Total Blocking Time (TBT)**: Tiempo total en que la página estuvo "bloqueada".
- **CLS (Cumulative Layout Shift)**: Cambios inesperados en el diseño visual.

### ♿ Accesibilidad

Verifica si la página es **usable para personas con discapacidades**. Revisa:

- Contraste de colores
- Etiquetas `alt` en imágenes
- Uso correcto de etiquetas HTML semánticas
- Navegación con teclado

### 🧠 Mejores Prácticas (Best Practices)

Detecta fallas comunes de seguridad o malas configuraciones. Ejemplos:

- Uso de HTTPS
- Evitar librerías desactualizadas
- Manejo correcto de errores en consola

### 🔎 SEO (Optimización en motores de búsqueda)

Verifica si la página está bien estructurada para aparecer en Google:

- Uso de etiquetas `meta`
- Títulos descriptivos
- Etiquetas `alt`
- Uso correcto del atributo `lang`

### 📲 Progressive Web App (PWA)

Evalúa si la web cumple con las características para ser una app instalable:

- Service Worker activo
- Manifiesto correcto
- Carga offline disponible
- Iconos apropiados

---

## 📁 Opciones avanzadas

- Puedes guardar el informe como archivo `.html`.
- Si usas Chrome en modo **incógnito**, evitas interferencias de extensiones.
- También puedes correr Lighthouse desde:
  - La [CLI de Node.js](https://github.com/GoogleChrome/lighthouse)
  - Extensión de Chrome
  - API de PageSpeed Insights

---

## 📌 Consejos

- Corre Lighthouse varias veces, ya que los resultados pueden variar.
- Usa siempre conexión **simulada** para probar rendimiento real.
- Usa los íconos ⚠️ para ver **recomendaciones específicas**.
- El informe incluye **sugerencias accionables** para cada métrica.

---

## 🤔 ¿Sabías que...?

- Lighthouse usa emulación de red para simular un dispositivo móvil lento.
- Google lo utiliza internamente para determinar si una web ofrece buena experiencia al usuario.
- Lighthouse forma parte de las herramientas usadas para el **Core Web Vitals** de Google.

---

