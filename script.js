(() => {

  // =========================
  // MOBILE NAVIGATION
  // =========================

  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.primary-nav');

  if (menuButton && nav) {

    menuButton.addEventListener('click', () => {

      const isOpen = nav.classList.toggle('open');

      menuButton.setAttribute(
        'aria-expanded',
        String(isOpen)
      );

    });


    nav.querySelectorAll('a').forEach(link => {

      link.addEventListener('click', () => {

        nav.classList.remove('open');

        menuButton.setAttribute(
          'aria-expanded',
          'false'
        );

      });

    });

  }


  // =========================
  // SPONSORSHIP PRICE +
  // =========================

  document
    .querySelectorAll('.tier-price span')
    .forEach(span => {

      span.style.fontSize = 'inherit';
      span.style.fontWeight = 'inherit';

    });


  // =========================
  // SCROLL REVEAL ANIMATIONS
  // =========================

  const revealItems =
    document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {

    const observer =
      new IntersectionObserver(

        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                'in-view'
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },

        {
          threshold: 0.12
        }

      );


    revealItems.forEach(item => {

      observer.observe(item);

    });

  } else {

    revealItems.forEach(item => {

      item.classList.add('in-view');

    });

  }


  // =========================
  // CONTACT FORM
  // =========================

  const form =
    document.getElementById('sponsor-form');


  if (form) {

    form.addEventListener(
      'submit',
      event => {

        event.preventDefault();


        const data =
          new FormData(form);


        const company =
          String(
            data.get('company') || ''
          ).trim();


        const name =
          String(
            data.get('name') || ''
          ).trim();


        const email =
          String(
            data.get('email') || ''
          ).trim();


        const interest =
          String(
            data.get('tier') || ''
          ).trim();


        const message =
          String(
            data.get('message') || ''
          ).trim();


        // =========================
        // EMAIL SUBJECT
        // =========================

        const subject =
          `Cyclone Aero Design Inquiry — ${
            company ||
            interest ||
            'New Contact'
          }`;


        // =========================
        // EMAIL BODY
        // =========================

        const body = [

          'Hello Cyclone Aero Design,',

          '',

          'I would like to connect with the team.',

          '',

          `Company / Organization: ${company}`,

          `Contact Name: ${name}`,

          `Work Email: ${email}`,

          `Area of Interest: ${interest}`,

          '',

          'Message:',

          message ||
            'No additional details provided.',

          '',

          'Thank you,',

          name

        ].join('\n');


        // =========================
        // EMAIL RECIPIENTS
        // =========================

        const recipients =
          'aero.sae@iastate.edu,nm1590@iastate.edu,maddyrd@iastate.edu';


        // =========================
        // OPEN EMAIL CLIENT
        // =========================

        window.location.href =
          `mailto:${recipients}` +
          `?subject=${encodeURIComponent(subject)}` +
          `&body=${encodeURIComponent(body)}`;

      }
    );

  }

})();
