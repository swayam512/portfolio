document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.querySelector('.hamburger');
    const navUL = document.querySelector('nav ul');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navUL.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navUL.classList.remove('active');
        });
    });
    
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Animate skill bars on scroll
    const skillBars = document.querySelectorAll('.skill-level');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.style.width;
            bar.style.width = '0';
            setTimeout(() => {
                bar.style.width = width;
            }, 100);
        });
    }
    
    // Intersection Observer for skill bars animation
    const skillsSection = document.querySelector('.skills');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just log it and show an alert
            console.log({ name, email, subject, message });
            
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Current year for footer
    const year = new Date().getFullYear();
    document.querySelector('.footer-bottom p').innerHTML = `&copy; ${year} Swayam Pandey. All Rights Reserved.`;
});
document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('.name-slide');
    const profileImg = document.querySelector('.profile-img');
    
    // First make sure elements are visible in their initial state
    setTimeout(() => {
        nameElement.style.visibility = 'visible';
        profileImg.style.visibility = 'visible';
        
        // Then trigger the animation
        setTimeout(() => {
            nameElement.classList.add('slide-in');
            profileImg.classList.add('slide-in');
        }, 50);
    }, 100);
});

// make transition animation in first heading
document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector(".hero-content");
  
    if (!heroContent) return; // safety check
  
    const elements = heroContent.querySelectorAll("h1, h2, p");
  
    let totalDelay = 0; // this will track the total accumulated delay
  
    elements.forEach((el) => {
      const words = el.innerText.trim().split(/\s+/);
      
      el.innerHTML = words
        .map((word) => {
          const span = `<span class="word" style="animation-delay:${totalDelay}s;">${word}</span>`;
          totalDelay += 0.1; // increase delay for each word
          return span;
        })
        .join(" ");
    });
  });
  