#!/usr/bin/env node

const http = require('http')
const fs = require('fs')

const port = 8888

console.log('Hello World!')

http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('./index.html', 'UTF8', (err, data) => {
      if (err) throw err
      res.end(data)
    })
  } else if (req.url === '/index.css') {
    res.writeHead(200, { 'Content-Type': 'text/css' })
    fs.readFile('./index.css', 'UTF8', (err, data) => {
      if (err) throw err
      res.end(data)
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Page Not Found')
  }
}).listen(port)

console.log(`Server listening on port ${port}`)
