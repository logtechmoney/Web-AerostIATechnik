# AerostAI Technik - Instrucciones de Instalación

## 🚀 Instalación Rápida (Copiar y Pegar)

### Paso 1: Subir archivos al hosting
1. Copia TODA la carpeta del proyecto al servidor
2. Asegúrate que la estructura quede así:
   ```
   /public_html/
   ├── index.html
   ├── src/
   │   ├── App.jsx
   │   └── index.css
   ├── package.json
   ├── vite.config.js
   └── send-email.php (si usan PHP)
   ```

### Paso 2: Compilar para producción
```bash
npm run build
```
Esto creará una carpeta `dist/` con todo optimizado.

### Paso 3: Subir al hosting
1. Sube el contenido de `dist/` al directorio principal del hosting
2. Accede a tu dominio y debería funcionar

## ⚙️ Configuración Necesaria

### Formulario de Contacto
El formulario ya está configurado con FormSubmit.co y funcionará automáticamente en cualquier dominio.

### Imágenes
Asegúrate que las imágenes estén en la carpeta `public/`:
- /nombre.png
- /MRO.png
- /ECTM.png
- /GA.png
- /DB.png
- /OG.png
- /Seg.png
- /Nosotros.png
- /Proyectos.png
- /Contacto.png

## 🔧 Si hay problemas

### 1. Las imágenes no cargan
Verifica que estén en la carpeta correcta y los nombres coincidan exactamente.

### 2. El formulario no funciona
FormSubmit.co funciona en cualquier dominio, no necesita configuración adicional.

### 3. La navegación no funciona
Asegúrate que el servidor soporte ruteo de spa (la mayoría de hostings modernos lo hacen).

## 🌐 Listo para producción

El sitio está optimizado y listo para funcionar en cualquier URL:
- http://tudominio.com
- https://tudominio.com
- http://subdominio.tudominio.com

¡No requiere configuración adicional!
