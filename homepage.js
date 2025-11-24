const fs = require('fs');
const imageshmtl = fs.readdirSync("./images").map(image => `
    <img src="./images/${image}"style="border: 5px solid black; width: 500px;"class="copyableImage"> `).join("");
const htmlSkeleton = `<!DOCTYPE html>
    <html>
        <head>
            <title>HFDUSIFHBSIRFEG YSUI BEYHU IF</title>
        </head>
        <body>
            <div id="images">
                ${imageshmtl}
            </div>
        </body>
    </html>`;
fs.writeFileSync("./index.html", htmlSkeleton);