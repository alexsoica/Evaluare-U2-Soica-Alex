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

let current = 0;
const delay = 3000;

const container = document.createElement('div');
document.body.appendChild(container);

img.width = 300;
img.height = 300;
img.style.borderRadius = "8px";
img.style.cursor = "pointer";
img.style.transition = "opacity 0.5s";

function showSlide(index) {
  img.style.opacity = 0;
  setTimeout(() => {
    link.href = slides[index].link;
    img.src = slides[index].img;
    img.style.opacity = 1;
  }, 250);
}

showSlide(current);

setInterval(() => {
  current = (current + 1) % slides.length;
  showSlide(current);
}, delay);