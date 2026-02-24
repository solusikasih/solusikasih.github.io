document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('cta-btn');

    contactBtn.addEventListener('click', () => {
        // Smooth scroll to the contact section
        document.getElementById('contact').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});