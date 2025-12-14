document.addEventListener('DOMContentLoaded', function() {
    const triggerImage = document.getElementById('trigger-image');
    const slides = document.querySelectorAll('.slide');
    let currentSlideIndex = 0;
    let slideshowInterval;

    function showNextSlide() {
		
        slides[currentSlideIndex].classList.remove('active');
        
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        
        slides[currentSlideIndex].classList.add('active');
    }

    if (triggerImage) {
        triggerImage.addEventListener('dblclick', function() {
			
            triggerImage.style.display = 'none';

            slides[currentSlideIndex].classList.add('active');

            if (slideshowInterval) clearInterval(slideshowInterval);
            slideshowInterval = setInterval(showNextSlide, 3000);
        });
    }
});