// Shared authentication functions
function checkAuth() {
    return localStorage.getItem('isAuthenticated') === 'true';
}

function logout() {
    localStorage.removeItem('isAuthenticated');
    window.location.href = 'signin.html';
}

// Add logout button to main app
document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.createElement('button');
    logoutBtn.className = 'text-gray-700 hover:text-gray-900';
    logoutBtn.innerHTML = '<i class="fas fa-sign-out-alt text-xl"></i>';
    logoutBtn.onclick = logout;
    
    const header = document.querySelector('header');
    if (header && checkAuth()) {
        header.appendChild(logoutBtn);
    }
});