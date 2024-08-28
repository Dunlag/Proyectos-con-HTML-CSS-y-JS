// Selecciona el ícono de hamburguesa del menú de navegación
const hamburguerIcon = document.querySelector('.nav__hamburguer');

// Selecciona la capa superpuesta del menú de navegación
const navOverlay = document.querySelector('.nav__overlay');

// Variable que almacena el dropdown actual (submenú desplegado)
let currentDropdown = navOverlay;

// Añade un evento de clic al ícono de hamburguesa
hamburguerIcon.addEventListener('click', () => {
    // Alterna la clase que abre/cierra el ícono de hamburguesa
    hamburguerIcon.classList.toggle('nav__hamburguer--open');
    
    // Alterna la clase que muestra/oculta el menú de navegación superpuesto
    navOverlay.classList.toggle('nav__overlay--show');
});

// Añade un evento de clic al overlay del menú de navegación
navOverlay.addEventListener('click', (e) => {
    e.preventDefault(); // Previene la acción predeterminada del clic
    const currentElement = e.target; // Obtiene el elemento en el que se hizo clic

    // Verifica si el elemento clicado es un elemento de menú que tiene submenú
    if (isActive(currentElement, 'nav__parent')) {
        const subMenu = currentElement.parentElement.children[1]; // Obtiene el submenú correspondiente

        // Si el ancho de la ventana es menor a 768px (es decir, en dispositivos móviles)
        if (window.innerWidth < 768) {
            // Ajusta la altura del submenú para abrirlo o cerrarlo
            let height = (subMenu.clientHeight == 0) 
                        ? subMenu.scrollHeight : 0;

            subMenu.style.height = `${height}px`; // Asigna la altura calculada
        } else {
            // En pantallas más grandes, gestiona el despliegue de submenús
            if (!isActive(subMenu, 'nav__inner--show')) {
                // Si hay un dropdown desplegado, lo cierra antes de abrir el nuevo
                closeDropdown(currentDropdown);
            }
            subMenu.classList.toggle('nav__inner--show'); // Alterna la visibilidad del submenú
            currentDropdown = subMenu; // Actualiza el dropdown actual
        }
    }
});

// Función que verifica si un elemento tiene una clase activa específica
function isActive(element, string) {
    return element.classList.value.includes(string);
}

// Función que cierra el dropdown actual
function closeDropdown(currentDropdown) {
    if (isActive(currentDropdown, 'nav__inner--show')) {
        currentDropdown.classList.remove('nav__inner--show');
    }
}

// Añade un evento de redimensionamiento de ventana
window.addEventListener('resize', () => {
    // Cierra cualquier dropdown abierto al redimensionar la ventana
    closeDropdown(currentDropdown);

    // Si el ancho de la ventana es mayor a 768px
    if (window.innerWidth > 768) {
        const navInners = document.querySelectorAll('.nav__inner'); // Selecciona todos los submenús

        // Resetea la altura de cada submenú
        navInners.forEach(navInner => {
            navInner.style.height = '';
        });
    }
});
