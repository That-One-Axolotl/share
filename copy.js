const images = document.querySelectorAll("img");
images.forEach(image => {
    image.addEventListener("click", () => {
        navigator.clipboard.writeText(`https://that-one-axolotl.github.io/share/pages/${image.src.replaceAll(".png", "").replaceAll(" ", "")}.html`);
    })
})