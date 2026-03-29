# 🚀 AEROSTAI TECHNIK - PAQUETE DE DESPLIEGUE

## 📦 CONTENIDO DE ESTE PAQUETE

```
DEPLOY/
├── index.html              ← Página principal
├── assets/
│   ├── index-BRM_ZOIs.css     ← Estilos compilados (NO modificar)
│   └── index-CBa0XthP.js      ← JavaScript compilado (NO modificar)
├── favicon.svg             ← Icono de pestaña (con fondo oscuro)
├── hero_bg.png             ← Imagen de fondo hero
├── fondo.png               ← Imagen de fondo secciones
├── nombre.png              ← Logo AerostAI
├── logo.png                ← Logo adicional
├── MRO.png                 ← Imagen solución MRO
├── ECTM.png                ← Imagen Engine Trend Monitoring
├── GA.png                  ← Imagen Gestión Aeroportuaria
├── DB.png                  ← Imagen Plataformas de Datos
├── OG.png                  ← Imagen Oil & Gas
├── Seg.png                 ← Imagen Seguridad
├── Nosotros.png            ← Imagen sección Nosotros
├── Soluciones.png          ← Imagen sección Soluciones
├── Industrias.png          ← Imagen sección Industrias
├── Proyectos.png           ← Imagen sección Proyectos
├── taller01.png            ← Imagen Casos de Éxito 1
├── taller02.png            ← Imagen Casos de Éxito 2
└── version.json            ← Versión del sitio
```

---

## 🚀 INSTRUCCIONES PARA TU SOCIO (DESPLIEGUE)

### Paso 1: Subir al Servidor
1. Conectar al hosting vía FTP o File Manager
2. Navegar al directorio `public_html/` o `www/`
3. **Subir TODO el contenido de la carpeta `DEPLOY/`**
4. Verificar que `index.html` quede en la raíz

### Paso 2: Verificar
Abrir en navegador:
- `https://tudominio.com`
- `https://www.tudominio.com`

### Paso 3: Probar Funcionalidades
- [ ] Formulario de contacto envía emails
- [ ] Navegación entre secciones funciona
- [ ] Imágenes se cargan correctamente
- [ ] Favicon aparece en la pestaña del navegador

---

## ✅ ¿QUÉ FUNCIONA AUTOMÁTICAMENTE?

- ✅ **Formulario de contacto**: Configurado con FormSubmit.co
- ✅ **Envío de emails**: Llega a info@aerostaitechnik.com.ar
- ✅ **Navegación**: Funciona en cualquier dominio
- ✅ **Animaciones**: Framer Motion optimizado
- ✅ **Responsive**: Adaptado a móviles, tablets y desktop
- ✅ **Favicon**: Diseño con fondo oscuro visible

---

## 🔧 NO NECESITA CONFIGURAR

- ❌ Base de datos (no usa)
- ❌ PHP (no necesita)
- ❌ Servidor de emails (ya configurado)
- ❌ Certificados SSL (el hosting lo maneja)
- ❌ Variables de entorno
- ❌ Dependencias npm (todo está compilado)

---

## 🐙 INSTRUCCIONES PARA GITHUB (BACKUP)

### Opción A: Línea de comandos
```bash
# En la carpeta del proyecto
cd "c:\Users\raulm\OneDrive - Facultad de Ingeniería - UNLP\2025\PERSONAL\0005 - PROYECTOS\0013 - AEROST\Web AerostIATechnik"

# Agregar archivos nuevos
git add .

# Commit con mensaje
git commit -m "Versión lista para producción - con favicon actualizado"

# Subir a GitHub
git push origin main
```

### Opción B: GitHub Desktop
1. Abrir GitHub Desktop
2. Seleccionar el repositorio `Web-AerostIATechnik`
3. Verificar cambios en la pestaña "Changes"
4. Escribir mensaje: "Versión lista para producción - con favicon actualizado"
5. Click "Commit to main"
6. Click "Push origin"

### Opción C: VS Code
1. Ir a la pestaña Source Control (Ctrl+Shift+G)
2. Verificar archivos modificados
3. Escribir mensaje de commit
4. Click ✓ Commit
5. Click ... → Push

---

## 📋 CHECKLIST FINAL

### Para el Socio (Despliegue):
- [ ] Carpeta `DEPLOY/` subida completamente
- [ ] `index.html` en la raíz del dominio
- [ ] Todas las imágenes visibles
- [ ] Favicon visible en pestaña
- [ ] Formulario de contacto funciona
- [ ] Sitio responsive en móvil

### Para GitHub (Backup):
- [ ] Commit realizado
- [ ] Push a origin/main exitoso
- [ ] Repositorio actualizado en GitHub.com

---

## 🆘 SOLUCCIÓN DE PROBLEMAS

### Si no se ven las imágenes:
Verificar que todas las imágenes `.png` estén en la misma carpeta que `index.html`

### Si no funciona el formulario:
El formulario usa FormSubmit.co (servicio gratuito). Puede tardar 1-2 min en activarse la primera vez.

### Si el favicon no aparece:
- Limpiar caché del navegador (Ctrl+F5)
- Verificar que `favicon.svg` esté en la raíz

---

## 📞 SOPORTE

Si hay problemas con el despliegue:
1. Verificar que todos los archivos de `DEPLOY/` estén subidos
2. Probar en modo incógnito (Ctrl+Shift+N)
3. Revisar consola del navegador (F12 → Console)

---

**Fecha de generación**: Marzo 2025  
**Versión**: Producción lista  
**Estado**: ✅ Listo para desplegar

---

## 💻 DESARROLLO (Para desarrolladores)

Este proyecto está construido con:
- **React 19** + **Vite**
- **Framer Motion** (animaciones)
- **Lucide React** (iconos)
- **FormSubmit.co** (formularios)

### Scripts disponibles:
```bash
npm run dev     # Servidor de desarrollo
npm run build   # Compilar para producción
npm run preview # Previsualizar build local
```
