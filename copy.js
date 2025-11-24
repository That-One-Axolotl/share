const images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("click", () => {
        navigator.clipboard.writeText(`${image.src}`);
    })
})