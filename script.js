/*************************/
/*       Questions       */
/*************************/

const questions = [
  {
    // Texte de la question
    question:
      "Dans la saga culte Star Wars, comment s'appelle le père de Luke Skywalker ?",
    // Réponses possibles
    answers: [
      "Darth Vader",
      "Anakin Skywalker",
      "Les deux réponse",
      "Aucune réponse",
    ],
    // Index de la réponse correcte
    correctAnswerIndex: 2,
  },
  {
    question:
      'En quelle année le groupe "The Beatles" a t\'il sorti le célèbre album "Sgt. Pepper\'s Lonely Hearts Club Band" ?',
    answers: [
      "1967",
      "1974", 
      "1962", 
      "1980"],
    correctAnswerIndex: 0,
  },
  {
    question:
      'Dans la série de jeux video "Zelda", quel est le nom du personnage principal qu\'incarne le joueur ?',
    answers: [
      "Zelda", 
      "Ganon", 
      "Tom", 
      "Link"],
    correctAnswerIndex: 3,
  },
  {
    question:
      "Quel est le nom de la mission spatiale lunaire, menée par la NASA, dont l'équipage a du annuler son allunissage suite à une explosion pendant le voyage ?",
    answers: [
      "Apollo 9", 
      "Mercury 1", 
      "Apollo 13", 
      "Gemini 2"],
    correctAnswerIndex: 2,
  },
];

/********* NE PAS MODIFIER AU DESSUS DE CETTE LIGNE *********/

/*************************/
/* Contenu du DOM chargé */
/*************************/

document.addEventListener("DOMContentLoaded", () => {
let questionIndex = 0;
let score;
let affichAnswers = document.getElementById("answers");
let affichScore = document.getElementById("score");
   
let affichQuestion= document.getElementById("question");
  affichQuestion.textContent = questions[questionIndex].question;
  console.log(questions[questionIndex]);
genereQuestion();
function genereQuestion() {
  questions[questionIndex].answers.forEach(answer => {
    console.log(answer)
    affichQuestion.textContent = questions[questionIndex].question;
      let li = document.createElement("li");
      li.classList.add("answer");
       li.textContent = answer;
  
       affichAnswers.appendChild(li);
      
      
   });
}

affichAnswers.addEventListener("click",(event)=>{
 console.log(event.target.innerText);
 
 affichAnswers.innerHTML = "";
  if(event.target.innerText === questions[questionIndex].correctAnswerIndex){

   score ++;
   affichScore.textContent = score;

 }
 questionIndex ++;
   if(questionIndex < questions.length ){ 
     genereQuestion();

   
   } else{
    affichQuestion.textContent = "Merci d'avoir repondu";
    affichAnswers.innerHTML = "";

   }
  
 });


 });