// Accordion
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        accordionItem.classList.toggle('active');
    });
});

// Lazy Load
const lazyImages = document.querySelectorAll('.lazy-load');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const lazyLoad = (image) => {
    const src = image.getAttribute('data-src');
    if (src) {
        image.src = src;
        image.classList.remove('lazy-load');
    }
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            lazyLoad(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, options);

lazyImages.forEach(image => {
    observer.observe(image);
});

// Notificación de éxito
function showNotification() {
    document.getElementById('message').style.display = 'block';
    setTimeout(function() {
        document.getElementById('message').style.display = 'none';
    }, 5000);
}

// Validación del formulario
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    if (nombre && email && mensaje) {
        showNotification();
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});
