const { Router } = require('express')
const router = Router()

// * Controllers
const submissionController = require('../controllers/submission/submission.controller')

// * /order
router.post('/order', submissionController.submitForm)

module.exports = router
