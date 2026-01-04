/**
 * OpenNHP Website - Main JavaScript
 * Dark Forest Theme Interactions
 */

// ============================================
// Navigation
// ============================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Scroll effect for navigation
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 50) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
  
  lastScroll = currentScroll;
});

// Mobile menu toggle
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav__menu--open');
    navToggle.classList.toggle('nav__toggle--active');
  });
}

// Close menu when clicking a link
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('nav__menu--open');
    navToggle.classList.remove('nav__toggle--active');
  });
});

// ============================================
// Particle Background
// ============================================
function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  
  const particleCount = 30;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random properties
    const size = Math.random() * 4 + 2;
    const left = Math.random() * 100;
    const delay = Math.random() * 20;
    const duration = Math.random() * 20 + 15;
    const opacity = Math.random() * 0.3 + 0.1;
    
    particle.style.cssText = `
      width: ${size}px;
      height: ${size}px;
      left: ${left}%;
      animation-delay: ${delay}s;
      animation-duration: ${duration}s;
      opacity: ${opacity};
    `;
    
    container.appendChild(particle);
  }
}

// Initialize particles
createParticles();

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// Intersection Observer for Animations
// ============================================
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const fadeInObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in--visible');
      fadeInObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.card, .ecosystem-card, .paper, .timeline__item, .spec-table').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  
  fadeInObserver.observe(el);
});

// Add visible class styles
const style = document.createElement('style');
style.textContent = `
  .fade-in--visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// ============================================
// Active Navigation Link
// ============================================
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav__link');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && currentPath.endsWith(href)) {
      link.classList.add('nav__link--active');
    } else if (currentPath === '/' && href === 'index.html') {
      link.classList.add('nav__link--active');
    }
  });
}

setActiveNavLink();

// ============================================
// Stats Counter Animation
// ============================================
function animateCounter(el, target, suffix = '') {
  const duration = 2000;
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    
    if (target >= 1000) {
      el.textContent = (current / 1000).toFixed(1) + 'k+';
    } else {
      el.textContent = Math.floor(current) + suffix;
    }
  }, 16);
}

// Observe stats for animation
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const statValue = entry.target;
      const text = statValue.textContent;
      
      if (text.includes('k+')) {
        const num = parseFloat(text) * 1000;
        animateCounter(statValue, num);
      }
      
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.hero__stat-value').forEach(stat => {
  statsObserver.observe(stat);
});

// ============================================
// Copy Code Functionality
// ============================================
function setupCodeCopy() {
  document.querySelectorAll('pre code').forEach(block => {
    const wrapper = document.createElement('div');
    wrapper.style.position = 'relative';
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(block.parentNode.previousSibling === wrapper ? block : block.parentNode.removeChild(block.parentNode).querySelector('code'));
    
    const copyBtn = document.createElement('button');
    copyBtn.className = 'btn btn--sm';
    copyBtn.style.cssText = 'position: absolute; top: 8px; right: 8px; opacity: 0; transition: opacity 0.2s;';
    copyBtn.textContent = 'Copy';
    
    wrapper.appendChild(copyBtn);
    
    wrapper.addEventListener('mouseenter', () => copyBtn.style.opacity = '1');
    wrapper.addEventListener('mouseleave', () => copyBtn.style.opacity = '0');
    
    copyBtn.addEventListener('click', async () => {
      await navigator.clipboard.writeText(block.textContent);
      copyBtn.textContent = 'Copied!';
      setTimeout(() => copyBtn.textContent = 'Copy', 2000);
    });
  });
}

setupCodeCopy();

// ============================================
// Keyboard Navigation
// ============================================
document.addEventListener('keydown', (e) => {
  // ESC to close mobile menu
  if (e.key === 'Escape' && navMenu.classList.contains('nav__menu--open')) {
    navMenu.classList.remove('nav__menu--open');
    navToggle.classList.remove('nav__toggle--active');
  }
});

// ============================================
// Prefers Reduced Motion
// ============================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
  // Disable animations for users who prefer reduced motion
  document.documentElement.style.setProperty('--transition-fast', '0ms');
  document.documentElement.style.setProperty('--transition-base', '0ms');
  document.documentElement.style.setProperty('--transition-slow', '0ms');
  
  // Remove particles
  const particles = document.getElementById('particles');
  if (particles) particles.style.display = 'none';
}

// ============================================
// GitHub Stars Counter
// ============================================
async function fetchGitHubStars() {
  const starsEl = document.getElementById('github-stars');
  if (!starsEl) return;
  
  try {
    const response = await fetch('https://api.github.com/repos/OpenNHP/opennhp');
    const data = await response.json();
    const stars = data.stargazers_count;
    
    if (stars) {
      if (stars >= 1000) {
        starsEl.textContent = '⭐ ' + (stars / 1000).toFixed(1) + 'k';
      } else {
        starsEl.textContent = '⭐ ' + stars;
      }
    }
  } catch (error) {
    console.log('Could not fetch GitHub stars');
  }
}

fetchGitHubStars();

// ============================================
// Console Easter Egg
// ============================================
console.log(`
%c⬡ OpenNHP - Zero Trust Network Hiding Protocol

%c"In the dark forest of the Internet, 
 the safest strategy is to remain invisible."

%cInterested in contributing? 
→ https://github.com/OpenNHP/opennhp
→ https://discord.gg/CSB6Dmc2

%cProtocol Specification:
→ https://datatracker.ietf.org/doc/html/draft-opennhp-saag-nhp
`, 
  'font-size: 20px; font-weight: bold; color: #00ff9d;',
  'font-size: 14px; color: #a0aec0; font-style: italic;',
  'font-size: 12px; color: #7c3aed;',
  'font-size: 12px; color: #00d4aa;'
);

