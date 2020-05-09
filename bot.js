const { menu, goBackBtn } = require('./helpers')
const genVideo = require('./genVideo')
const saveImage = require('./ax')

let videoCapture = ''
let photoUrl = ''


const botMechanics = async (bot) => {
    bot.start((ctx) => ctx.reply('Загрузите картинку для видео'))
    bot.on('text', (ctx) => {
        if (ctx.message.text.includes('$')) {
            videoCapture = ctx.message.text
            ctx.reply('Текст к видео добавлен, создаем видео...')
            ctx.telegram.sendChatAction(ctx.message.from.id, 'upload_video')
            genVideo(`./images/${photoUrl.split('photos/')[1]}`, videoCapture, './ONGG.mp4' )
        }

    })

    bot.on('photo', async (ctx) => {
        const photoId = ctx.message.photo[0].file_id
        photoUrl = await ctx.telegram.getFileLink(photoId)
        console.log(photoUrl)
        saveImage(photoUrl)
        ctx.reply('Теперь введите подпись к видео, начните с знака $, например $МОЯ ПОДПИСЬ К ВИДЕО ')
    })
    bot.startPolling()
}

module.exports = botMechanics
