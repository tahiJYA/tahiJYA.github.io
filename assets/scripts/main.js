        const container = document.querySelector('.contenedor-principal');
        const images = [
            'assets/images/amor.png',
            'assets/images/revisar.png',
            'assets/images/satisfecho.png'
        ];

        function createFloatingImage() {
            const img = document.createElement('img');
            img.src = images[Math.floor(Math.random() * images.length)];
            img.className = 'floating-image';

            const size = Math.random() * 40 + 30; // 30px - 70px
            img.style.width = `${size}px`;
            img.style.left = `${Math.random() * 100}%`;

            container.appendChild(img);

            setTimeout(() => img.remove(), 5000);
        }

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

        // Imágenes cada 500ms
        setInterval(createFloatingImage, 500);

        // Puntos blancos cada 150ms
        setInterval(createFloatingDot, 150);