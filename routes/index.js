const router = require('express').Router()
const userRoutes = require('./user')
const anjingRoutes = require('./anjing')


router.use('/users',userRoutes)
router.use('/anjing',anjingRoutes)

module.exports = router