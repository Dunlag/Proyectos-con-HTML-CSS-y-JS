(function() {
    // Selecciona todos los elementos con la clase 'slider__body' y los convierte en un array
    const sliders = [...document.querySelectorAll('.slider__body')];
    console.log(sliders);  // Imprime el array de sliders en la consola

    // Selecciona los elementos de las flechas de navegación
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');

    // Variable para almacenar la posición actual del slider
    let value;

    // Agrega un evento de clic a la flecha de siguiente
    arrowNext.addEventListener('click', () => changePosition(1));
    // Agrega un evento de clic a la flecha de anterior
    arrowBefore.addEventListener('click', () => changePosition(-1));

    // Función para cambiar la posición del slider
    function changePosition(change) {
        // Obtiene el ID del elemento actualmente visible
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);
        
        value = currentElement;
        // Cambia la posición según el valor recibido (1 o -1)
        value += change;
        console.log(sliders.length);  // Imprime el número de sliders en la consola

        // Si la nueva posición es 0 o mayor que la cantidad de sliders, ajusta el valor
        if (value === 0 || value == sliders.length + 1) {
            value = value === 0 ? sliders.length : 1;
        }

        // Alterna la clase 'slider__body--show' para ocultar el slider actual
        sliders[currentElement - 1].classList.toggle('slider__body--show');
        // Alterna la clase 'slider__body--show' para mostrar el nuevo slider
        sliders[value - 1].classList.toggle('slider__body--show');
    }
})();
