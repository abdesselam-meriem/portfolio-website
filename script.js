// Theme toggle functionality
function initTheme() {
    const themeToggle = document.getElementById('themeButton');
    const body = document.body;
    
    // Check for saved theme preference or default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateThemeButton(true);
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            
            // Save preference to localStorage
            if (body.classList.contains('dark-mode')) {
                localStorage.setItem('theme', 'dark');
                updateThemeButton(true);
            } else {
                localStorage.setItem('theme', 'light');
                updateThemeButton(false);
            }
        });
    }
}

// Update button icon and text
function updateThemeButton(isDarkMode) {
    const themeButton = document.getElementById('themeButton');
    if (themeButton) {
        const icon = themeButton.querySelector('i');
        if (isDarkMode) {
            icon.className = 'fas fa-sun';
            themeButton.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
        } else {
            icon.className = 'fas fa-moon';
            themeButton.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
        }
    }
}

// Initialize theme when page loads
document.addEventListener('DOMContentLoaded', initTheme);