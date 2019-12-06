const router = require('express').Router()
const gcsUpload = require('gcs-upload')
const AnjingController = require('../controllers/anjing')

const upload = gcsUpload({  
    limits: {
      fileSize: 1e6 // in bytes
    },
    gcsConfig: {
      keyFilename: './credentials-gcs.json',
      bucketName: 'bucket-alfred'
    }
  })

  
router.post('/create', upload.single('file'),AnjingController.createAnjing)
router.get('/filter', AnjingController.filterAnjing)
router.get('/', AnjingController.showAnjing)
router.get('/:id', AnjingController.detailAnjing)
router.delete('/:id', AnjingController.deleteAnjing)  
router.put('/:id', upload.single('file'),AnjingController.updateAnjing)


module.exports = router