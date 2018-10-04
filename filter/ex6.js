/* Array.prototype.filter - Exercice 6

Ecrire une fonction filterOffensiveComments, qui attend deux paramètres, tous deux
des tableaux de chaînes de caractères :
1. des commentaires sur un fil d'actualité ou une vidéo.
2. une liste de mots "grossiers" ou "offensifs" à bannir

La fonction doit éliminer les commentaires contenant au moins un des mots "bannis".

Exemple d'entrée:
1. des commentaires (on est resté soft pour ne pas heurter les oreilles chastes)
[
  "Very useful tutorial, thank you so much!",
  "React is not a damn framework, it's a LIBRARY"
  "Why you put bloody kitten pictures in a tech tutorial is beyond me!",
  "Which one is better, React or Angular?",
  'There is no "better", it depends on your use case, DAMN YOU'
]
2. mots à bannir: ['bloody', 'damn']

Sortie attendue:
[
  "Very useful tutorial, thank you so much!",
  "Which one is better, React or Angular?",
]

*/

// function filterOffensiveComments(comments, bannedWords) {
// let res = comments.filter((comment) => {
//   let bla = new Array;
//   comment = comment.toLowerCase();
//   let banLo = bannedWords.map((ban) => {
//     return (ban = ban.toLowerCase());
//   })
//   //bannedWords = bannedWords.toLowerCase();
//   for(let i = 0; i < comments.length; i++){
//     let t = comment.indexOf(banLo[i])
//     if(t < 0)
//       bla[i] = comment;
//   }
//   return bla;
// })
// return res;
// }

function filterOffensiveComments(comments, bannedWords) {
  let res = comments.filter(com => {
    for(let ban of bannedWords) {
      if (com.toLowerCase().includes(ban.toLowerCase())) {
        return false;
      }
    }
    return true;
  });
  return res;
}


// let test = [
//   "Very useful tutorial, thank you so much!",
//   "React is not a damn framework, it's a LIBRARY",
//   "Why you put bloody kitten pictures in a tech tutorial is beyond me!",
//   "Which one is better, React or Angular?",
//   'There is no "better", it depends on your use case, DAMN YOU'
// ]
// let ban = ['bloody', 'damn']
// console.log(filterOffensiveComments(test, ban));
// Ne pas modifier l'export
module.exports = filterOffensiveComments;
