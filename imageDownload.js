const fs = require('fs');
const https = require('https');
//Node.js Function to save image from External URL.

function saveImageToDisk(url, localPath) {
    var file = fs.createWriteStream(localPath);
    https.get(url, function (response) {
        response.pipe(file)
    })
}
module.exports = saveImageToDisk
