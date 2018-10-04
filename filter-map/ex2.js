/* Array.prototype.map ET filter - Exercice 2

Il s'agit d'écrire une fonction getCampusesTeachingReact, qui reçoit en argument un tableau
d'objets décrivant des campus de la Wild Code School. Chaque campus a ces propriétés:
- city: ville où se trouve le campus
- curriculums: les cursus proposés dans ce campus (PHP/Symfony, JS/React, JS/Angular, etc.)

En utilisant filter puis map, la fonction doit renvoyer les villes des campus qui proposent
un cursus JS/React.

Tableau en entrée:
[
  { city: 'Bordeaux', curriculums: ['PHP/Symfony', 'JS/React'] },
  { city: 'La Loupe', curriculums: ['JS/Angular'] },
  { city: 'Lille', curriculums: ['PHP/Symfony', 'JS/React'] },
  { city: 'Marseille', curriculums: ['JS/React'] },
  { city: 'Orléans', curriculums: ['PHP/Symfony'] },
  { city: 'Reims', curriculums: ['JS/React'] },
  { city: 'Toulouse', curriculums: ['JEE/Android', 'JS/React'] }
]

Sortie attendue:
['Bordeaux', 'Lille', 'Marseille', 'Reims', 'Toulouse']

*/

// function getCampusesTeachingReact(campuses){
//   let campCir = campuses.map((cur) =>{
//     return cur.curriculums;
//   })
//   let filtreCamp = campCir.filter((jsCamp) =>{
//   let total = jsCamp.indexOf('JS/React')
//     if(total >= 0)
//     return jsCamp;
//   })
//   let res = jsCamp.map(())
//   console.log(filtreCamp);
//   return 0;
// }
function getCampusesTeachingReact(campuses){
  return campuses.filter((cu) => {
    return cu.curriculums.includes('JS/React')
  }).map((lol) =>{
    return lol.city;
  })
}
//console.log(getCampusesTeachingReact(test))

// const test = [
//   { city: 'Bordeaux', curriculums: ['PHP/Symfony', 'JS/React'] },
//   { city: 'La Loupe', curriculums: ['JS/Angular'] },
//   { city: 'Lille', curriculums: ['PHP/Symfony', 'JS/React'] },
//   { city: 'Marseille', curriculums: ['JS/React'] },
//   { city: 'Orléans', curriculums: ['PHP/Symfony'] },
//   { city: 'Reims', curriculums: ['JS/React'] },
//   { city: 'Toulouse', curriculums: ['JEE/Android', 'JS/React'] }
// ]
// console.log(getCampusesTeachingReact(test));
module.exports = getCampusesTeachingReact;
