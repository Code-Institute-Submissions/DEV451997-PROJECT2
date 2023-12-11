// Get references to HTML elements using their IDs and classes
const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");
const timerElement = document.getElementById("timer");

// Initialize variables to keep track of quiz state and score
let currentQuiz = 0;
let score = 0;
let timeLeft = 0;

// Function to shuffle the order of elements in the array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
    

 // Function to clear the selection of answer choices
 let deselectAnswers = () => {
    answerElements.forEach((answer) => (answer.checked = false));
  };
  
  // Function to get the ID of the selected answer choice
  let getSelected = () => {
    let answer;
    answerElements.forEach((answerElement) => {
      if (answerElement.checked) answer = answerElement.id;
    });
    return answer;
  };

  // Function to load and display the current quiz question and answer choices
  let loadQuiz = () => {
    deselectAnswers();
    let currentQuizData = quizData[currentQuiz];
    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
  
    // Counts what questions the user is on and increments by one
    let questionCounterElement = document.getElementById("question-counter");
    questionCounterElement.innerText = `${currentQuiz + 1} of ${quizData.length}`;
  
    // If it's the first question, set the initial time and start the timer
    if (currentQuiz === 0) {
      timeLeft = 90; // Time left for quiz (in seconds).
      updateTimerDisplay();
      startTimer();
    }
  };

  // Function to update the timer display with the remaining time
  let updateTimerDisplay = () => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
   
    // Check if time is 10 seconds or less, and apply red color if true
    if (timeLeft <= 30) {
      timerElement.classList.add("timer-red");
      timerElement.classList.remove("timer-black");
    } else {
      timerElement.classList.add("timer-black");
      timerElement.classList.remove("timer-red");
    }
    timerElement.innerText = `Time Left: ${minutes}:${seconds.toString().padStart(2, "0")}`;    
  };