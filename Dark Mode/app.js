// Espera a que el contenido del documento HTML esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', () => {

    // Selecciona el elemento del interruptor de tema (checkbox) en el DOM
    const switcherTheme = document.querySelector('.main__check');

    // Obtiene el elemento raíz del documento (es decir, el <html>) para modificar sus atributos
    const root = document.documentElement;

    // Agrega un evento que se activará al hacer clic en el interruptor de tema
    switcherTheme.addEventListener('click', toggleTheme);

    // Función que cambia el tema entre claro y oscuro
    function toggleTheme() {
        // Determina el tema a aplicar basado en si el checkbox está marcado o no
        const setTheme = switcherTheme.checked ? 'dark' : 'light';

        // Establece un atributo 'data-theme' en el elemento raíz <html> con el valor del tema elegido
        root.setAttribute('data-theme', setTheme);
    }
});
