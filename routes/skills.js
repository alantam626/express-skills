let express = require('express')
let router = express.Router()

let skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index)

module.exports = router;