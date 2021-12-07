 const skills = [
   {id: 125223, skill: 'JavaScript', level: 'low'},
   {id: 127904, skill: 'HTML', level: 'low'},
   {id: 139608, skill: 'CSS', level: 'very low'}
 ];
 
 module.exports = {
   getAll,
   getOne
 };
 
 function getAll() {
   return skills;
 }

 function getOne(id) {
  // URL params are always strings, need to turn it into a number
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
 }