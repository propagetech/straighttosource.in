/**
 * Straight to Source - Main JavaScript
 * Minimal, vanilla JS for modern browsers
 * Purpose: Mobile menu toggle, smooth scrolling
 */

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navbarMenu = document.getElementById('navbar-menu');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navbarMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  const navLinks = navbarMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      menuToggle.setAttribute('aria-expanded', 'false');
      navbarMenu.classList.remove('active');
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
      menuToggle.setAttribute('aria-expanded', 'false');
      navbarMenu.classList.remove('active');
    }
  });
}

// Scroll reveal — purposeful, restrained motion that respects user preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealEls = document.querySelectorAll('[data-reveal]');

if (revealEls.length) {
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach((el) => el.classList.add('is-visible'));
  } else {
    // Stagger siblings within the same parent for a gentle cascade
    revealEls.forEach((el) => {
      const siblings = Array.from(el.parentElement.children).filter((c) => c.hasAttribute('data-reveal'));
      const index = siblings.indexOf(el);
      if (index > 0) {
        el.style.transitionDelay = `${Math.min(index * 80, 320)}ms`;
      }
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

    revealEls.forEach((el) => revealObserver.observe(el));
  }
}

// Smooth scroll for anchor links (native support in modern browsers, fallback for older)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href && href !== '#') {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Lazy load images (native support with loading="lazy" attribute)
// This is a fallback for older browsers
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
        }
        imageObserver.unobserve(img);
      }
    });
  }, { rootMargin: '50px' });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// Performance monitoring
if ('PerformanceObserver' in window) {
  try {
    const perfObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 3000) {
          console.warn(`Slow operation detected: ${entry.name} took ${entry.duration}ms`);
        }
      }
    });
    perfObserver.observe({ entryTypes: ['measure', 'navigation'] });
  } catch (e) {
    // Performance monitoring not critical
  }
}

// Add loading="lazy" to images if not already set (fallback)
document.querySelectorAll('img').forEach(img => {
  if (!img.loading) {
    img.loading = 'lazy';
  }
});

console.log('Straight to Source website loaded successfully');
