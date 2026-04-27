document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const mobileBtnIcon = document.querySelector('.mobile-menu-btn i');

    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle icon between bars and xmark
        if(navLinks.classList.contains('active')) {
            mobileBtnIcon.classList.remove('fa-bars');
            mobileBtnIcon.classList.add('fa-xmark');
        } else {
            mobileBtnIcon.classList.remove('fa-xmark');
            mobileBtnIcon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            mobileBtnIcon.classList.remove('fa-xmark');
            mobileBtnIcon.classList.add('fa-bars');
        });
    });

    // --- Sticky Navigation & Active State ---
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        // Sticky Navbar effect
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active link highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // --- Scroll Reveal Animation ---
    const revealElements = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;
            if (itemTop < windowHeight - revealPoint) {
                item.classList.add('active');
            }
        });
    };

    // Trigger on load
    revealOnScroll();

    // Trigger on scroll
    window.addEventListener('scroll', revealOnScroll);

    // --- Form Submission Prevention (for demo purposes) ---
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.innerText = 'Sending...';
            btn.style.opacity = '0.8';
            
            // Simulate API call
            setTimeout(() => {
                btn.innerText = 'Message Sent!';
                btn.style.background = 'linear-gradient(135deg, #11998e, #38ef7d)';
                form.reset();
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = '';
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }

    // --- Newsletter Form Submission (for demo purposes) ---
    const newsletterForm = document.querySelector('.newsletter-form');
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = newsletterForm.querySelector('input');
            const btn = newsletterForm.querySelector('button');
            const icon = btn.querySelector('i');
            
            icon.classList.remove('fa-paper-plane');
            icon.classList.add('fa-spinner', 'fa-spin');
            
            setTimeout(() => {
                icon.classList.remove('fa-spinner', 'fa-spin');
                icon.classList.add('fa-check');
                input.value = '';
                input.placeholder = 'Subscribed successfully!';
                
                setTimeout(() => {
                    icon.classList.remove('fa-check');
                    icon.classList.add('fa-paper-plane');
                    input.placeholder = 'Your email address';
                }, 3000);
            }, 1500);
        });
    }
});
