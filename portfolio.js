const toggler = document.querySelector('#menu');

const dropdown = document.querySelector('.menu');

toggler.addEventListener('click', function (e) {

    e.preventDefault();

    
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});








