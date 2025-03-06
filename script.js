const precioPorDia = 5;

document.getElementById("dias").addEventListener("input", function() {
    let dias = parseInt(this.value);
    let precioTotal = dias * precioPorDia;
    document.getElementById("precio-total").textContent = `$${precioTotal}`;
});

function reservar() {
    let fecha = document.getElementById("fecha").value;
    if (fecha) {
        document.getElementById("mensaje-reserva").textContent = `Reservado para el ${fecha}`;
    } else {
        alert("Selecciona una fecha antes de reservar.");
    }
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.init("TU_PUBLIC_KEY");

    let params = {
        nombre: document.getElementById("nombre").value,
        telefono: document.getElementById("telefono").value,
        mensaje: document.getElementById("mensaje").value
    };

    emailjs.send("TU_SERVICE_ID", "TU_TEMPLATE_ID", params)
        .then(function(response) {
            document.getElementById("resultado").textContent = "Mensaje enviado con éxito.";
        }, function(error) {
            document.getElementById("resultado").textContent = "Error al enviar el mensaje.";
        });
});
