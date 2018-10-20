#!/usr/bin/env node

const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')

const port = 8888
console.log('Hello World!')

var app = express()

app.use(express.static('public'))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.listen(port)
console.log(`App listening on port ${port}`)
