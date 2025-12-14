const img = document.querySelector('img');

if (img){
	img.remove();
}

const slides = [
	{img: "images/poza1.png"}
	{img: "images/poza2.png"}
	{img: "images/poza3.png"}
	{img: "images/poza4.png"}
];

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

            triggerImage.addEventListener('dblclick', function() {
                console.log("Double-click detected. Starting slideshow...");

                triggerImage.classList.add('hidden');

                slides[currentSlideIndex].classList.add('active');

					if (slideshowInterval) clearInterval(slideshowInterval);
                slideshowInterval = setInterval(showNextSlide, 3000);
            });
        });
this.classList.add('show');