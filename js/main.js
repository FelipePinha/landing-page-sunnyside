const openMobileMenuBtn = document.querySelector('.mobile-menu i');

openMobileMenuBtn.addEventListener('click', () => {
    const mobileMenuItems = document.querySelector('.mobile-menu-items');

    mobileMenuItems.classList.toggle('visible');
});
