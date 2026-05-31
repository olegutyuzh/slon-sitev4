    (() => {
      const items = document.querySelectorAll('.contact-card, .contact-footnote');
      items.forEach((el) => el.classList.add('reveal-on-scroll'));

      if (!('IntersectionObserver' in window)) {
        items.forEach((el) => el.classList.add('is-visible'));
        return;
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            // Невелика затримка по черзі для трьох карток
            setTimeout(() => entry.target.classList.add('is-visible'), i * 90);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

      items.forEach((el) => observer.observe(el));
    })();