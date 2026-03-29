document.addEventListener('DOMContentLoaded', function() {
    // Scroll Reveal Animation
    const revealElements = document.querySelectorAll(
        '.intro-section, .services-section, .about-teaser-section, .cta-section, .service-item'
    );

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // Active Nav Link Highlighting on Scroll
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = {
        'index.html': document.querySelector('.hero'),
        'about.html': document.querySelector('.intro-section'),
        'packages.html': document.querySelector('.services-section'),
    };

    window.addEventListener('scroll', function() {
        let current = '';

        if (window.scrollY < window.innerHeight * 0.8) {
            current = 'index.html';
        } else if (window.scrollY < window.innerHeight * 2) {
            current = 'about.html';
        } else {
            current = 'packages.html';
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current ||
                (current === 'index.html' && link.getAttribute('href') === 'index.html')) {
                link.classList.add('active');
            }
        });
    });

    // Bouncing Scroll Indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }

    // Smooth scroll for internal anchor links
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
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        form.reset();

        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 3000);
    }, 1500);
}
