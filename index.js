const fs = require('fs');

fs.readdirSync("./images").forEach(file => {
    console.log(file);
    const htmlStructure = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>${file}</title>
            <meta name="twitter:card" content="summary_large_image">
            <meta property="og:image" content="https://That-one-axolotl.github.io/share/images/${file}">
        </head>
        <body>
            <img src="../images/${file}">
        </body>
    </html>`
    fs.writeFileSync(`./pages/${file.replaceAll(".png", "").replaceAll(" ", "")}.html`, htmlStructure);
});
