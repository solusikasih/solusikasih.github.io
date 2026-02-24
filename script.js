document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('cta-btn');
    contactBtn.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        if(contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});