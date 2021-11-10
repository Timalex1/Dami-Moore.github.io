const toggler = document.querySelector('#menu');

const dropdown = document.querySelector('.menu');

toggler.addEventListener('click', function () {
    
    if(dropdown.style.getPropertyValue('opacity') === '0') {
        dropdown.style.setProperty('opacity', '0.95');
    } else {
        dropdown.style.setProperty('opacity', '0');
    }
});








