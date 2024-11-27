// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animate Sections on Scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Function to add the animation class when the element is in view
function handleScrollAnimation() {
    const sections = document.querySelectorAll('.fade-in-hidden');
    sections.forEach((section) => {
        if (isElementInViewport(section)) {
            section.classList.add('fadeInUp'); // Trigger animation when section is in view
            section.classList.remove('fade-in-hidden'); // Remove the initial hidden state
        }
    });
}

// Run handleScrollAnimation on scroll and page load
window.addEventListener('scroll', handleScrollAnimation);
window.addEventListener('load', handleScrollAnimation);

// Trigger the initial check in case of immediate visibility
handleScrollAnimation();