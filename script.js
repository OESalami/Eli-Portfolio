// Loading Page Script
setTimeout(() => {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.main-content').style.display = 'block';
}, 5000);

document.getElementById('hamburger').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
});

