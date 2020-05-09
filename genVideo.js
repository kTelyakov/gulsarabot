var videoshow = require('videoshow')

function genVideo (imgUrl, caption, outputVideo) {
    videoshow([{
        path: imgUrl,
        caption: caption
    }, ])
        .save(outputVideo)
        .on('error', function (e) {
            console.error(e)
        })
        .on('end', function () {
            console.log('ready')
        })

}

module.exports = genVideo
