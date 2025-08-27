if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var modeSwitch = document.getElementById('mode-switch');
    modeSwitch.addEventListener('change', function() {
        if (modeSwitch.checked) {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            localStorage.setItem('mode', 'dark');
        } else {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            localStorage.setItem('mode', 'light');
        }
    });
}
// On page load, set the mode based on localStorage
window.onload = function() {
    var mode = localStorage.getItem('mode');
    var modeSwitch = document.getElementById('mode-switch');
    if (mode === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        modeSwitch.checked = true;
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        modeSwitch.checked = false;
    }
}
// Optional: If you want to set a default mode based on system preference
if (!localStorage.getItem('mode')) {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        document.getElementById('mode-switch').checked = false;
    } else {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        document.getElementById('mode-switch').checked = true;
    }
}   
        
        