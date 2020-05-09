const request = require('request');
const fs = require('fs')

function saveImage (url) {
    const imageName = url.split('photos/')[1]
    request.get({
        'url': url,
        'method': "GET",
        'proxy': process.env.PROXY
    }).pipe(
        fs.createWriteStream(`./images/${imageName}`)
    )
}

module.exports = saveImage
