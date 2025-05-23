console.log("main.js loaded");

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu after clicking
            navLinks.classList.remove('active');
        }
    });
});

// Active navigation link highlighting
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const submitButton = contactForm.querySelector('button[type="submit"]');
    
    // Add loading state
    submitButton.classList.add('loading');
    submitButton.disabled = true;
    
    try {
        // Simulate form submission (replace with actual endpoint)
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Show success message
        alert('Message sent successfully!');
        contactForm.reset();
    } catch (error) {
        // Show error message
        alert('An error occurred. Please try again.');
    } finally {
        // Remove loading state
        submitButton.classList.remove('loading');
        submitButton.disabled = false;
    }
});

// Scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Add scroll to top button styles
const style = document.createElement('style');
style.textContent = `
    .scroll-top-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        font-size: 20px;
        transition: all 0.3s ease;
        z-index: 1000;
    }
    
    .scroll-top-btn:hover {
        transform: translateY(-5px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }
`;
document.head.appendChild(style);

// Add intersection observer for animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply animation to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// Robust JS Typing Effect for .typing-effect-js
const roles = [
  "Web Developer",
  "Creative Designer",
  "TOT Trainer",
  "Graphic Drsigner",
  "AI Devolober",
  "Executive Director"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {
  const typingElement = document.querySelector('.typing-effect-js');
  if (!typingElement) {
    setTimeout(typeRole, 100);
    return;
  }
  const currentRole = roles[roleIndex];
  if (isDeleting) {
    charIndex--;
    typingElement.textContent = currentRole.substring(0, charIndex);
  } else {
    charIndex++;
    typingElement.textContent = currentRole.substring(0, charIndex);
  }

  let delay = isDeleting ? 60 : 120;

  if (!isDeleting && charIndex === currentRole.length) {
    delay = 1200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 400;
  }

  setTimeout(typeRole, delay);
}

if (document.readyState === "loading") {
  document.addEventListener('DOMContentLoaded', typeRole);
} else {
  typeRole();
}

document.addEventListener('DOMContentLoaded', function () {
  function startTyped() {
    if (typeof Typed !== 'function') {
      setTimeout(startTyped, 100);
      return;
    }
    const typedElement = document.querySelector('.typed');
    if (typedElement) {
      const items = typedElement.getAttribute('data-typed-items').split(',').map(item => item.trim());
      new Typed('.typed', {
        strings: items,
        typeSpeed: 80,
        backSpeed: 40,
        backDelay: 1200,
        loop: true,
        showCursor: true,
        cursorChar: '|'
      });
    }
  }
  startTyped();
});

// Fade In/Out Carousel for Titles
document.addEventListener('DOMContentLoaded', () => {
  const titles = [
    "Web Developer",
    "Creative Designer",
    "TOT Trainer",
    "Graphic Drsigner",
    "AI Devolober",
    "Executive Director"
  ];
  let titleIndex = 0;
  const titleEl = document.getElementById('title-carousel');
  if (!titleEl) {
    console.error('No #title-carousel element found!');
    return;
  }
  function showNextTitle() {
    titleEl.classList.remove('visible');
    setTimeout(() => {
      titleEl.textContent = titles[titleIndex];
      titleEl.classList.add('visible');
      titleIndex = (titleIndex + 1) % titles.length;
    }, 600); // match transition duration
  }
  showNextTitle();
  setInterval(showNextTitle, 2200); // 0.6s fade out + 1s visible + 0.6s fade in
}); 