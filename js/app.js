const images = [
  { src: 'photo-1.jpg', description: 'Ты самая милая на свете.' },
  { src: 'photo-2.jpg', description: 'Ты прекрасная' },
  { src: 'photo-3.jpg', description: 'Ты самая любимая и неповторимая.' },
  { src: 'photo-4.jpg', description: 'С тобой всегда можно прекрасно провести время.' },
  { src: 'photo-5.jpg', description: 'Ты вдохновляешь меня становиться лучше.' }
];

let currentIndex = 0;

function updateSlider() {
  const sliderImage = document.getElementById('slider-image');
  const descriptionText = document.getElementById('description-text');
  const descriptionDiv = document.getElementById('image-description');

  sliderImage.src = images[currentIndex].src;
  descriptionText.textContent = images[currentIndex].description;
  descriptionDiv.style.display = 'block'; // Показываем описание
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
}

// Initialize slider
updateSlider();
