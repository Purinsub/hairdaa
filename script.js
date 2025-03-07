document.addEventListener('DOMContentLoaded', () => {
    // Create floating hearts background
    createFloatingHearts();

    // Add your photos here - just place your photos in the images folder
    // and update these paths with your image filenames
    const photos = [
        'images/photo1.jpg',  // Replace photo1.jpg with your actual image filename
        'images/photo2.jpg',  // Replace photo2.jpg with your actual image filename
        'images/photo3.jpg',  // Replace photo3.jpg with your actual image filename
        'images/photo4.jpg'   // Replace photo4.jpg with your actual image filename
    ];

    const gallery = document.querySelector('.photo-gallery');
    photos.forEach(photoUrl => {
        const img = document.createElement('img');
        img.src = photoUrl;
        img.alt = 'Special moments together';
        gallery.appendChild(img);
    });
});

function createFloatingHearts() {
    const heart = document.querySelector('.heart');

    setInterval(() => {
        const heartEl = document.createElement('div');
        heartEl.innerHTML = '❤️';
        heartEl.style.position = 'absolute';
        heartEl.style.fontSize = Math.random() * 20 + 10 + 'px';
        heartEl.style.left = Math.random() * 100 + '%';
        heartEl.style.opacity = '0';
        heartEl.style.animation = 'float 4s ease-in forwards';
        heart.appendChild(heartEl);

        setTimeout(() => heartEl.remove(), 4000);
    }, 300);
}

// Add floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(100vh);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-20vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
