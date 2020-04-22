const router = require('express').Router()

const controller = require('../controllers/user.controller')

router.get('/', controller.index)
router.get('/search', controller.search)
router.get('/create', controller.create)
router.get('/:id', controller.get)
router.post('/create', controller.postCreate)
router.get('/:id/edit', controller.edit)
router.post('/:id/edit', controller.postEdit)
router.get('/:id/delete', controller.delete)

module.exports = router
