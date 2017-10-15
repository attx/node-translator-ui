'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').Server(app)
const translator = require('node-translator')

const CONFIG = require('./config')

translator.set(CONFIG.API_KEY)

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ extended: true }))

app.get('/translate', (req, res) => {
  translator.translate({
    text: req.query.inputText,
  }).then((translations) => {
    res.json(translations)
  })
})

app.use(express.static('dist', {}))

server.listen(3000)