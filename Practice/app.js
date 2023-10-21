 console.log("workshop")

 const root = document.getElementById("root")
 
 const div = document.createElement("div")

 const title = document.createElement("h1")
//  root.innerHTML = "<h1>Probolinggofrontend</h1>"
 title.textContent = "Probolinggofrontend"

root.append(div)
div.appendChild(title)

// Start 

const galleryImages = document.querySelectorAll(".gallery-image")
const prevButton = document.getElementById("prevButton")
const nextButton = document.getElementById("nextButton")

prevButton.addEventListener("click", () => {
    showImage(currentIndex - 1)
})

nextButton.addEventListener("click", () => {
    showImage(currentIndex + 1)
})

let currentIndex = 0

function showImage(index){
    galleryImages.forEach((image) => (image.style.display = "none"))

    if (index < 0) {
        currentIndex = galleryImages.length - 1;
    } else if (index >= galleryImages.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }

      galleryImages[currentIndex].style.display = "block";
}

showImage(currentIndex)