require('dotenv').config()
const express = require('express')
import db from '../db/models'

// Initializations:
const app = express()

// Settings
const port = process.env.APP_PORT || 3001

// Middlewares

db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log("App is runnig on port: ", port)
    })
})
