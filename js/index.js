const question = [
  // Q-1
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hyper Text Markup Language", correct: true },
      { text: "High Text Machine Language", correct: false },
      { text: "Hyper Transfer Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
    ],
  },

  // Q-2
  {
    question: "Which CSS property is used to change the text color?",
    answers: [
      { text: "font-color", correct: false },
      { text: "text-color", correct: false },
      { text: "color", correct: true },
      { text: "background-color", correct: false },
    ],
  },

  // Q-3
  {
    question: "Which HTML tag is used to create a hyperlink?",
    answers: [
      { text: "<link>", correct: false },
      { text: "<a>", correct: true },
      { text: "<href>", correct: false },
      { text: "<url>", correct: false },
    ],
  },

  // Q-4
  {
    question: "Which JavaScript keyword is used to declare a variable?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: false },
      { text: "All of the above", correct: true },
    ],
  },

  // Q-5
  {
    question: "Which method is used to print something in the browser console?",
    answers: [
      { text: "console.log()", correct: true },
      { text: "print()", correct: false },
      { text: "echo()", correct: false },
      { text: "document.write()", correct: false },
    ],
  },

  // Q-6
  {
    question: "Which CSS property is used to make text bold?",
    answers: [
      { text: "font-style", correct: false },
      { text: "font-weight", correct: true },
      { text: "text-weight", correct: false },
      { text: "bold", correct: false },
    ],
  },

  // Q-7
  {
    question: "Which HTML element is used to insert an image?",
    answers: [
      { text: "<picture>", correct: false },
      { text: "<image>", correct: false },
      { text: "<img>", correct: true },
      { text: "<src>", correct: false },
    ],
  },

  // Q-8
  {
    question: "Which JavaScript method converts a JSON string into an object?",
    answers: [
      { text: "JSON.parse()", correct: true },
      { text: "JSON.stringify()", correct: false },
      { text: "JSON.convert()", correct: false },
      { text: "JSON.object()", correct: false },
    ],
  },

  // Q-9
  {
    question: "Which CSS property is used to add space inside an element?",
    answers: [
      { text: "margin", correct: false },
      { text: "padding", correct: true },
      { text: "spacing", correct: false },
      { text: "border", correct: false },
    ],
  },

  // Q-10
  {
    question: "Which JavaScript function is used to select an element by its ID?",
    answers: [
      { text: "document.querySelector()", correct: false },
      { text: "document.getElementById()", correct: true },
      { text: "document.getElementsByClassName()", correct: false },
      { text: "document.getElementsByTagName()", correct: false },
    ],
  },
  // Q-11
  {
    question: "Which JavaScript method is used to add an element at the end of an array?",
    answers: [
      { text: "push()", correct: true },
      { text: "pop()", correct: false },
      { text: "shift()", correct: false },
      { text: "unshift()", correct: false },
    ],
  },

  // Q-12
  {
    question: "Which CSS property is used to create a Flexbox container?",
    answers: [
      { text: "display: flex", correct: true },
      { text: "position: flex", correct: false },
      { text: "flex: 1", correct: false },
      { text: "display: block", correct: false },
    ],
  },

  // Q-13
  {
    question: "What will 'typeof null' return in JavaScript?",
    answers: [
      { text: "'null'", correct: false },
      { text: "'undefined'", correct: false },
      { text: "'object'", correct: true },
      { text: "'boolean'", correct: false },
    ],
  },

  // Q-14
  {
    question: "Which HTML attribute is used to display placeholder text in an input?",
    answers: [
      { text: "value", correct: false },
      { text: "placeholder", correct: true },
      { text: "label", correct: false },
      { text: "title", correct: false },
    ],
  },

  // Q-15
  {
    question: "Which JavaScript method removes the last element from an array?",
    answers: [
      { text: "shift()", correct: false },
      { text: "pop()", correct: true },
      { text: "splice()", correct: false },
      { text: "slice()", correct: false },
    ],
  },

  // Q-16
  {
    question: "Which CSS property changes the order of Flexbox items?",
    answers: [
      { text: "position", correct: false },
      { text: "align-items", correct: false },
      { text: "order", correct: true },
      { text: "justify-content", correct: false },
    ],
  },

  // Q-17
  {
    question: "Which JavaScript method is used to convert an object into a JSON string?",
    answers: [
      { text: "JSON.parse()", correct: false },
      { text: "JSON.stringify()", correct: true },
      { text: "JSON.convert()", correct: false },
      { text: "JSON.object()", correct: false },
    ],
  },

  // Q-18
  {
    question: "Which DOM method selects the first element that matches a CSS selector?",
    answers: [
      { text: "getElementById()", correct: false },
      { text: "querySelector()", correct: true },
      { text: "querySelectorAll()", correct: false },
      { text: "getElementsByClassName()", correct: false },
    ],
  },

  // Q-19
  {
    question: "Which array method creates a new array based on a condition?",
    answers: [
      { text: "map()", correct: false },
      { text: "filter()", correct: true },
      { text: "forEach()", correct: false },
      { text: "findIndex()", correct: false },
    ],
  },

  // Q-20
  {
    question: "Which keyword is used with async functions to wait for a Promise?",
    answers: [
      { text: "wait", correct: false },
      { text: "await", correct: true },
      { text: "then", correct: false },
      { text: "promise", correct: false },
    ],
  },
];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextBtn = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let Score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
   Score = 0;
   nextBtn.innerHTML = 'Next'
   showQuestion();

}

function showQuestion(){
  resetState();
  let currentQuestion = question[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.textContent = questionNo + '.' + currentQuestion.question ;


  currentQuestion.answers.forEach(answers => {
    
     let button = document.createElement("button");
     button.textContent = answers.text;
     button.classList.add('btn');
     answerButtons.appendChild(button);

     if(answers.correct){
      button.dataset.correct = answers.correct;
     }
     button.addEventListener("click" , selectAnswer);




  })
  
}
function resetState(){

  nextBtn.style.display = "none"
  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e){
 
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true" ;

if(isCorrect){
  selectedBtn.classList.add("correct");
  Score++;
}else{
  selectedBtn.classList.add('incorrect')
}

Array.from(answerButtons.children).forEach((button) => {
  button.disabled = true;

  if(button.dataset.correct === 'true'){
    button.classList.add("correct");
  }
});

nextBtn.style.display = "block"

}
function showScore(){
  resetState();
  questionElement.innerHTML = `
    
  You Score ${Score} Out Of ${question.length}!
   
  
  `;
  
   nextBtn.innerHTML = " Play Again ";
   nextBtn.style.display = "block";

}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < question.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextBtn.addEventListener("click" ,()=> {
 if(currentQuestionIndex < question.length){

 handleNextButton();

 }else{
  startQuiz();
 }


})

startQuiz();