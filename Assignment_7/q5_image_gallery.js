// Q5 - Image Gallery with Modal Preview

const galleryImages = document.querySelectorAll(".gallery-image");
const modalOverlay = document.getElementById("modalOverlay");
const modalContent = document.getElementById("modalContent");
const modalImage = document.getElementById("modalImage");

// When user clicks any image → show modal with bigger version
galleryImages.forEach((imageElement) => {
  imageElement.addEventListener("click", () => {
    const srcValue = imageElement.getAttribute("src");
    const altValue = imageElement.getAttribute("alt");

    modalImage.setAttribute("src", srcValue);
    modalImage.setAttribute("alt", altValue);

    modalOverlay.classList.add("active");
  });
});

// Clicking outside modal (overlay) → close modal
modalOverlay.addEventListener("click", () => {
  modalOverlay.classList.remove("active");
});

// Clicking inside modalContent should NOT close modal
modalContent.addEventListener("click", (event) => {
  // Stop the event from bubbling up to modalOverlay
  event.stopPropagation();
});
