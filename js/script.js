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
    const currentTheme = localStorage.getItem('theme') || 'light';
    
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
    
    // Observe skill items
    const skillItems = document.querySelectorAll('.skill__item');
    skillItems.forEach(item => {
        item.classList.add('fade-in');
        observer.observe(item);
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

