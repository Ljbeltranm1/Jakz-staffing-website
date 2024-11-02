// Mostrar mensaje de bienvenida con un pequeño retraso
window.onload = function() {
    setTimeout(() => {
        alert("¡Bienvenido a JAKZ Staffing Company! Estamos listos para hacer de tu evento algo inolvidable.");
    }, 500);
};

// Efecto de desplazamiento suave en la navegación
document.querySelectorAll('nav ul.nav-links li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Función para mostrar/ocultar el menú hamburguesa en dispositivos móviles
function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('show');
}

// Cerrar el menú automáticamente al hacer clic en un enlace (en móvil)
document.querySelectorAll('nav ul.nav-links li a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.nav-links');
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    });
});