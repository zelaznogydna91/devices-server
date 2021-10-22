const express = require('express')
const consign = require('consign')

const app = express()

consign()
  .include('libs/middlewares.js')
  .then('routes')
  .include('libs/boots.js')
  .into(app)
