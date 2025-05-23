// Project filtering functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Filter projects
    function filterProjects(category) {
        projectCards.forEach(card => {
            const cardCategory = card.dataset.category;
            if (category === 'all' || cardCategory === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    }

    // Add click event to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Filter projects
            filterProjects(button.dataset.filter);
        });
    });

    // Initialize Masonry layout
    const projectsGrid = document.querySelector('.projects-grid');
    let masonry = null;

    // Function to initialize Masonry
    function initMasonry() {
        if (masonry) {
            masonry.destroy();
        }

        masonry = new Masonry(projectsGrid, {
            itemSelector: '.project-card',
            columnWidth: '.project-card',
            gutter: 20,
            percentPosition: true
        });
    }

    // Initialize layout after images are loaded
    window.addEventListener('load', () => {
        initMasonry();
    });

    // Update layout on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            initMasonry();
        }, 250);
    });

    // Project hover effects
    projectCards.forEach(card => {
        const overlay = card.querySelector('.project-overlay');
        
        card.addEventListener('mouseenter', () => {
            overlay.style.opacity = '1';
        });
        
        card.addEventListener('mouseleave', () => {
            overlay.style.opacity = '0';
        });
    });
}); 