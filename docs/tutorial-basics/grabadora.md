---
sidebar_position: 9
---

# 🎥 Grabadora (Recorder)

La pestaña **Grabadora** de Chrome DevTools permite **grabar, editar y reproducir interacciones de usuario** en una página web. Es ideal para pruebas, análisis de rendimiento y reproducción de errores.

---

## 🧭 ¿Para qué sirve la Grabadora?

- Simula interacciones del usuario como clics, scrolls y entradas de texto.
- Permite capturar flujos completos (como iniciar sesión o llenar formularios).
- Ayuda a medir el rendimiento de pasos específicos.
- Puedes exportar las grabaciones como código.

> 💡 Ideal para testear componentes interactivos o detectar cuellos de botella.

---

## 🎬 ¿Cómo usarla?

1. Abre DevTools (`F12` o clic derecho → Inspeccionar).
2. Ve a la pestaña **Recorder**.
3. Haz clic en **"Start recording"**.
4. Realiza las acciones que quieras grabar en la página (clics, scroll, navegación).
5. Haz clic en **"Stop recording"** cuando termines.

---

## 🧱 ¿Qué captura?

- Clics
- Entradas de texto
- Cambios de ruta
- Navegación entre páginas
- Scrolls
- Keypress (limitado)
  
No graba el contenido visual (no es como un video), sino **pasos y eventos DOM**.

---

## 🔎 ¿Qué puedo hacer con la grabación?

- **Reproducir** los pasos grabados en tiempo real.
- **Editar** cada paso individualmente (por ejemplo, cambiar el selector de un clic).
- **Agregar comentarios** o pasos manualmente.
- **Medir el rendimiento** de cada paso (útil para identificar lentitud en flujos de usuario).
- **Exportar** a:

  - **JSON** (formato nativo)
  - **Puppeteer script** para pruebas automatizadas

```json
{
  "steps": [
    { "type": "click", "selector": "#btnLogin" },
    { "type": "change", "selector": "#inputUser", "value": "Josue" }
  ]
}
