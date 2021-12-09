const Skill = require('../models/skills')
 
module.exports = {
     index, 
     show,
     new: newSkill,
     create,
}

function create(req, res) {
  console.log(req.body);
  //The model is responsible for creating the data
  Skill.create(req.body);
  //Do a redirect anytime data is changed
  res.redirect('/skills')
  };

function newSkill(req, res) {
  res.render('skills/new')
}

function index(req, res) {
   res.render('skills/index', {
     skills: Skill.getAll(),
     title: 'Skills',
     time: req.time
   });
 } 

function show(req, res) {
  res.render('skills/show', {
    skill: Skill.getOne(req.params.id),
    time: req.time
  });
}


