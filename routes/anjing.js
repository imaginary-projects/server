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

router.post('/create', upload.single('file'),anjingController.createAnjing)
router.get('/', anjingController.showAnjing)
router.get('/:id', anjingController.detailAnjing)
router.delete('/:id', anjingController.deleteAnjing)  
router.put('/:id',anjingController.updateAnjing)


module.exports = router