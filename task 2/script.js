document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burger-icon');
    const menu = document.querySelector('.menu');
    
    burgerIcon.addEventListener('click', function(event) {
        menu.classList.toggle('active');
        event.stopPropagation();
    });

    document.addEventListener('click', function(event) {
        if (!menu.contains(event.target) && !burgerIcon.contains(event.target)) {
            menu.classList.remove('active');
        }
    });
});
