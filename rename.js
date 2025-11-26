const fs = require('fs');
const images = fs.readdirSync("./images");
images.forEach(image => {
    fs.rename(`./images/${image}`, `./images/${image.replaceAll(" ", "-")}`, (err => {
        console.error(err);
    }));
})