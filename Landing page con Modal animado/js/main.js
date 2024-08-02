// Selecciona el elemento que abre el modal (botón de llamada a la acción en el héroe)
const openModal = document.querySelector('.hero__cta');

// Selecciona el modal
const modal = document.querySelector('.modal');

// Selecciona el botón de cierre del modal
const closeModal = document.querySelector('.modal__close');

// Añade un evento de clic al botón de llamada a la acción para abrir el modal
openModal.addEventListener('click', (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del enlace
    modal.classList.add('modal--show'); // Añade la clase para mostrar el modal
});

// Añade un evento de clic al botón de cierre del modal
closeModal.addEventListener('click', (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del enlace
    modal.classList.remove('modal--show'); // Elimina la clase para ocultar el modal
});
