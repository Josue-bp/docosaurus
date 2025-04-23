---
sidebar_position: 3
---

# 🗂️Fuentes en DevTools

La pestaña **"Fuentes"** de **DevTools** es una herramienta potente que permite inspeccionar los archivos que componen una página web, como **JavaScript** y **CSS**. Esta sección es especialmente útil para desarrolladores que desean verificar y depurar el código de la página, ver qué recursos se están cargando y cómo se cargan, o para realizar modificaciones en tiempo real.

## ¿Qué ves en la pestaña Fuentes?

Cuando abres la pestaña **Fuentes**, notarás que el panel se divide en diferentes secciones:

1. **Archivos de la página**: Aquí puedes ver todos los archivos que se están cargando en la página, como los **archivos CSS** y **JavaScript**. Puedes navegar entre ellos y ver su contenido directamente en el navegador.
   
2. **Espacio de trabajo**: Este panel está en el lado derecho y muestra los recursos adicionales de la página. Puede mostrarte archivos de tipo **nube** o almacenamiento de **otros archivos** relacionados con la aplicación web. Es útil para ver **cachés**, **cookies**, y recursos adicionales que se cargan de manera externa o interna, como las fuentes o el contenido de la API.

3. **Opciones de seguimiento**: En el panel de fuentes, puedes activar ciertas opciones para realizar un **seguimiento** de los cambios de código en tiempo real, lo que es muy útil si estás modificando algo y quieres ver cómo esos cambios afectan al funcionamiento de la página.

## ¿Qué puedes hacer con la pestaña Fuentes?

### Ver y editar archivos CSS y JS

Puedes ver el código fuente de cualquier archivo cargado en la página, incluyendo el **JavaScript** y **CSS**. Esto es útil cuando quieres comprobar si hay errores o inconsistencias en los estilos o el comportamiento de la página.

- Haz clic en el archivo dentro del panel de **Fuentes**.
- Realiza cambios en el código directamente desde DevTools.
- Los cambios que hagas son **temporales**, solo afectan la visualización de la página en tu navegador (sin modificar los archivos reales del proyecto).

### Añadir archivos a tu espacio de trabajo

Puedes agregar tu propio espacio de trabajo en DevTools para editar archivos directamente desde tu editor de código, sin tener que navegar hasta los archivos del proyecto.

Para esto, debes:

1. Ir a **"Fuentes"**.
2. Haz clic en **"Workspace"** (Espacio de trabajo) en el panel de la izquierda.
3. **Agregar un directorio** para vincular tu editor de código a DevTools.
4. Desde aquí, podrás editar archivos locales directamente desde el navegador.

### Ver recursos cargados

El panel de **"Red"** de la pestaña **Fuentes** te permitirá ver todos los recursos que la página está cargando, como imágenes, scripts y otros archivos. Puedes revisar si los recursos se están cargando correctamente o si hay algún error en la carga.

## Recursos adicionales en la pestaña Fuentes

1. **Espacio de trabajo**: Aquí puedes agregar archivos que están relacionados con tu desarrollo.
2. **Recursos de seguimiento**: Puedes ver cómo se cargan los archivos y hacer un seguimiento en vivo de los cambios.
3. **Fuentes externas**: Si tu página web utiliza recursos de fuentes externas, puedes ver estas conexiones y explorarlas para verificar su estado.

## Consejos útiles

- **Filtrar archivos**: Puedes filtrar los archivos por tipo (JS, CSS) para facilitar la búsqueda.
- **Puntos de interrupción**: Si estás trabajando con JavaScript, puedes establecer puntos de interrupción en el código para pausar la ejecución y revisar los valores de las variables.
- **Modo de edición**: Puedes editar los archivos CSS y JavaScript directamente en el navegador para realizar pruebas rápidas. ¡Recuerda que estos cambios son temporales!

---

### Conclusión

La pestaña **Fuentes** te permite inspeccionar todos los archivos que están involucrados en el funcionamiento de la página web. Desde aquí puedes ver el código de **JavaScript**, modificar estilos en tiempo real, realizar pruebas y hacer un seguimiento de recursos como imágenes, archivos JS o incluso cookies. ¡Es una herramienta esencial para cualquier desarrollador que quiera depurar o entender cómo funciona una página web!

---

**Prueba rápida**:

1. Abre cualquier página web en tu navegador.
2. Haz clic derecho y selecciona **"Inspeccionar"**.
3. Dirígete a la pestaña **Fuentes**.
4. Explora los archivos de la página y experimenta editando alguno de los estilos en **CSS** o revisa los **archivos JavaScript**.
