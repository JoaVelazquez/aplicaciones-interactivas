function toggleTheme() {
    const body = document.querySelector('body');
    const themeIcon = document.querySelector('#theme-icon');
    
    // If no theme is set, we're in dark mode (default)
    if (!body.classList.contains('dark-mode') && !body.classList.contains('light-mode')) {
        body.classList.add('dark-mode');
    }
    
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
    
    // Update the icon based on the current theme
    themeIcon.textContent = body.classList.contains('light-mode') ? '☀️' : '🌙';
}
// Set initial dark theme
document.querySelector('body').classList.add('dark-mode');
document.querySelector('#theme-icon').textContent = '🌙';
