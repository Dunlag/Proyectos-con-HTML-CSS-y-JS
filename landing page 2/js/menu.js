const hamburgerIcon = document.querySelector('.nav__hamburger');
const navOverlay = document.querySelector('.nav__overlay');

hamburgerIcon.addEventListener('click', () => {
    hamburgerIcon.classList.toggle('nav__hamburger--open')

    navOverlay.classList.toggle('nav__overlay--show');
})

navOverlay.addEventListener('click', (e) => {
    e.preventDefault();
    const currentElement = e.target;
    //console.log(e.target);

    if (isActive(currentElement, 'nav__parent')) {
        // console.log('tengo un submenu');

        const subMenu = currentElement.parentElement.children[1];
        console.log(subMenu);
        

        if (window.innerWidth < 768) {

            let height = (subMenu.clientHeight == 0) ? subMenu.scrollHeight : 0;
           //console.log(subMenu.clientHeight);
            
            subMenu.style.height = `${height}px`
        } else {

        }
    }
})

function isActive(element, string) {
    return element.classList.value.includes(string);
}