const express = require('express')
const env = process.env.NODE_ENV || 'development'
const config = require('./configs/server')[env]

// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')

// Import API Routes
app.use(users)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}

// ex) usage: config.database.host
