document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("#image-grid img");

    const modal = document.createElement("div");
    modal.id = "lightbox-modal";
    modal.style.display = "none";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.background = "rgba(0,0,0,0.85)";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.zIndex = "9999";
    modal.style.cursor = "zoom-out";

    const modalImg = document.createElement("img");
    modalImg.style.maxWidth = "85%";
    modalImg.style.maxHeight = "85%";
    modalImg.style.borderRadius = "8px";
    modalImg.style.boxShadow = "0 0 20px rgba(255,255,255,0.3)";
    modal.appendChild(modalImg);

    modal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    document.body.appendChild(modal);

    images.forEach((img) => {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", () => {
            modalImg.src = img.src;
            modal.style.display = "flex";
        });
    });
});