 const skills = [
   {id: 125223, skill: 'JavaScript', level: 'low'},
   {id: 127904, skill: 'HTML', level: 'low'},
   {id: 139608, skill: 'CSS', level: 'very low'}
 ];
 
 module.exports = {
   getAll,
   getOne,
   create,
   deleteOne,
 };
 
 function getAll() {
   return skills;
 }

 function getOne(id) {
  // URL params are always strings, need to turn it into a number
  id = parseInt(id);
  return skills.find(skill => skill.id === id);
 }

 function create(skill) {
   skill.id = Date.now() % 1000000;
   skill.done = false;
   skills.push(skill);
 }

 function deleteOne(id) {
   //Find the index based on the id of the todo object
   const idx = skills.findIndex(skill => skill.id === parseInt(id));
   skills.splice(idx, 1);
 }