import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'
import router from './router'

const app = express()
dotenv.config()

import { FRONTURL, PORT } from './config'

app.use(cors({
    origin: ['http://localhost', 'http://127.0.0.1', FRONTURL]
}))
app.use(morgan('dev'))
app.use(fileUpload({
    createParentPath: true
}))
app.use("/public",express.static("public"))
app.use(express.json())
app.use(router.router)

app.listen(PORT, () => console.log('⚡Server on port '+PORT))