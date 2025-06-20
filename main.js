// main.js
console.log('Dog Kennel website loaded!');

// Image switching functionality for multiple sections with smooth fade-to-black transition
document.addEventListener('DOMContentLoaded', function() {
    /**
     * Helper to set up fading images.
     * @param {string} elementId - ID of the <img> element.
     * @param {string[]} images - Array of image paths to cycle through.
     * @param {number} interval - Time between switches in ms.
     * @param {number} initialDelay - Delay before first switch, in ms.
     */
    function setupImageFade(elementId, images, interval = 5000, initialDelay = 0) {
        const imgEl = document.getElementById(elementId);
        if (!imgEl) return;
        let index = 0;

        const fadeDuration = 800;  // matches CSS transition duration

        const performFade = () => {
            // Fade out current image
            imgEl.classList.add('fade-out');
            // Wait for fade-out to complete
            setTimeout(() => {
                // Switch to next image while faded out (transparent)
                index = (index + 1) % images.length;
                imgEl.src = images[index];
                // Fade back in
                imgEl.classList.remove('fade-out');
            }, fadeDuration);
        };

        // Start after the specified initial delay
        setTimeout(() => {
            performFade();
            // Schedule subsequent fades
            setInterval(performFade, interval);
        }, initialDelay);
    }

    // Set up different initial delays so images don't change simultaneously
    setupImageFade('hero-image', ['images/image1.jpg', 'images/image8.jpg', 'images/dog.jpeg'], 5000, 0);
    setupImageFade('boarding-image', ['images/image 2.jpg', 'images/image6.jpg', 'images/image 3.jpg', 'images/image7.jpg'], 5000, 1700);
    // play-image is now static (image9), no fade setup needed
}); 