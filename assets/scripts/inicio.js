const container = document.querySelector('.contenedor-principal');

function createFloatingDot() {
    const dot = document.createElement('div');
    dot.className = 'floating-dot';

    const size = Math.random() * 6 + 2; // 2px - 8px
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${Math.random() * 100}%`;

    container.appendChild(dot);

    setTimeout(() => dot.remove(), 5000);
}

// Puntos blancos cada 150ms
setInterval(createFloatingDot, 150);
