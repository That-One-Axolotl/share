const fs = require('fs');
const imageshmtl = fs.readdirSync("./images").map(image => `
    <a href="./images/${image}"><h3>${image}</h3></a>`).join("");
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
            <script src="./preventCaching.js"></script>
        </body>
    </html>`;
fs.writeFileSync("./index.html", htmlSkeleton);
