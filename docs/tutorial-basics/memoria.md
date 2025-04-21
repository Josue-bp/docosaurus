---
sidebar_position: 6
---

# Pestaña Memoria (Memory)

La pestaña **Memoria** te permite detectar **problemas de consumo de memoria**, como **fugas (memory leaks)**, crecimiento inesperado o uso excesivo de memoria por parte de tu aplicación web.

---

## 📷 Tipos de perfiles disponibles

Cuando abres la pestaña, verás un selector llamado **"Seleccionar tipo de perfil"**. Puedes elegir entre varias opciones:

### 1. **Heap snapshot (Captura de pila de memoria)**

- 📦 Toma una **foto completa de la memoria** utilizada por tu aplicación en un momento específico.
- Muestra:
  - Objetos en memoria (arrays, nodos DOM, strings, etc.)
  - Tamaño ocupado por cada uno
  - Referencias entre objetos
- 🔍 Muy útil para:
  - Ver qué objetos **nunca se liberan**
  - Rastrear **fugas de memoria**
  - Comparar dos snapshots antes/después

### 2. **Allocation instrumentation on timeline (Asignación en la línea de tiempo)**

- ⏱️ Graba cómo se **asigna memoria en tiempo real** mientras usas la página.
- Ideal para detectar:
  - **Picos de memoria** después de interacciones
  - Objetos que **se crean pero nunca se eliminan**
  - Cambios en el uso de memoria a lo largo del tiempo

### 3. **Allocation sampling (Muestreo de asignación)**

- 🔬 Proporciona un **muestreo estadístico** de qué funciones están creando objetos en memoria.
- Consume menos recursos que una grabación completa.
- Buena opción para **ver rápidamente qué partes del código consumen más memoria**.

---

## 🧠 Instancia de VM de JavaScript

Debajo del selector de perfil, puedes ver un menú para elegir la instancia de VM (máquina virtual) de JavaScript activa. Esto es útil si estás trabajando con:

- **iFrames**
- **Workers (web workers o service workers)**
- **Múltiples contextos JS** en una sola página

Generalmente se verá como:  
➡️ **`top - https://tu-sitio.com`**  
Es la instancia principal, pero puedes cambiarla si tu código JS vive en otros contextos.

---

## 🎯 ¿Cómo usarlo paso a paso?

1. Ve a la pestaña **Memory**.
2. Selecciona el tipo de perfil según lo que quieras analizar.
3. Haz clic en **"Take snapshot"** o **"Start"** (según la opción).
4. Realiza acciones dentro de tu app.
5. Detén la grabación y analiza:
   - Tamaños
   - Tipos de objetos
   - Si algo **no se libera**
6. Puedes comparar múltiples capturas para detectar qué **persiste en memoria**.

---

## 📌 ¿Sabías que...?

- Puedes **filtrar por nombre** de clase u objeto en los snapshots.
- Los objetos DOM suelen ser los más propensos a **fugas**, especialmente si hay referencias circulares con eventos.
- En `Heap snapshot`, hay una vista llamada **"Retainers"**, que te muestra **quién mantiene vivo a un objeto**, útil para saber por qué **no se libera**.

---

## 🧼 Buenas prácticas

- Llamar a `console.clear()` antes de empezar para no saturar la consola.
- Usar `Performance` y `Memory` en conjunto para detectar **interacciones pesadas** que además consumen memoria.
- Usar `let`/`const` y funciones puras para evitar referencias innecesarias.

---

