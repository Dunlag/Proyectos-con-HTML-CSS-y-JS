(function(){
    // Selecciona todos los elementos del menú con la clase 'menu__item--show'
    const listElements = document.querySelectorAll('.menu__item--show');
    
    // Selecciona el contenedor de los enlaces del menú
    const list = document.querySelector('.menu__links');
    
    // Selecciona el ícono del menú hamburguesa
    const menu = document.querySelector('.menu__hamburguer');

    // Función para añadir el evento de clic a los elementos del menú
    const addClick = ()=>{
        listElements.forEach(element =>{
            element.addEventListener('click', ()=>{
                
                // Selecciona el submenú del elemento clicado
                let subMenu = element.children[1];
                let height = 0;
                
                // Alterna la clase 'menu__item--active' en el elemento clicado
                element.classList.toggle('menu__item--active');

                // Si el submenú está cerrado, calcula su altura para abrirlo
                if(subMenu.clientHeight === 0){
                    height = subMenu.scrollHeight;
                }

                // Ajusta la altura del submenú para abrirlo o cerrarlo
                subMenu.style.height = `${height}px`;
            });
        });
    }

    // Función para eliminar el estilo de altura de los submenús y la clase 'menu__item--active'
    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{
            if(element.children[1].getAttribute('style')){
                // Elimina el atributo 'style' del submenú
                element.children[1].removeAttribute('style');
                // Remueve la clase 'menu__item--active'
                element.classList.remove('menu__item--active');
            }
        });
    }

    // Evento que se ejecuta al redimensionar la ventana
    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            // Si el ancho de la ventana es mayor a 800px, elimina el estilo de altura
            deleteStyleHeight();
            if(list.classList.contains('menu__links--show'))
                // Remueve la clase 'menu__links--show' si está presente
                list.classList.remove('menu__links--show');
        }else{
            // Si el ancho de la ventana es menor o igual a 800px, añade los eventos de clic
            addClick();
        }
    });

    // Añade los eventos de clic si el ancho de la ventana es menor o igual a 800px al cargar la página
    if(window.innerWidth <= 800){
        addClick();
    }

    // Evento que se ejecuta al clicar en el ícono del menú hamburguesa
    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));

})();
