---
sidebar_position: 7
---

# 🗃️Pestaña Aplicación (Application)

La pestaña **Aplicación** en DevTools es esencial para inspeccionar y depurar **funcionalidades web avanzadas** como almacenamiento local, cachés, cookies, y tecnologías modernas como **PWA** (Progressive Web Apps).

---

## 📁 Barra lateral izquierda: Secciones principales

### 📄 Manifest (Manifiesto)

- Es un archivo `.webmanifest` usado en aplicaciones web progresivas (PWA).
- Contiene datos como:
  - Nombre de la app
  - Íconos
  - Color de fondo y tema
  - Pantalla de inicio
- Ayuda a que tu app se vea como una **app nativa** en el dispositivo del usuario.

Ejemplo básico:
```json
{
  "name": "Mi App",
  "short_name": "App",
  "start_url": "/index.html",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "display": "standalone",
  "icons": [...]
}
```

## 🛠️ Service Workers
Scripts que el navegador corre en segundo plano, fuera del hilo principal.

**Permiten:**

- Funcionalidad offline

- Caché avanzada

- Notificaciones push

**Aquí puedes:**

- Registrar, actualizar o detener un service worker

- Activar/desactivar funciones como Bypass for network (ignorar SW)

- Ver si hay errores de registro

## 📦 Almacenamiento
Te permite ver y modificar el contenido que la página guarda en el navegador:

## 🔐 Local Storage
- Guarda pares clave/valor.

- Persistente hasta que el usuario borre el contenido manualmente.

- Accesible con localStorage.getItem() y setItem().

# 🧠 Session Storage
Similar al localStorage, pero solo dura mientras la pestaña esté abierta.

# 🍪 Cookies
Guarda pequeños fragmentos de datos (como tokens o preferencias).

**Puedes ver su:**

- Dominio

- Fecha de expiración

- HTTPOnly

- Secure

- Valor

# 📇 IndexedDB
- Base de datos NoSQL en el navegador.

- Ideal para almacenar grandes cantidades de datos estructurados.

- Puedes ver todas las bases, sus tablas y registros directamente desde esta vista.

## 🔄 Servicios de Segundo Plano
- Background Services
- Muestra eventos registrados por APIs que trabajan en segundo plano:
- Notificaciones Push
- Sincronización en segundo plano (Sync)
- Periodic Background Sync
- Geofencing, etc.

Puedes ver los eventos pasados, su contenido, y si fueron exitosos.

## 🎞️ Fotogramas (Frames)
- Aparece cuando tu sitio tiene iFrames o contenido embebido.
- Muestra todos los marcos activos y te permite inspeccionar:
- Cookies
- Almacenamiento
- Caches
- Manifiestos asociados a cada frame

Es útil para depurar sitios con contenido externo o anuncios.

## 🧪 Tips útiles
- Puedes limpiar todos los datos de una app desde aquí usando el botón 🧹 "Clear site data".
- Es posible modificar cookies, cambiar valores del localStorage y ver sus efectos en tiempo real.
- Si tienes una app con modo offline, este es el mejor lugar para inspeccionar cómo funciona la caché y el service worker.

## 📌 ¿Sabías que...?
El botón "Update on reload" en Service Workers fuerza la actualización del archivo cada vez que recargas.
Desde aquí también puedes forzar la activación de un nuevo service worker sin esperar al evento skipWaiting.

