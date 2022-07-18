const { Router } = require('express')
const router = Router()
const auth= require('../../controllers/admin/auth/index.js')

// get login
router.get('/', auth.login)
// get register

router.get('/register', auth.register)

module.exports = router