const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');
    const category = filter.dataset.filter;

    projects.forEach((project) => {
      project.hidden = category !== 'all' && project.dataset.category !== category;
    });
  });
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const modal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const fallback = document.getElementById('videoFallback');
const playButtons = document.querySelectorAll('.play-btn');
const closeButtons = document.querySelectorAll('[data-close-video]');

function closeVideo() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  modalVideo.pause();
  modalVideo.removeAttribute('src');
  modalVideo.load();
}

playButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const src = button.dataset.video;
    const poster = button.dataset.poster;
    modalVideo.src = src;
    if (poster) modalVideo.setAttribute('poster', poster);
    else modalVideo.removeAttribute('poster');
    fallback.style.display = 'block';
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    modalVideo.play().catch(() => {});
  });
});

modalVideo.addEventListener('error', () => {
  fallback.style.display = 'block';
});

modalVideo.addEventListener('loadeddata', () => {
  fallback.style.display = 'none';
});

closeButtons.forEach((button) => button.addEventListener('click', closeVideo));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('open')) closeVideo();
});

document.querySelectorAll('[data-placeholder-link]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    alert(`PLACEHOLDER: reemplazá el enlace de ${link.dataset.placeholderLink} dentro de index.html.`);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const caseStudies = {
  "aurum-studio": {
    tag: "Dirección de arte · Diseño gráfico · Prompt engineering · Retoque digital",
    title: "AURUM Studio Wireless",
    role: "Cliente / Proyecto: AURUM Studio (ficticio / e-commerce)",
    images: [
      "assets/images/produccion/aurum-studio/05-logo-identidad.png",
      "assets/images/produccion/aurum-studio/01-hero.png",
      "assets/images/produccion/aurum-studio/06-specs-tecnicas.png",
      "assets/images/produccion/aurum-studio/02-infografia-anc.png",
      "assets/images/produccion/aurum-studio/03-detalle-almohadillas.png",
      "assets/images/produccion/aurum-studio/04-flatlay-unboxing.png"
    ],
    sections: [
      { heading: "Objetivo", text: "Diseñar un sistema de activos visuales de alta conversión para un producto de audio premium, optimizando el perceived value (valor percibido) en entornos e-commerce y reduciendo la tasa de rebote mediante infografías claras." },
      { heading: "Estrategia y solución visual", list: [
        "Identidad y rebranding metálico: isotipo geométrico y limpio integrado al acabado de los auriculares, transmitiendo sofisticación técnica sin saturar la estética del producto.",
        "Hero image: composición en tonos negro carbón y naranja quemado que captura la atención en los primeros 3 segundos.",
        "Carrusel de características: traducción de specs complejas (Bluetooth 5.3, latencia, 40h de autonomía, ANC) a un lenguaje visual claro.",
        "Anatomía y materiales: encuadres detallados enfocados en el confort, respaldando la promesa de uso prolongado.",
        "Unboxing: flatlay del paquete completo para eliminar dudas antes de la compra."
      ]},
      { heading: "Proceso técnico y valor agregado", text: "Combinación de generación por IA para prototipado rápido de renders con postproducción y maquetado profesional para corregir inconsistencias físicas. El resultado es un flujo de producción eficiente con calidad de estudio publicitario." }
    ]
  },
  "raiz-natural": {
    tag: "Growth · Video Ads · Generación con IA · Copywriting de conversión",
    title: "Raíz Natural — Ad de producto",
    role: "Cliente / Proyecto: Raíz Natural (ficticio / e-commerce beauty)",
    video: "assets/video/PIEZA-08-video-campana.mp4",
    poster: "assets/images/PIEZA-08-poster.png",
    images: [
      { src: "assets/images/PIEZA-08-antes.png", label: "Antes" },
      { src: "assets/images/PIEZA-08-poster.png", label: "Después" }
    ],
    sections: [
      { heading: "Objetivo", text: "Producir un video ad vertical de performance (TikTok / Reels) para un sérum facial, aplicando estructura de embudo de conversión (hook, beneficio, CTA) sobre piezas generadas con IA." },
      { heading: "Diagnóstico", list: [
        "El hook inicial ('El poder de lo natural en tu piel') era una afirmación de marca genérica, sin tensión ni pregunta que retuviera al usuario en los primeros segundos.",
        "El bloque de unboxing ocupaba cerca del 45% del video en un plano estático, sin aportar información nueva al beneficio.",
        "La oferta final y el botón de acción aparecían en momentos separados, rompiendo el flujo hacia la conversión.",
        "El código de descuento no tenía formato reconocible como cupón."
      ]},
      { heading: "Iteración y solución", list: [
        "Reescritura del cierre para unificar oferta + código + CTA ('COMPRÁ AHORA') en un mismo frame.",
        "Reformato del código de descuento a un formato estándar de e-commerce (RAIZ-20OFF).",
        "Animación del frame final con Pixverse para dar movimiento sutil a la placa de cierre sin perder foco en el CTA.",
        "Eliminación de la placa 'El despertar de tu piel', redundante con el hook inicial y sin aporte al mensaje."
      ]}
    ]
  },
  "cafeloop": {
    tag: "Dirección de Arte · Identidad de Marca · Diseño Gráfico · Generación de Contenido con IA",
    title: "CaféLoop — Identidad & Campaña D2C",
    role: "Cliente / Proyecto: CaféLoop (Ficticio / Marca D2C de café de especialidad)",
    images: [
      "assets/images/produccion/cafeloop/01-hook.png",
      "assets/images/produccion/cafeloop/02-beneficios.png",
      "assets/images/produccion/cafeloop/03-origen.png",
      "assets/images/produccion/cafeloop/04-experiencia-casa.png",
      "assets/images/produccion/cafeloop/05-ritual-diario.png",
      "assets/images/produccion/cafeloop/06-identidad-marca.png",
      "assets/images/produccion/cafeloop/07-cta-conversion.png"
    ],
    sections: [
      { heading: "Objetivo", text: "Construir un sistema de marca completo para un café de especialidad de venta directa al consumidor (D2C), combinando identidad visual, packaging y contenido educativo para redes que impulse conversión." },
      { heading: "Estrategia y Solución Visual", list: [
        "Identidad de marca: isotipo que combina grano y hoja en un trazo continuo, aplicado de forma consistente en packaging, tarjetas y contenido.",
        "Carrusel educativo: pieza de valor ('¿Por qué café en grano?') pensada para generar guardados y alcance orgánico antes de introducir el producto.",
        "Storytelling de origen: piezas que muestran el proceso (tostado semanal, origen directo) para justificar el precio premium con transparencia.",
        "Estilo de vida y packaging: fotografía de producto en contexto real de uso, reforzando la promesa 'premium, cercano, directo a tu puerta'.",
        "Cierre de conversión: pieza final con oferta clara y CTA directo, pensada para campaña paga."
      ]},
      { heading: "Proceso Técnico & Valor Agregado", text: "Generación de fotografía de producto y contexto con IA, integrada con diseño tipográfico y maquetación manual para lograr consistencia de marca en cada pieza del carrusel." }
    ]
  },
  "inglaterra": {
    tag: "Storytelling · Retención · Voz en off · Edición narrativa",
    title: "La noche que le ganamos a Inglaterra",
    role: "Pieza de portfolio · Postulación: Senior Short-Form Video Editor (Storytelling & Retention Focused)",
    video: "assets/video/PIEZA-09-inglaterra.mp4",
    poster: "assets/images/PIEZA-09-poster.jpg",
    images: [
      { src: "assets/images/PIEZA-09-poster.jpg", label: "Clímax — multitud festejando" }
    ],
    sections: [
      { heading: "Objetivo", text: "Producir una pieza de short-form narrativo con voz en off propia, aplicando estructura de retención (hook, pattern interrupt, escalada, pago) sobre material audiovisual real y personal, no generado ni stockeado — para demostrar instinto narrativo sobre footage crudo." },
      { heading: "Guion y estructura", list: [
        "Hook (0-5s): plano fijo de atardecer en calma, voz en off plantea la pregunta sin responderla — 'nadie sabía cómo iba a terminar esta noche'.",
        "Transición (5-9s): plano de andén nocturno, la tensión sube en el tono de voz sin resolver todavía.",
        "Pattern interrupt (9s): corte seco de la calma al interior del tren en celebración — la voz calla y el audio ambiente real (cánticos) toma el protagonismo total durante ~6 segundos.",
        "Escalada (17-25s): calle y camioneta con banderas, la narración vuelve con frases cortas que dejan respirar la imagen.",
        "Pago (25-31s): plano de multitud, cierre reflexivo que conecta con la pregunta del hook sin repetir la idea del medio."
      ]},
      { heading: "Iteración y decisiones de edición", list: [
        "Reescritura del guion en varias rondas para evitar redundancia semántica entre el bloque medio y el cierre.",
        "Recorte del hook de ~12s a 5s: un plano fijo sin variación pierde retención si se sostiene demasiado.",
        "Reconstrucción del pattern interrupt como corte de 1 frame con el audio entrando de golpe, en vez de transición suavizada — el mecanismo central de la pieza.",
        "Corrección de encuadre (crop) en el clip de cierre para eliminar barras negras y ocupar el 100% del frame vertical.",
        "Ajuste de duración del bloque de calle, evitando que el clímax visual (la multitud) quedara comprimido al final."
      ]}
    ]
  },
  "cafeloop-b2b": {
    tag: "Commercial Video Suite · Edición Audiovisual · Copywriting B2B",
    title: "CaféLoop — Spot Lanzamiento B2B",
    role: "Cliente / Proyecto: CaféLoop (Línea Corporativa)",
    video: "assets/video/PIEZA-10-cafeloop-b2b-horizontal.mp4",
    poster: "assets/images/PIEZA-10-poster.jpg",
    images: [], 
    sections: [
      { 
        heading: "Objetivo Comercial B2B", 
        text: "Campaña publicitaria audiovisual enfocada en la captación de clientes corporativos (cafeterías, hoteles y oficinas), priorizando consistencia, trazabilidad y rendimiento comercial." 
      },
      { 
        heading: "Estrategia de Edición & Formato", 
        list: [
          "Estrategia Text-Only: Redacción de copywriting dinámico pensado para reproducciones sin sonido en redes profesionales (LinkedIn / Meta Ads).",
          "Adaptabilidad de formato: Montaje optimizado en 16:9 horizontal para la web corporativa y pauta comercial.",
          "Cierre directo (CTA): Inclusión de llamado a la acción comercial para la solicitud de muestras corporativas."
        ]
      }
    ]
  }
};

