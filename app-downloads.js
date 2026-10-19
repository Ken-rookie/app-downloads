const apps = [
  {
    name: 'TokaToka',
    developer: 'Kenneth B. Dolera',
    shortName: 'TT',
    slug: 'tokatoka',
    description: 'TokaToka is an Android app by Ken-rookie, available as a direct APK download.',
    version: 'v1.0.6',
    file: 'TokaToka.apk',
    size: 56854423,
    downloadUrl: 'https://github.com/Ken-rookie/tokatoka-android/releases/download/v1.0.6/TokaToka.apk'
  },
  {
    name: '3Kings Reservation',
    developer: 'John Mar Cemine ',
    shortName: '3K',
    slug: '3kings',
    description: 'Reserve pickleball courts, check availability, choose a session duration, and review rates in the 3Kings Android app.',
    version: 'v1.0.0',
    file: '3Kings.Reservation.app.apk',
    size: 53475730,
    logoUrl: 'https://raw.githubusercontent.com/Ken-rookie/3kings-reservation-app/master/lib/image.png',
    screenshots: [
      'assets/3kings-reservation/screenshots/Screenshot_2026-10-14-18-29-56-737_com.example.threekings.jpg',
      'assets/3kings-reservation/screenshots/Screenshot_2026-10-14-18-30-23-046_com.example.threekings.jpg',
      'assets/3kings-reservation/screenshots/Screenshot_2026-10-14-18-30-25-630_com.example.threekings.jpg',
      'assets/3kings-reservation/screenshots/Screenshot_2026-10-14-18-30-28-317_com.example.threekings.jpg',
      'assets/3kings-reservation/screenshots/Screenshot_2026-10-14-18-30-30-321_com.example.threekings.jpg',
      'assets/3kings-reservation/screenshots/Screenshot_2026-10-14-18-30-34-537_com.example.threekings.jpg',
      'assets/3kings-reservation/screenshots/Screenshot_2026-10-14-18-30-38-559_com.example.threekings.jpg'
    ],
    downloadUrl: 'https://github.com/Ken-rookie/3kings-reservation-app/releases/download/v1.0.0/3Kings.Reservation.app.apk'
  },
  {
    name: 'RANKR',
    developer: 'John Carl Gujelde',
    shortName: 'RK',
    slug: 'rankr',
    description: 'RANKR is an Android app by Ken-rookie, distributed as a direct APK download.',
    version: 'v1.0.0',
    file: 'RANKR.apk',
    size: 72497395,
    logoUrl: 'assets/rankr/icon/image.png',
    screenshots: [
      'assets/rankr/screenshots/Screenshot_2026-10-14-18-29-09-961_com.example.rankr.jpg',
      'assets/rankr/screenshots/Screenshot_2026-10-14-18-29-34-480_com.example.rankr.jpg',
      'assets/rankr/screenshots/Screenshot_2026-10-14-18-29-39-100_com.example.rankr.jpg',
      'assets/rankr/screenshots/Screenshot_2026-10-14-18-29-41-642_com.example.rankr.jpg',
      'assets/rankr/screenshots/Screenshot_2026-10-14-18-29-44-443_com.example.rankr.jpg',
      'assets/rankr/screenshots/Screenshot_2026-10-14-18-29-47-085_com.example.rankr.jpg'
    ],
    downloadUrl: 'https://github.com/Ken-rookie/RANKR/releases/download/v1.0.0/RANKR.apk'
  },
  {
    name: 'Baryo Bites',
    developer: 'Kenneth B. Dolera',
    shortName: 'BB',
    slug: 'baryo-bites',
    description: 'Baryo Bites is an Android app by Ken-rookie, available as a direct APK download.',
    version: 'v1.0.2',
    file: 'app-release.apk',
    size: 55498071,
    downloadUrl: 'https://github.com/Ken-rookie/baryo-bites/releases/download/v1.0.2/app-release.apk'
  },
  {
    name: 'BuildHive',
    developer: 'Kenneth B. Dolera',
    shortName: 'BH',
    slug: 'buildhive',
    description: 'BuildHive is an Android app for browsing construction supplies and placing orders.',
    version: 'v1.0.3',
    file: 'Buildhive.apk',
    size: 64277917,
    logoUrl: 'assets/buildhive/icon.png',
    downloadUrl: 'https://github.com/Ken-rookie/app-downloads/releases/download/buildhive-v1.0.3/Buildhive.apk'
  }
];

function formatFileSize(bytes) {
  return `${(bytes / 1024 / 1024).toFixed(1)} MB`;
}

