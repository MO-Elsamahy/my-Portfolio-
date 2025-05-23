// Interactive Background
function initInteractiveBackground() {
    const bg = document.getElementById('interactive-bg');
    if (!bg) return; // Skip if no background element found

    const particles = [];
    const gradientCircles = [];
    let mouseX = 0;
    let mouseY = 0;

    // Create particles
    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 3 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = `hsl(${Math.random() * 60 + 200}, 70%, 60%)`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        bg.appendChild(particle);
        particles.push({
            element: particle,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5
        });
    }

    // Create gradient circles
    for (let i = 0; i < 3; i++) {
        const circle = document.createElement('div');
        circle.className = 'gradient-circle';
        const size = Math.random() * 300 + 200;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        circle.style.background = `radial-gradient(circle, hsl(${Math.random() * 60 + 200}, 70%, 60%) 0%, transparent 70%)`;
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.top = `${Math.random() * 100}%`;
        bg.appendChild(circle);
        gradientCircles.push({
            element: circle,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2
        });
    }

    // Mouse movement effect
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Animation loop
    function animate() {
        particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Bounce off walls
            if (particle.x < 0 || particle.x > window.innerWidth) particle.vx *= -1;
            if (particle.y < 0 || particle.y > window.innerHeight) particle.vy *= -1;

            // Mouse interaction
            const dx = mouseX - particle.x;
            const dy = mouseY - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < 100) {
                const angle = Math.atan2(dy, dx);
                const force = (100 - distance) / 100;
                particle.vx -= Math.cos(angle) * force * 0.1;
                particle.vy -= Math.sin(angle) * force * 0.1;
            }

            // Apply position
            particle.element.style.transform = `translate(${particle.x}px, ${particle.y}px)`;
        });

        // Animate gradient circles
        gradientCircles.forEach(circle => {
            circle.x += circle.vx;
            circle.y += circle.vy;

            if (circle.x < -circle.element.offsetWidth || circle.x > window.innerWidth) circle.vx *= -1;
            if (circle.y < -circle.element.offsetHeight || circle.y > window.innerHeight) circle.vy *= -1;

            circle.element.style.transform = `translate(${circle.x}px, ${circle.y}px)`;
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Resize handler
    window.addEventListener('resize', () => {
        particles.forEach(particle => {
            if (particle.x > window.innerWidth) particle.x = window.innerWidth;
            if (particle.y > window.innerHeight) particle.y = window.innerHeight;
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initInteractiveBackground); 