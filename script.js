// Calculate days since birth
const birthDate = new Date('1982-01-01'); // Replace with your actual birth date
const today = new Date();
const diffTime = Math.abs(today - birthDate);
const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
document.getElementById('uptime').textContent = diffDays;

// Add some terminal-style interactivity if you want
// This is optional, remove if you prefer static
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.terminal-body');
    
    // Simulate typing effect on load
    const lines = container.querySelectorAll('.line');
    lines.forEach((line, index) => {
        line.style.opacity = '0';
        setTimeout(() => {
            line.style.opacity = '1';
            line.style.transition = 'opacity 0.3s';
        }, index * 200);
    });
});
