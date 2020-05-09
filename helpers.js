const menu = (ctx) => {
    ctx.telegram.sendMessage(
        ctx.chat.id,
        'Выбери в чем проблема ',
        {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Муж бьет' , callback_data: 'husbandPunch'}],
                    [{ text: 'Муж изменяет' , callback_data: 'husbandCheating'}]
                ]
            }
        }
    )
}

const goBackBtn = (ctx) => {
    ctx.telegram.sendMessage(
        ctx.chat.id,
        '----',
        {
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Назад' , callback_data: 'home'}]
                ]
            }
        }
    )
}

module.exports = { menu, goBackBtn }
