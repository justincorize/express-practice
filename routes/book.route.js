const router = require('express').Router()

const controller = require('../controllers/book.controller')

router.get('/', controller.index)
router.get('/search', controller.search)
router.get('/create', controller.create)
router.get('/:id', controller.get)
router.post('/create', controller.postCreate)

module.exports = router
