/* =============================================
   NTOKOZO MBATHA INTERIORS - JAVASCRIPT
   Premium Interior Design Website
   ============================================= */

// =============================================
// MOBILE NAVIGATION
// =============================================

const navHamburger = document.getElementById('navHamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
navHamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navHamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navHamburger.classList.remove('active');
    });
});

// =============================================
// SMOOTH SCROLLING
// =============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// =============================================
// ACTIVE NAVIGATION LINK HIGHLIGHTING
// =============================================

function setActiveLink() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveLink);

// =============================================
// GALLERY FILTERS
// =============================================

const filterBtns = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        galleryItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                // Trigger animation
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// =============================================
// GALLERY LIGHTBOX
// =============================================

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentImageIndex = 0;
const galleryImages = [];

// Collect all gallery images
galleryItems.forEach((item, index) => {
    const img = item.querySelector('img');
    const overlay = item.querySelector('.gallery-overlay');
    const title = overlay ? overlay.querySelector('h4')?.textContent || '' : '';
    const description = overlay ? overlay.querySelector('p')?.textContent || '' : '';
    
    galleryImages.push({
        src: img.src,
        alt: img.alt,
        title: title,
        description: description
    });

    // Open lightbox on click
    item.addEventListener('click', () => {
        currentImageIndex = index;
        openLightbox();
    });
});

// Open lightbox
function openLightbox() {
    lightbox.classList.add('active');
    updateLightboxImage();
    document.body.style.overflow = 'hidden';
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

// Update lightbox image
function updateLightboxImage() {
    if (galleryImages[currentImageIndex]) {
        lightboxImg.src = galleryImages[currentImageIndex].src;
        lightboxImg.alt = galleryImages[currentImageIndex].alt;
        
        if (galleryImages[currentImageIndex].title) {
            lightboxCaption.innerHTML = `
                <h4>${galleryImages[currentImageIndex].title}</h4>
                <p>${galleryImages[currentImageIndex].description}</p>
            `;
        } else {
            lightboxCaption.innerHTML = '';
        }
    }
}

// Close button
lightboxClose.addEventListener('click', closeLightbox);

// Previous button
lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
});

// Next button
lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
});

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
    } else if (e.key === 'ArrowRight') {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightboxImage();
    }
});

// Touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, false);

function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
        currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
        updateLightboxImage();
    }
    if (touchEndX > touchStartX + 50) {
        currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxImage();
    }
}

// =============================================
// WHATSAPP ENQUIRY FORM
// =============================================

const enquiryForm = document.getElementById('enquiryForm');

enquiryForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form values
    const fullName = document.getElementById('fullName').value.trim();
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const service = document.getElementById('service').value;
    const location = document.getElementById('location').value.trim();
    const projectDescription = document.getElementById('projectDescription').value.trim();

    // Validate form
    if (!fullName || !phoneNumber || !service || !location || !projectDescription) {
        alert('Please fill in all required fields.');
        return;
    }

    // Create WhatsApp message
    const message = `Hello Ntokozo Mbatha Interiors,

My name is ${fullName}.

I am interested in: ${service}.

My location is: ${location}.

Project details: ${projectDescription}.

Please assist me with a quotation.

Thank you.`;

    // URL encode the message
    const encodedMessage = encodeURIComponent(message);
    
    // WhatsApp URL
    const whatsappURL = `https://wa.me/27766891123?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Reset form
    enquiryForm.reset();
    
    // Show success message
    alert('Opening WhatsApp... Your enquiry is ready to send!');
});

// =============================================
// SCROLL ANIMATIONS
// =============================================

const animateElements = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

animateElements.forEach(element => {
    observer.observe(element);
});

// =============================================
// BACK TO TOP BUTTON
// =============================================

const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// =============================================
// AUTOMATIC COPYRIGHT YEAR
// =============================================

const currentYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = currentYear;

// =============================================
// NAVBAR BACKGROUND ON SCROLL
// =============================================

const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(7, 29, 58, 0.98)';
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.backgroundColor = 'rgba(7, 29, 58, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// =============================================
// LAZY LOAD IMAGES
// =============================================

if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// =============================================
// PERFORMANCE OPTIMIZATION
// =============================================

// Debounce scroll events
function debounce(func, wait = 10, immediate = true) {
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

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(setActiveLink, 50));

// =============================================
// PRICING TABLE RESPONSIVE SCROLL INDICATOR
// =============================================

const pricingTableContainer = document.querySelector('.pricing-table-container');

if (pricingTableContainer) {
    // Add scroll indicator on mobile
    if (window.innerWidth < 768) {
        pricingTableContainer.addEventListener('scroll', () => {
            const scrollLeft = pricingTableContainer.scrollLeft;
            const scrollWidth = pricingTableContainer.scrollWidth;
            const clientWidth = pricingTableContainer.clientWidth;
            
            if (scrollLeft + clientWidth >= scrollWidth - 10) {
                pricingTableContainer.style.borderRight = 'none';
            } else {
                pricingTableContainer.style.borderRight = '3px solid var(--color-gold)';
            }
        });
    }
}

// =============================================
// SMOOTH SCROLL FOR SCROLL INDICATOR
// =============================================

const scrollIndicator = document.querySelector('.scroll-indicator');

if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// =============================================
// FORM VALIDATION ENHANCEMENT
// =============================================

const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.value.trim() === '' && input.hasAttribute('required')) {
            input.style.borderColor = '#ff6b6b';
        } else {
            input.style.borderColor = '#ddd';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = 'var(--color-gold)';
    });
});

// =============================================
// CONSOLE MESSAGE
// =============================================

console.log('%c✨ NTOKOZO MBATHA INTERIORS (PTY) LTD ✨', 'color: #C9A45C; font-size: 24px; font-weight: bold;');
console.log('%cTurning Spaces Into Beautiful Homes', 'color: #071D3A; font-size: 14px; font-style: italic;');
console.log('%cWebsite designed with premium craftsmanship.', 'color: #666; font-size: 12px;');

// =============================================
// SERVICE WORKER FOR OFFLINE FUNCTIONALITY (OPTIONAL)
// =============================================

// Uncomment to enable offline functionality
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered successfully:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
*/

// =============================================
// DYNAMIC PROJECT LOADING (FOR FUTURE USE)
// =============================================

// This function can be used to dynamically load projects from a JSON file or API
function loadProjects() {
    // Example structure for future implementation
    const projects = [
        {
            category: 'kitchens',
            image: 'images/kitchen/project1.jpg',
            title: 'Modern Kitchen Design',
            description: 'Contemporary kitchen with premium finishes'
        },
        // Add more projects here
    ];
    
    // This would populate the gallery dynamically
    // Implementation can be added when project images are ready
}

// =============================================
// INITIALIZE
// =============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Ntokozo Mbatha Interiors website loaded successfully!');
    
    // Initialize any additional functionality here
    setActiveLink();
});
