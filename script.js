// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Hamburger Menu Toggle
    var hamburger = document.getElementById('hamburger');
    var navMenu = document.getElementById('nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
    
    // Close menu when clicking a link
    var navLinks = document.querySelectorAll('.nav-menu a');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    }
    
    // Fade In Animation on Scroll
    var fadeElements = document.querySelectorAll('.fade-in');
    
    function checkFade() {
        for (var i = 0; i < fadeElements.length; i++) {
            var element = fadeElements[i];
            var position = element.getBoundingClientRect().top;
            var screenHeight = window.innerHeight;
            
            if (position < screenHeight - 100) {
                element.classList.add('visible');
            }
        }
    }
    
    // Run on page load
    checkFade();
    
    // Run on scroll
    window.addEventListener('scroll', checkFade);
    
    // Contact Form Validation
    var contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form fields
            var name = document.getElementById('name');
            var email = document.getElementById('email');
            var message = document.getElementById('message');
            
            // Get error message elements
            var nameError = document.getElementById('name-error');
            var emailError = document.getElementById('email-error');
            var messageError = document.getElementById('message-error');
            
            // Reset errors
            nameError.textContent = '';
            emailError.textContent = '';
            messageError.textContent = '';
            name.classList.remove('error');
            email.classList.remove('error');
            message.classList.remove('error');
            
            var isValid = true;
            
            // Validate name
            if (name.value.trim() === '') {
                nameError.textContent = 'Please enter your name';
                name.classList.add('error');
                isValid = false;
            }
            
            // Validate email
            if (email.value.trim() === '') {
                emailError.textContent = 'Please enter your email';
                email.classList.add('error');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                emailError.textContent = 'Please enter a valid email address';
                email.classList.add('error');
                isValid = false;
            }
            
            // Validate message
            if (message.value.trim() === '') {
                messageError.textContent = 'Please enter a message';
                message.classList.add('error');
                isValid = false;
            }
            
            // If form is valid, show success message
            if (isValid) {
                var successMessage = document.getElementById('form-success');
                successMessage.classList.add('show');
                
                // Clear form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(function() {
                    successMessage.classList.remove('show');
                }, 5000);
            }
        });
    }
    
    // Email validation function
    function isValidEmail(email) {
        var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(email);
    }
    
    // Smooth scroll for anchor links
    var anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    for (var i = 0; i < anchorLinks.length; i++) {
        anchorLinks[i].addEventListener('click', function(e) {
            var targetId = this.getAttribute('href');
            
            if (targetId !== '#') {
                e.preventDefault();
                var targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    }
    
});