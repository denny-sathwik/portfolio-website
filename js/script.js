// ===================================
// PORTFOLIO WEBSITE - JAVASCRIPT
// ===================================

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // DARK MODE TOGGLE
    // ===================================
    
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply saved theme on page load
    if (currentTheme === 'dark') {
        body.classList.add('dark-theme');
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        
        // Save theme preference
        const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
    
    
    // ===================================
    // MOBILE MENU TOGGLE
    // ===================================
    
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');
    
    // Show menu
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.add('show-menu');
        });
    }
    
    // Hide menu
    if (navClose) {
        navClose.addEventListener('click', function() {
            navMenu.classList.remove('show-menu');
        });
    }
    
    // Hide menu when clicking on nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show-menu');
        });
    });
    
    
    // ===================================
    // SMOOTH SCROLLING
    // ===================================
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    
    // ===================================
    // ACTIVE NAVIGATION HIGHLIGHTING
    // ===================================
    
    const sections = document.querySelectorAll('.section');
    
    function highlightNavigation() {
        const scrollPosition = window.scrollY + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active-link'));
                if (navLink) {
                    navLink.classList.add('active-link');
                }
            }
        });
    }
    
    window.addEventListener('scroll', highlightNavigation);
    
    
    // ===================================
    // SCROLL ANIMATIONS
    // ===================================
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe all sections for fade-in animation
    sections.forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
    
    // Observe project cards
    const projectCards = document.querySelectorAll('.project__card');
    projectCards.forEach(card => {
        card.classList.add('fade-in');
        observer.observe(card);
    });
    
    // Observe skill tags (HTML uses .skill__tag)
    const skillTagsForObserver = document.querySelectorAll('.skill__tag');
    skillTagsForObserver.forEach(tag => {
        tag.classList.add('fade-in');
        observer.observe(tag);
    });

    
    
    // ===================================
    // FORM VALIDATION & SUBMISSION
    // ===================================
    
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            // Clear previous errors
            clearErrors();
            
            // Validation
            let isValid = true;
            
            // Name validation
            if (name.value.trim() === '') {
                showError('name', 'Name is required');
                isValid = false;
            } else if (name.value.trim().length < 2) {
                showError('name', 'Name must be at least 2 characters');
                isValid = false;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email.value.trim() === '') {
                showError('email', 'Email is required');
                isValid = false;
            } else if (!emailRegex.test(email.value.trim())) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }
            
            // Subject validation
            if (subject.value.trim() === '') {
                showError('subject', 'Subject is required');
                isValid = false;
            } else if (subject.value.trim().length < 3) {
                showError('subject', 'Subject must be at least 3 characters');
                isValid = false;
            }
            
            // Message validation
            if (message.value.trim() === '') {
                showError('message', 'Message is required');
                isValid = false;
            } else if (message.value.trim().length < 10) {
                showError('message', 'Message must be at least 10 characters');
                isValid = false;
            }
            
            // If form is valid, submit (in real scenario, send to backend)
            if (isValid) {
                // Simulate form submission
                showFormMessage('success', 'Thank you! Your message has been sent successfully.');
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
                
                // In a real application, you would send the data to a backend:
                /*
                fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name.value,
                        email: email.value,
                        subject: subject.value,
                        message: message.value
                    })
                })
                .then(response => response.json())
                .then(data => {
                    showFormMessage('success', 'Thank you! Your message has been sent successfully.');
                    contactForm.reset();
                })
                .catch(error => {
                    showFormMessage('error', 'Oops! Something went wrong. Please try again.');
                });
                */
            }
        });
    }
    
    // Show error message for specific field
    function showError(fieldId, message) {
        const errorElement = document.getElementById(`${fieldId}-error`);
        const inputElement = document.getElementById(fieldId);
        
        if (errorElement) {
            errorElement.textContent = message;
        }
        
        if (inputElement) {
            inputElement.style.borderColor = '#ef4444';
        }
    }
    
    // Clear all error messages
    function clearErrors() {
        const errorElements = document.querySelectorAll('.form__error');
        const inputElements = document.querySelectorAll('.form__input');
        
        errorElements.forEach(element => {
            element.textContent = '';
        });
        
        inputElements.forEach(element => {
            element.style.borderColor = '';
        });
    }
    
    // Show form submission message
    function showFormMessage(type, message) {
        formMessage.textContent = message;
        formMessage.className = `form__message ${type}`;
        formMessage.style.display = 'block';
    }
    
    
    // ===================================
    // HEADER SHADOW ON SCROLL
    // ===================================
    
    const header = document.querySelector('.header');
    
    function addHeaderShadow() {
        if (window.scrollY >= 50) {
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        }
    }
    
    window.addEventListener('scroll', addHeaderShadow);
    
    
    // ===================================
    // SKILL TAGS ANIMATION
    // ===================================
    
    const skillTags = document.querySelectorAll('.skill__tag');
    
    const skillTagObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'all 0.5s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                skillTagObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    skillTags.forEach(tag => {
        skillTagObserver.observe(tag);
    });
    
    
    // ===================================
    // CINEMATIC REVEAL + STAGGER
    // ===================================

    const cinematicObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;

                entry.target.classList.add('visible');

                // Stagger children if present
                const children = entry.target.querySelectorAll('[data-stagger]');
                children.forEach((child) => {
                    child.classList.add('visible');
                });
            });
        },
        { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    // Mark sections for bloom
    const bloomTargets = document.querySelectorAll('.section');
    bloomTargets.forEach((section) => {
        section.classList.add('section-bloom');

        // Convert direct headings + paragraphs + cards into stagger items (non-destructive)
        const staggerables = section.querySelectorAll('h1,h2,h3,p,.project__card,.skill__tag,.btn');
        staggerables.forEach((el) => {
            // Avoid double-staggering elements already animated elsewhere
            if (el.classList.contains('reveal-stagger')) return;
            el.classList.add('reveal-stagger');

            // Provide a stable stagger order per section
            const index = Array.from(staggerables).indexOf(el);
            el.style.setProperty('--stagger', index * 70);

            // Observe the element itself
            cinematicObserver.observe(el);
        });

        // Also observe the section for bloom
        cinematicObserver.observe(section);
    });

    // ===================================
    // 3D TILT + MAGNETIC BUTTONS
    // ===================================

    function isCoarsePointer() {
        return window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
    }

    const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const tiltEnabled = !reduceMotion && !isCoarsePointer();

    const tiltCards = document.querySelectorAll('.project__card');
    tiltCards.forEach((card) => {
        card.classList.add('tilt');

        if (!tiltEnabled) return;

        card.addEventListener('pointermove', (e) => {
            const rect = card.getBoundingClientRect();
            const px = e.clientX - rect.left;
            const py = e.clientY - rect.top;
            const mx = (px / rect.width) * 100;
            const my = (py / rect.height) * 100;

            const rotY = ((px / rect.width) - 0.5) * 16; // left/right
            const rotX = -(((py / rect.height) - 0.5) * 12); // up/down

            card.style.setProperty('--mx', `${mx}%`);
            card.style.setProperty('--my', `${my}%`);
            card.style.transform = `translateY(-6px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
        });

        card.addEventListener('pointerleave', () => {
            card.style.transform = '';
        });
    });

    // Magnetic buttons
    const magneticBtns = document.querySelectorAll('.btn');
    magneticBtns.forEach((btn) => {
        btn.dataset.magnetic = 'true';
        if (!tiltEnabled) return;

        btn.addEventListener('pointermove', (e) => {
            const rect = btn.getBoundingClientRect();
            const px = e.clientX - rect.left;
            const py = e.clientY - rect.top;
            const mx = (px / rect.width) * 100;
            const my = (py / rect.height) * 100;

            btn.style.setProperty('--mx', `${mx}%`);
            btn.style.setProperty('--my', `${my}%`);

            const dx = (mx - 50) / 50; // -1..1
            const dy = (my - 50) / 50;
            btn.style.transform = `translate(${dx * 4}px, ${dy * 3}px)`;
        });

        btn.addEventListener('pointerleave', () => {
            btn.style.transform = '';
        });
    });

    // ===================================
    // SCROLL TO TOP BUTTON (Optional)
    // ===================================

    
    // You can add a scroll-to-top button if desired
    // Uncomment the following code and add the button to HTML
    
    /*
    const scrollTopBtn = document.getElementById('scroll-top');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY >= 500) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    */
    
    
    // ===================================
    // TYPING EFFECT (Optional for Hero)
    // ===================================
    
    // Uncomment if you want a typing effect in the hero section
    /*
    const typedText = document.querySelector('.hero__subtitle');
    const textArray = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Creative Thinker'];
    let textArrayIndex = 0;
    let charIndex = 0;
    
    function type() {
        if (charIndex < textArray[textArrayIndex].length) {
            typedText.textContent += textArray[textArrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 100);
        } else {
            setTimeout(erase, 2000);
        }
    }
    
    function erase() {
        if (charIndex > 0) {
            typedText.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 50);
        } else {
            textArrayIndex++;
            if (textArrayIndex >= textArray.length) textArrayIndex = 0;
            setTimeout(type, 500);
        }
    }
    
    // Start typing effect
    setTimeout(type, 1000);
    */
    
    
    // ===================================
    // CONSOLE MESSAGE
    // ===================================
    
    // ===================================
    // SCROLL-DRIVEN PARALLAX (lightweight)
    // ===================================

    const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

    const onScrollParallax = () => {
        const y = window.scrollY || 0;
        const t = clamp(y / 900, 0, 1);

        // Move hero blob + profile subtly
        const blob = document.querySelector('.hero__blob');
        const profile = document.querySelector('.home__profile-img');

        if (blob) {
            blob.style.transform = `translateY(${t * 22}px) rotate(${t * 8}deg) scale(${1 + t * 0.03})`;
        }
        if (profile) {
            profile.style.transform = `translateY(${t * -18}px)`;
        }

        // Update CSS vars for shine/bloom centers
        const mx = 50 + (Math.sin((t + 0.1) * Math.PI * 2) * 12);
        const my = 20 + (Math.cos((t + 0.2) * Math.PI * 2) * 10);
        document.documentElement.style.setProperty('--mx', `${mx}%`);
        document.documentElement.style.setProperty('--my', `${my}%`);
    };

    window.addEventListener('scroll', onScrollParallax, { passive: true });
    onScrollParallax();




    console.log('%c👋 Welcome to my portfolio!', 'color: #2563eb; font-size: 20px; font-weight: bold;');

    console.log('%cInterested in the code? Check out the repository!', 'color: #6b7280; font-size: 14px;');

});


// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance optimization
function debounce(func, wait = 20, immediate = true) {
    let timeout;
    return function() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

