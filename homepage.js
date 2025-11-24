const fs = require('fs');
const imageshmtl = fs.readdirSync("./images").map(image => `<div class="image-container">
    <h3>${image}</h3>
    <img src="./images/${image}" class="copyableImage">
    </div> `).join("");
const htmlSkeleton = `<!DOCTYPE html>
    <html>
        <head>
            <title>HFDUSIFHBSIRFEG YSUI BEYHU IF</title>
            <link rel="stylesheet" href="styles.css">
        </head>
        <body>
            <div id="images">
                ${imageshmtl}
            </div>
            <script src="./copy.js"></script>
        </body>
    </html>`;
fs.writeFileSync("./index.html", htmlSkeleton);