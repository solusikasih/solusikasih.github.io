document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('cta-btn');
    contactBtn.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});