document.getElementById('toggle-button').addEventListener('click', function() {
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});
