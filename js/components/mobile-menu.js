export function handleMobileMenu() {
    const header = document.querySelector('header.header');
    const button = header.querySelector('.menu-btn-mobile');
    const menu = header.querySelector('.mobile-menu');

    button.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active');
        menu.classList.toggle('active');
    });
}
