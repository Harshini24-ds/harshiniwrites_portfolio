/* ============================================================
   HARSHINI PORTFOLIO — INTERACTIONS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- CONTACT (Web3Forms submission + optional social links) ---------- */
  const contactForm = document.getElementById('contactForm');
  const contactLinks = document.getElementById('contactLinks');
  const formNote = document.getElementById('formNote');
  const submitBtn = contactForm ? contactForm.querySelector('button[type="submit"]') : null;

  function addContactLink(href, label, icon) {
    if (!contactLinks) return;
    const link = document.createElement('a');
    link.href = href;
    link.className = 'social-btn';
    link.setAttribute('aria-label', label);
    if (/^https:\/\//.test(href)) {
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
    }
    const symbol = document.createElement('i');
    symbol.className = icon;
    symbol.setAttribute('aria-hidden', 'true');
    link.append(symbol);
    contactLinks.append(link);
  }

  if (typeof CONTACT_CONFIG !== 'undefined') {
    const email = (CONTACT_CONFIG.email || '').trim();
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      addContactLink(
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`,
  'Email Harshini',
  'fa-solid fa-envelope'
);
    }

    [
      ['linkedin', 'LinkedIn', 'fa-brands fa-linkedin-in'],
      ['github', 'GitHub', 'fa-brands fa-github'],
      ['instagram', 'Instagram', 'fa-brands fa-instagram']
    ].forEach(([key, label, icon]) => {
      const url = (CONTACT_CONFIG[key] || '').trim();
      if (/^https:\/\//.test(url)) addContactLink(url, label, icon);
    });
  }

  if (contactForm && submitBtn && formNote) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (!contactForm.reportValidity()) return;

      const accessKey = contactForm.querySelector('input[name="access_key"]')?.value.trim();
      if (!accessKey || accessKey === 'YOUR_ACCESS_KEY') {
        formNote.textContent = 'Add your Web3Forms access key in index.html before testing the form.';
        formNote.classList.remove('success');
        formNote.classList.add('error');
        return;
      }

      const originalButtonHTML = submitBtn.innerHTML;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      formNote.textContent = 'Sending your message...';
      formNote.classList.remove('success', 'error');

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: new FormData(contactForm)
        });
        const data = await response.json();

        if (response.ok && data.success) {
          formNote.textContent = "Message sent successfully. I'll get back to you soon.";
          formNote.classList.remove('error');
          formNote.classList.add('success');
          contactForm.reset();
        } else {
          formNote.textContent = data.message || 'Something went wrong. Please try again.';
          formNote.classList.remove('success');
          formNote.classList.add('error');
        }
      } catch (error) {
        formNote.textContent = 'Something went wrong. Please check your connection and try again.';
        formNote.classList.remove('success');
        formNote.classList.add('error');
      } finally {
        submitBtn.innerHTML = originalButtonHTML;
        submitBtn.disabled = false;
      }
    });
  }

  /* ---------- NAV ---------- */
  const nav = document.getElementById('nav');
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('navLinks');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 24);
  });

  function setMenu(open) {
    navLinks.classList.toggle('open', open);
    burger.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    document.body.classList.toggle('menu-open', open);
  }

  burger.addEventListener('click', () => {
    setMenu(!navLinks.classList.contains('open'));
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => setMenu(false));
  });

  /* ---------- SERVICE ROTATOR ---------- */
  const serviceRotator = document.getElementById('typedRotator');
  if (serviceRotator && ROTATOR_WORDS.length) {
    serviceRotator.textContent = ROTATOR_WORDS[0];
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      let serviceIndex = 0;
      setInterval(() => {
        serviceIndex = (serviceIndex + 1) % ROTATOR_WORDS.length;
        serviceRotator.textContent = ROTATOR_WORDS[serviceIndex];
      }, 3600);
    }
  }

  /* ---------- SCROLL REVEAL (fallback / general) ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('inview');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => revealObserver.observe(el));
  // Show hero immediately on first load
document.querySelectorAll('.hero [data-reveal]').forEach(el => {
  el.classList.add('inview');
});

  /* ---------- TIMELINE STEP REVEAL ---------- */
  const steps = document.querySelectorAll('.t-step');
  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('inview');
    });
  }, { threshold: 0.4 });
  steps.forEach(s => stepObserver.observe(s));

  /* ---------- HERO SIGNATURE: LIVE EDIT TOGGLE ---------- */
  const editLine = document.getElementById('editLine');
  const editToggle = document.getElementById('editToggle');
  let editIndex = 0;
  let showingGood = false;

  function renderEdit() {
    const pair = EDIT_PAIRS[editIndex];
    if (!showingGood) {
      editLine.innerHTML = `<span class="bad">${pair.bad}</span>`;
    } else {
      editLine.innerHTML = `<span class="good">${pair.good}</span>`;
    }
  }
  renderEdit();

  function advanceEdit() {
    if (!showingGood) {
      showingGood = true;
    } else {
      showingGood = false;
      editIndex = (editIndex + 1) % EDIT_PAIRS.length;
    }
    if (window.gsap && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.to(editLine, {
        opacity: 0, y: -4, duration: 0.16, onComplete: () => {
          renderEdit();
          gsap.fromTo(editLine, { opacity: 0, y: 4 }, { opacity: 1, y: 0, duration: 0.24 });
        }
      });
    } else {
      renderEdit();
    }
  }

  let editTimer = null;
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    editTimer = setInterval(advanceEdit, 6500);
  }

  editToggle.addEventListener('click', () => {
    if (editTimer) {
      clearInterval(editTimer);
      editTimer = null;
    }
    advanceEdit();
  });

  /* ---------- RENDER PROJECT CARDS ---------- */
  const grid = document.getElementById('projectsGrid');

  function projectCardHTML(p) {
    const featClass = p.featured ? ' featured' : '';
    return `
    <article class="pcard${featClass}" data-tag="${p.tag}" data-id="${p.id}" role="button" tabindex="0" aria-label="Open ${p.title} project">
      <div class="pcard-top">
        <span class="pcard-cat">${p.category}</span>
        <span class="pcard-arrow"><i class="fa-solid fa-arrow-up-right"></i></span>
      </div>
      <h3>${p.title}</h3>
      <p class="desc">${p.desc}</p>
      <div class="pcard-meta">
        <div><div class="m-label">Goal</div><div class="m-val">${p.goal}</div></div>
        <div><div class="m-label">Audience</div><div class="m-val">${p.audience}</div></div>
      </div>
    </article>`;
  }

  function renderProjects(filter) {
    const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.tag === filter);
    grid.innerHTML = list.map(projectCardHTML).join('');
    attachCardEvents();
  }
  renderProjects('all');

  /* ---------- FILTER BUTTONS ---------- */
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjects(btn.dataset.filter);
    });
  });

  /* ---------- MODAL ---------- */
  const overlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');

  function galleryHTML(kind) {
    if (kind === 'headlines') {
      return `
      <div class="swipe-wrap">
        <div class="swipe-track" id="headlineTrack">
          ${HEADLINES.map(h => `
            <div class="swipe-card">
              <span class="badge-best">Rewritten</span>
              <div class="bad-line">${h.bad}</div>
              <div class="good-line">${h.good}</div>
            </div>`).join('')}
        </div>
        <div class="swipe-nav">
          <button id="hlPrev" aria-label="Previous"><i class="fa-solid fa-arrow-left"></i></button>
          <button id="hlNext" aria-label="Next"><i class="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>`;
    }
    if (kind === 'hooks') {
      let html = '';
      Object.keys(HOOKS).forEach(product => {
        html += `<div class="modal-block"><h5>${product}</h5><div class="swipe-wrap"><div class="swipe-track">`;
        HOOKS[product].forEach(h => {
          html += `<div class="swipe-card">
            ${h.best ? '<span class="badge-best">Top 5</span>' : ''}
            <div class="good-line">${h.text}</div>
          </div>`;
        });
        html += `</div></div></div>`;
      });
      return html;
    }
    if (kind === 'ctas') {
      return `
      <div class="cta-toggle-wrap">
        <div class="cta-toggle">
          <button class="active" data-cta="soft">Soft CTA</button>
          <button data-cta="direct">Direct CTA</button>
        </div>
      </div>
      <div class="cta-list" id="ctaList"></div>`;
    }
    if (kind === 'copy-elements') {
      return `
      <div class="copy-elements-section">
        <h5>Headlines</h5>
        ${galleryHTML('headlines')}
      </div>
      <div class="copy-elements-section">
        <h5>Hooks</h5>
        ${galleryHTML('hooks')}
      </div>
      <div class="copy-elements-section">
        <h5>CTAs</h5>
        ${galleryHTML('ctas')}
      </div>`;
    }
    return '';
  }

  function renderCtaList(kind) {
    const list = document.getElementById('ctaList');
    if (!list) return;
    list.innerHTML = CTAS[kind].map((c, i) => `
      <div class="cta-pill"><span class="idx">${String(i + 1).padStart(2, '0')}</span>${c}</div>
    `).join('');
  }

  let lastFocusedElement = null;

  function openModal(id) {
    const p = PROJECTS.find(x => x.id === id);
    if (!p) return;

    const currentIndex = PROJECTS.findIndex(x => x.id === id);
    const prevProject = currentIndex > 0 ? PROJECTS[currentIndex - 1] : null;
    const nextProject = currentIndex < PROJECTS.length - 1 ? PROJECTS[currentIndex + 1] : null;

    let body = `
      <button class="modal-close" id="modalClose" aria-label="Close"><i class="fa-solid fa-xmark"></i></button>
      <span class="pcard-cat modal-cat">${p.category}</span>
      <h3 id="modalTitle">${p.title}</h3>
      <div class="modal-grid">
        <div><div class="m-label">Goal</div><div class="m-val">${p.goal}</div></div>
        <div><div class="m-label">Audience</div><div class="m-val">${p.audience}</div></div>
        <div><div class="m-label">Framework</div><div class="m-val">${p.framework}</div></div>
        <div><div class="m-label">Skills</div><div class="m-val">${p.skills.join(', ')}</div></div>
      </div>
      <div class="thinking-label">Thinking behind the copy</div>
      <div class="thinking-grid">
        <div class="modal-block thinking-card"><h5>Problem to solve</h5><p>${p.challenge}</p></div>
        <div class="modal-block thinking-card"><h5>Copy decision</h5><p>${p.solution}</p></div>
      </div>
    `;

    if (p.isGallery) {
      body += `<div class="modal-block"><h5>The Work</h5>${galleryHTML(p.isGallery)}</div>`;
    } else if (p.sample) {
      body += `<div class="modal-block"><h5>Copy Sample</h5><div class="copy-sample">${p.sample}</div></div>`;
    }

    body += `
      <div class="modal-nav" aria-label="Project navigation">
        <button type="button" class="modal-nav-btn" id="modalPrev" ${prevProject ? '' : 'disabled'}>
          <i class="fa-solid fa-arrow-left" aria-hidden="true"></i><span><small>Previous</small>${prevProject ? prevProject.title : 'First project'}</span>
        </button>
        <button type="button" class="modal-nav-btn next" id="modalNext" ${nextProject ? '' : 'disabled'}>
          <span><small>Next</small>${nextProject ? nextProject.title : 'Last project'}</span><i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
        </button>
      </div>`;

    if (!overlay.classList.contains('open')) lastFocusedElement = document.activeElement;
    modalContent.innerHTML = body;
    overlay.classList.add('open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalContent.scrollTop = 0;

    const closeButton = document.getElementById('modalClose');
    closeButton.addEventListener('click', closeModal);
    closeButton.focus();

    const prevBtn = document.getElementById('modalPrev');
    const nextBtn = document.getElementById('modalNext');
    if (prevProject) prevBtn.addEventListener('click', () => openModal(prevProject.id));
    if (nextProject) nextBtn.addEventListener('click', () => openModal(nextProject.id));

    // gallery-specific wiring
    if (p.isGallery === 'headlines') {
      const track = document.getElementById('headlineTrack');
      document.getElementById('hlNext').addEventListener('click', () => track.scrollBy({ left: 340, behavior: 'smooth' }));
      document.getElementById('hlPrev').addEventListener('click', () => track.scrollBy({ left: -340, behavior: 'smooth' }));
    }
    if (p.isGallery === 'ctas' || p.isGallery === 'copy-elements') {
      renderCtaList('soft');
      modalContent.querySelectorAll('.cta-toggle button').forEach(btn => {
        btn.addEventListener('click', () => {
          modalContent.querySelectorAll('.cta-toggle button').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          renderCtaList(btn.dataset.cta);
        });
      });
    }
    if (p.isGallery === 'copy-elements') {
      const track = document.getElementById('headlineTrack');
      const next = document.getElementById('hlNext');
      const prev = document.getElementById('hlPrev');
      if (track && next && prev) {
        next.addEventListener('click', () => track.scrollBy({ left: 340, behavior: 'smooth' }));
        prev.addEventListener('click', () => track.scrollBy({ left: -340, behavior: 'smooth' }));
      }
    }
  }

  function closeModal() {
    if (!overlay.classList.contains('open')) return;
    overlay.classList.remove('open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
      lastFocusedElement.focus();
    }
  }

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      setMenu(false);
    }
  });

  function attachCardEvents() {
    document.querySelectorAll('.pcard').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.id));
      card.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openModal(card.dataset.id);
        }
      });
    });
  }

  // Keep the hero visible immediately. Animating it from opacity 0 can leave
  // the headline and buttons nearly invisible when animation frames are paused.
});
