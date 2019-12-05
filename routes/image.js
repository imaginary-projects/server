const router = require('express').Router()
const ImageController = require('../controllers/image')
const {authentication} = require('../middlewares/authentication')
const express = require('express')
const gcsUpload = require('gcs-upload')

 
const app = express()
 
 
const upload = gcsUpload({
  limits: {
    fileSize: 1e6 // in bytes
  },
  gcsConfig: {
    keyFilename: './imaginary-project-951d7665040f.json',
    bucketName: 'imaginary-project-media'
  }
})
 
// app.post('/upload-single', upload.single('file'), (req, res) => {
//   console.log(req.body)
//   res.end()
// })

router.use(authentication)
router.post('/uploads', upload.single('file'), ImageController.create)

module.exports = router