function renderPreview(app) {
  if (app.screenshots?.length) {
    return `<div class="screenshot-carousel" data-carousel data-current="0" role="group" aria-label="${app.name} screenshots" tabindex="0">
      <div class="screenshot-phone screenshot-phone--${app.slug}">
        ${app.screenshots.map((src, index) => `<img class="screenshot-slide${index === 0 ? ' is-active' : ''}" src="${src}" alt="${app.name} screenshot ${index + 1}" aria-hidden="${index !== 0}" ${index > 1 ? 'loading="lazy"' : ''}>`).join('')}
        <div class="carousel-pagination" role="group" aria-label="Choose screenshot">
          <div class="carousel-dots">${app.screenshots.map((_, index) => `<button class="carousel-dot${index === 0 ? ' is-active' : ''}" type="button" data-carousel-slide="${index}" aria-label="Show screenshot ${index + 1}" aria-current="${index === 0}"></button>`).join('')}</div>
          <span class="slide-counter" aria-live="polite">1 / ${app.screenshots.length}</span>
        </div>
      </div>
      <button class="carousel-arrow carousel-arrow--previous" type="button" data-carousel-prev aria-label="Previous screenshot">&#8592;</button>
      <button class="carousel-arrow carousel-arrow--next" type="button" data-carousel-next aria-label="Next screenshot">&#8594;</button>
    </div>`;
  }

  return `<div class="preview-empty-phone"><div class="preview-empty"><span>${app.shortName}</span><strong>Preview images not added yet</strong></div></div>`;
}

function renderApp(app) {
  const logo = app.logoUrl
    ? `<img src="${app.logoUrl}" alt="${app.name} logo"><span class="logo-fallback" hidden>${app.shortName}</span>`
    : `<span class="logo-fallback">${app.shortName}</span>`;

  return `<article class="project-card project-card--${app.slug}">
    <div class="app-brand-row">
      <div class="app-logo app-logo--${app.slug}">${logo}</div>
      <div class="app-title-group">
        <span class="release-tag">ANDROID · ${app.version}</span>
        <h3>${app.name}</h3>
      </div>
    </div>
    <div class="app-preview app-preview--${app.slug}">
      ${renderPreview(app)}
    </div>
    <p class="app-description">${app.description}</p>
    <div class="developer-row"><span>Developer</span><strong>${app.developer || 'Ken-rookie'}</strong></div>
    <div class="download-row">
      <span class="file-info">${app.file}<br>${formatFileSize(app.size)}</span>
      <a class="download-button" href="${app.downloadUrl}" target="_blank" rel="noopener noreferrer" aria-label="Download ${app.name} APK ${app.version}">Download APK <span aria-hidden="true">↓</span></a>
    </div>
  </article>`;
}

document.querySelector('#projects-grid').innerHTML = apps.map(renderApp).join('');
document.querySelectorAll('.app-logo img').forEach(image => {
  image.addEventListener('error', () => {
    image.hidden = true;
    image.nextElementSibling.hidden = false;
  }, { once: true });
});

function showSlide(carousel, index) {
  const slides = [...carousel.querySelectorAll('.screenshot-slide')];
  const current = (index + slides.length) % slides.length;
  carousel.dataset.current = current;
  slides.forEach((slide, slideIndex) => {
    const active = slideIndex === current;
    slide.classList.toggle('is-active', active);
    slide.setAttribute('aria-hidden', String(!active));
  });
  carousel.querySelectorAll('.carousel-dot').forEach((dot, dotIndex) => {
    const active = dotIndex === current;
    dot.classList.toggle('is-active', active);
    dot.setAttribute('aria-current', String(active));
  });
  carousel.querySelector('.slide-counter').textContent = `${current + 1} / ${slides.length}`;
}

const projectGrid = document.querySelector('#projects-grid');
projectGrid.addEventListener('click', event => {
  const carousel = event.target.closest('[data-carousel]');
  if (!carousel) return;

  const current = Number(carousel.dataset.current);
  const selectedSlide = event.target.closest('[data-carousel-slide]');
  if (selectedSlide) {
    showSlide(carousel, Number(selectedSlide.dataset.carouselSlide));
  } else if (event.target.closest('[data-carousel-prev]')) {
    showSlide(carousel, current - 1);
  } else if (event.target.closest('[data-carousel-next]')) {
    showSlide(carousel, current + 1);
  }
});

projectGrid.addEventListener('keydown', event => {
  const carousel = event.target.closest('[data-carousel]');
  if (!carousel || !['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
  event.preventDefault();
  const direction = event.key === 'ArrowRight' ? 1 : -1;
  showSlide(carousel, Number(carousel.dataset.current) + direction);
});

let touchStartX = null;
projectGrid.addEventListener('pointerdown', event => {
  touchStartX = event.pointerType === 'touch' ? event.clientX : null;
});
projectGrid.addEventListener('pointerup', event => {
  if (touchStartX === null) return;
  const distance = event.clientX - touchStartX;
  const carousel = event.target.closest('[data-carousel]');
  touchStartX = null;
  if (carousel && Math.abs(distance) > 40) {
    showSlide(carousel, Number(carousel.dataset.current) + (distance < 0 ? 1 : -1));
  }
});
