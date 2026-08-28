# Portfolio — Nahuel González

Portfolio estático, liviano y responsive para presentar trabajos de contenido digital, diseño gráfico, edición de video y contenido con IA.

## Stack

- HTML5
- CSS3
- JavaScript vanilla
- Sin framework ni build step
- Tipografías Google Fonts (DM Sans + Manrope)

## Deploy en Vercel

1. Subí esta carpeta a un repositorio de GitHub.
2. En Vercel elegí **Add New Project** y conectá el repositorio.
3. No hace falta configurar build command ni output directory.
4. Deploy.

También podés abrir `index.html` localmente para revisar el sitio.

## Estructura

```text
portfolio-nahuel/
├── index.html
├── styles.css
├── script.js
├── README.md
├── CV-Nahuel-Gonzalez.pdf       ← colocar acá tu CV real
└── assets/
    ├── images/                  ← imágenes de portfolio
    ├── video/                   ← videos .mp4
    └── icons/                   ← opcional
```

## Cómo reemplazar los placeholders

### Imágenes

En `assets/images/` colocá tus piezas con estos nombres:

- `PIEZA-01-diseno-ecommerce.jpg`
- `PIEZA-02-campana-redes.jpg`
- `PIEZA-05-contenido-ia.jpg`
- `PIEZA-06-packaging-ia.jpg`
- `PIEZA-07-identidad-visual.jpg`

El placeholder de cada pieza está preparado para convertirse en una imagen real simplemente reemplazando el archivo. Si querés usar otro nombre, actualizá el `href` correspondiente en `index.html`.

### Videos

Guardá tus videos en `assets/video/` con estos nombres:

- `PIEZA-03-video-reel.mp4`
- `PIEZA-04-video-producto.mp4`
- `PIEZA-08-video-campana.mp4`

El botón de reproducción abrirá el video en un modal.

Para Instagram, YouTube o Drive también podés cambiar el botón por un enlace externo directamente desde `index.html`.

### CV

Colocá el archivo:

```text
CV-Nahuel-Gonzalez.pdf
```

en la raíz del proyecto. El botón **Descargar CV** ya apunta a ese nombre.

### Instagram y WhatsApp

En `index.html`, buscá los botones con:

```html
data-placeholder-link="Instagram"
```

y

```html
data-placeholder-link="WhatsApp"
```

Reemplazalos por tus URLs reales.

### LinkedIn

El enlace actual es un placeholder funcional hacia LinkedIn. Cambialo por la URL de tu perfil personal cuando quieras.

## Editar textos

Los textos principales están directamente en `index.html`, así que podés modificar nombre, descripción, títulos de proyectos, categorías y datos de contacto sin tocar JavaScript.

## Personalización visual

La paleta está concentrada al comienzo de `styles.css` dentro de `:root`, especialmente en:

```css
--bg
--surface
--ink
--muted
--line
--accent
--accent-dark
--soft-accent
```

Esto permite cambiar la identidad cromática completa sin recorrer todo el CSS.
