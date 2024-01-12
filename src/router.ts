import { Router } from "express";
import { UploadedFile } from "express-fileupload";
import fs from 'fs'
const router = Router()

router.post('/upload', (req, res) => {
    if (!req.files ) return res.status(400).json({ success:false, message: "No files has been received" })
    const file = req.files.file as UploadedFile
    file.mv('./public/uploads/'+file.name)
    res.json({
        success: true,
        message: "Upload success"
    })
})

router.get('/files', (req, res) => {
    const fileList = fs.readdirSync('./public/uploads')
    res.json({
        success: true,
        data: fileList
    })
})

export default { router }