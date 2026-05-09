// ============================================
// TAGLINE ROTATION SYSTEM
// Cycles through pre-set taglines on the homepage hero
// ============================================
const TAGLINES = [
    "Therapy for deeper well-being",
    "Space to slow down, heal deeply, and reconnect with the most grounded version of yourself.",
    "Holistic approach to therapy that heals the mind, body, and spirit.",
    "Discover new relationship skills, find peaceful moments of introspection, release old wounds."
];

function initTaglineRotation() {
    const heroH1 = document.querySelector('[data-tagline-rotate]');
    if (!heroH1) return;

    // Mark the element for CSS transitions
    heroH1.style.transition = 'opacity 0.6s ease';

    // Pick a random starting tagline (different from the default)
    let currentIndex = 0;

    function rotateTagline() {
        // Fade out
        heroH1.style.opacity = '0';

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % TAGLINES.length;
            heroH1.textContent = TAGLINES[currentIndex];
            // Fade in
            heroH1.style.opacity = '1';
        }, 600);
    }

    // Rotate every 8 seconds
    setInterval(rotateTagline, 8000);
}

// ============================================
// HERO PHOTO ROTATION
// Picks a random St. Augustine landmark photo per visit
// on any hero marked data-hero-rotate="st-augustine"
// ============================================
function initHeroPhotoRotation() {
    const hero = document.querySelector('.hero[data-hero-rotate="st-augustine"]');
    if (!hero) return;
    const photos = [
        'images/hero-st-aug-1.jpg',
        'images/hero-st-aug-2.jpg',
        'images/hero-st-aug-3.jpg',
        'images/hero-st-aug-4.jpg',
        'images/hero-st-aug-5.jpg',
        'images/hero-st-aug-6.jpg',
        'images/hero-st-aug-7.jpg'
    ];
    const choice = photos[Math.floor(Math.random() * photos.length)];
    hero.style.backgroundImage = `url('${choice}')`;
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Initialize tagline rotation on homepage
    initTaglineRotation();
    initHeroPhotoRotation();
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-links');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // Toggle mobile menu
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Mobile dropdown toggle
    dropdowns.forEach(dropdown => {
        const link = dropdown.querySelector('a');
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                dropdown.classList.toggle('active');
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('nav')) {
            navMenu.classList.remove('active');
            if (mobileMenuToggle) {
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#book') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe service cards and testimonials
    document.querySelectorAll('.service-card, .testimonial, .feature').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Form validation (for contact forms on other pages)
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea[name="message"]');
        
        let isValid = true;
        
        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        
        // Validate name
        if (name && name.value.trim() === '') {
            showError(name, 'Please enter your name');
            isValid = false;
        }
        
        // Validate email
        if (email && !isValidEmail(email.value)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Validate message
        if (message && message.value.trim() === '') {
            showError(message, 'Please enter a message');
            isValid = false;
        }
        
        if (isValid) {
            // Submit form (you'll need to add your backend endpoint)
            submitForm(form);
        }
    });
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(input, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.color = '#d32f2f';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '0.25rem';
    errorDiv.textContent = message;
    input.parentElement.appendChild(errorDiv);
    input.style.borderColor = '#d32f2f';
}

function submitForm(form) {
    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate form submission (replace with actual backend call)
    setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        form.reset();
        
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 3000);
    }, 1500);
}
