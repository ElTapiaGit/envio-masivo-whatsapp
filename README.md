# 📱 Bot WhatsApp Masivo

Este proyecto EXPERIMENTAL es una aplicación desarrollada en **Node.js** que permite enviar mensajes masivos por **WhatsApp Web** de forma automatizada.  
Cuenta con una **interfaz web simple e intuitiva**, donde el usuario puede escanear el código QR para iniciar sesión en WhatsApp Web, redactar un mensaje y subir un archivo `.csv` con una lista de contactos a los que se enviará el mensaje.

---

## 🚀 Características principales

- Conexión a **WhatsApp Web** mediante escaneo de **QR Code**.
- Interfaz amigable para redactar mensajes (admite texto, links, emojis, etc.).
- Carga de contactos mediante un archivo **CSV** con el siguiente formato:

  ```csv
  telefono
  +591000000000
  +591000000000

- Envío automático de mensajes a todos los números del archivo .csv.
- Los mensajes se envían en bloques de 50 con una pausa de 1 minuto entre cada bloque (configurable en el controlador).
- Compatible con cualquier número de contactos (dependiendo del límite que establezcas en el código).

---

## 🛠️ Instalación y configuración
- Iniciar proyecto Node.js
  ```csv
  npm init -y
  npm install express whatsapp-web.js csv-parser multer
  npm install qrcode
  npm install puppeteer
---

## ▶️ Ejecución del proyecto

- Ejecuta el siguiente comando en la raíz del proyecto:
  ```csv
  npm run start
- Luego abre tu navegador y entra a:

  ````csv
  👉 http://localhost:3000

---

## 💻 Uso del sistema

1. Abre la aplicación y escanea el código QR con tu WhatsApp para iniciar sesión.

2. Redacta el mensaje que deseas enviar (puedes incluir emojis y enlaces). Esta version no esta disponible para enviar archivo multimedia.

3. Carga el archivo .csv con los números de teléfono a los que se enviará el mensaje.

4. Presiona el botón Enviar mensaje.

5. El sistema enviará los mensajes de forma automática, en lotes de 50 contactos por minuto (ajustable en el código del controlador).

---
## ⚠️ Advertencia

Este proyecto está diseñado únicamente con fines educativos o para automatización personal.
No debe ser utilizado para spam o actividades que infrinjan las políticas de uso de WhatsApp.
