let express = require('express')
let router = express.Router()

let skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index)

router.get('/new', skillsCtrl.new);
router.post('/', skillsCtrl.create);
router.delete('/:id', skillsCtrl.delete);
router.get('/:id', skillsCtrl.show);


module.exports = router;

