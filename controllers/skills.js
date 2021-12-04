const skill = require('../models/skills')
 
module.exports = {
     index,
}

function index(req, res) {
   res.render('skills/index', {
     skills: skill.getAll(),
     title: 'Skills'
   });
 } 