const caseModal = document.getElementById('caseModal');
const caseGallery = document.getElementById('caseGallery');
const caseText = document.getElementById('caseText');
const caseTag = document.getElementById('caseTag');
const caseTitle = document.getElementById('caseTitle');
const caseRole = document.getElementById('caseRole');

function openCase(id) {
  const data = caseStudies[id];
  if (!data || !caseModal) return;
  caseTag.textContent = data.tag;
  caseTitle.textContent = data.title;
  caseRole.textContent = data.role;
  const posterSrc = data.poster || (typeof data.images[0] === 'string' ? data.images[0] : data.images[0]?.src) || '';
  const videoHtml = data.video
    ? `<video src="${data.video}" poster="${posterSrc}" controls playsinline style="width:100%;border-radius:12px;display:block;margin-bottom:10px;grid-column:1 / -1;"></video>`
    : '';
  const imagesHtml = data.images.map((item) => {
    const src = typeof item === 'string' ? item : item.src;
    const label = typeof item === 'string' ? null : item.label;
    const labelHtml = label ? `<span style="display:block;text-align:center;font:700 .72rem 'Manrope',sans-serif;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin-top:6px;">${label}</span>` : '';
    return `<div>${`<img src="${src}" alt="${data.title}" loading="lazy">`}${labelHtml}</div>`;
  }).join('');
  caseGallery.innerHTML = videoHtml + imagesHtml;
  caseText.innerHTML = data.sections.map((s) =>
    s.list
      ? `<h4>${s.heading}</h4><ul>${s.list.map((i) => `<li>${i}</li>`).join('')}</ul>`
      : `<h4>${s.heading}</h4><p>${s.text}</p>`
  ).join('');
  caseModal.classList.add('open');
  caseModal.setAttribute('aria-hidden', 'false');
}

function closeCase() {
  caseModal.classList.remove('open');
  caseModal.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('[data-case]').forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    openCase(trigger.dataset.case);
  });
});

document.querySelectorAll('[data-close-case]').forEach((button) => button.addEventListener('click', closeCase));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && caseModal.classList.contains('open')) closeCase();
});