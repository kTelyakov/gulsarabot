require('dotenv').config()
const ProxyAgent = require('https-proxy-agent')
const Telegraf = require('telegraf')
const botMechanics = require('./bot')
const axios = require('axios')

const bot = new Telegraf(process.env.BOT_TOKEN, {
    telegram: {
        agent: new ProxyAgent(process.env.PROXY)
    }
})

botMechanics(bot)

