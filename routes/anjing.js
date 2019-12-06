const router = require('express').Router()
const gcsUpload = require('gcs-upload')
const AnjingController = require('../controllers/anjing')
const {authentication} = require('../middlewares/authentication')
const authorization = require('../middlewares/authorization')

const upload = gcsUpload({  
    limits: {
      fileSize: 1e6 // in bytes
    },
    gcsConfig: {
      keyFilename: './imaginary-project-951d7665040f.json',
      bucketName: 'bucket-alfred'
    }
  })



router.post('/filter', AnjingController.filterAnjing)
router.get('/', AnjingController.showAnjing)
router.get('/:id', AnjingController.detailAnjing)
router.use(authentication)
router.delete('/:id',authorization, AnjingController.deleteAnjing)  
router.post('/create', upload.single('file'),AnjingController.createAnjing)
router.put('/:id', upload.single('file'),AnjingController.updateAnjing)

module.exports = router