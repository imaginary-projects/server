const router = require('express').Router()
const gcsUpload = require('gcs-upload')
const anjingController = require('../controllers/anjing')

const upload = gcsUpload({  
    limits: {
      fileSize: 1e6 // in bytes
    },
    gcsConfig: {
      keyFilename: './credentials-gcs.json',
      bucketName: 'bucket-alfred'
    }
  })

router.post('/create', upload.array('file'),anjingController.createAnjing)
  

module.exports = router