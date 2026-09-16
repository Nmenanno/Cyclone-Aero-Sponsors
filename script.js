(() => {
  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.primary-nav');

  // GitHub Pages paths are case-sensitive. The uploaded image is .JPG.
  const heroImage = document.querySelector('.hero-media img');
  if (heroImage?.getAttribute('src') === 'team-leads-subleads.jpg') {
    heroImage.src = 'team-leads-subleads.JPG';
  }

  // Keep the plus sign the same size and weight as the sponsorship price.
  document.querySelectorAll('.tier-price span').forEach(span => {
    span.style.fontSize = 'inherit';
    span.style.fontWeight = 'inherit';
  });

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('in-view'));
  }

  const tierSelect = document.getElementById('tier-select');
  const sponsorSection = document.getElementById('sponsor');

  document.querySelectorAll('.tier-button, .open-sponsor').forEach(button => {
    button.addEventListener('click', () => {
      const tier = button.dataset.tier || '';
      if (tierSelect && tier) {
        const option = Array.from(tierSelect.options).find(o => o.value === tier || o.text === tier);
        if (option) tierSelect.value = option.value;
      }
      sponsorSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setTimeout(() => document.querySelector('input[name="company"]')?.focus(), 500);
    });
  });

  const form = document.getElementById('sponsor-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(form);
      const company = String(data.get('company') || '').trim();
      const name = String(data.get('name') || '').trim();
      const email = String(data.get('email') || '').trim();
      const tier = String(data.get('tier') || '').trim();
      const message = String(data.get('message') || '').trim();

      const subject = `Cyclone Aero Design Sponsorship Interest — ${company || tier || 'New Partner'}`;
      const body = [
        'Hello Cyclone Aero Design,',
        '',
        'Our company is interested in partnering with the team.',
        '',
        `Company / Organization: ${company}`,
        `Contact Name: ${name}`,
        `Work Email: ${email}`,
        `Partnership Interest: ${tier}`,
        '',
        'Additional information:',
        message || 'No additional details provided.',
        '',
        'We have reviewed the giving options on the sponsorship site. Please follow up regarding partnership benefits, recognition, and any remaining next steps.',
        '',
        'Thank you,',
        name
      ].join('\n');

      const recipients = 'aero.sae@iastate.edu,nm1590@iastate.edu,maddyrd@iastate.edu';
      window.location.href = `mailto:${recipients}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
