// Get DOM elements
const galleryContainer = document.querySelector(".gallery-container");
const galleryImages = document.querySelectorAll(".gallery-image");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;

// Event listeners for navigation buttons
prevButton.addEventListener("click", () => {
  showImage(currentIndex - 1);
});

nextButton.addEventListener("click", () => {
  showImage(currentIndex + 1);
});

// Function to display a specific image
function showImage(index) {
  // Hide all images
  galleryImages.forEach((image) => (image.style.display = "none"));

  // Wrap around if the index goes out of bounds
  if (index < 0) {
    currentIndex = galleryImages.length - 1;
  } else if (index >= galleryImages.length) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }

  // Show the current image
  galleryImages[currentIndex].style.display = "block";
}

// Display the first image when the page loads
showImage(currentIndex);
