// variable for questions
var questions = [
    /*
      @TODO: write your questions here
    */
  ];
  
  // variables to keep track of quiz state
  var time = questions.length * 15;
  var currentQuestionIndex = 0;
  var timerId;
  
  /**
   * Variables to reference DOM elements
   * 
   * @description
   * You MAY want to consider the following elements:
   *  - [x] A button to start the quiz
   *  - [x] An element that displays the current time
   *  - [x] A questions container that has:
   *    - [ ] An element that displays the current question text
   *    - [x] A container for the choices buttons
   *  - [ ] An element that displays whether the user got a question correct or not
   *  - [ ] An input field to allow the user to put in their initials 
   *  - [x] A button to submit the user's high score
   * 
   * NOTE: Make sure your `index.html` elements correspond to these!
   * 
   * @see https://www.w3schools.com/jsref/met_document_getelementbyid.asp
   */
  var questionsEl = document.getElementById("questions");
  var timerEl = document.getElementById("time");
  var choicesEl = document.getElementById("choices");
  var submitBtn = document.getElementById("submit");
  var startBtn = document.getElementById("start");
  
  /*
    @TODO: write the rest of your variables here
  */
  
  
  /**
   * Function to start the quiz
   * 
   * @description
   * This function does the following:
   *  - [x] Hide/show page elements
   *  - [x] Start the timer
   *  - [x] Get the next question
   */
  function startQuiz() {
  
    // hide start screen
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
  
    // un-hide questions container
    questionsEl.removeAttribute("class");
  
    // start timer
    timerId = setInterval(clockTick, 1000);
  
    // show starting time
    timerEl.textContent = time;
  
    // call the function that gets the next question 
    getQuestion();
  
  }
  
  
  /**
   * Function to display next question
   * 
   * @description
   * This function will:
   *  - [ ] Retrieve next question and answers
   *  - [ ] Update the page accordingly
   * 
   * @see https://www.w3schools.com/jsref/event_onclick.asp
   * @see https://www.w3schools.com/js/js_htmldom_methods.asp
   */
  function getQuestion() {
  
    /*
      @TODO: write your function code here
    */
  
  }
  
  
  /**
   * Function that runs when the user clicks on an answer
   * 
   * @description
   * This function will:
   *  - [ ] Check if the user picked the right answer or not, and behave accordingly
   *  - [x] End quiz if no more questions left, or go onto next question
   *
   * HINT: for hiding/showing elements, take a look at the `.hide` class in
   *  `styles.css`!
   * 
   * @see https://www.w3schools.com/jsref/met_win_settimeout.asp
   * @see https://www.w3schools.com/jsref/met_element_setattribute.asp
   * @see https://www.w3schools.com/jsref/met_element_removeattribute.asp
   */
  function questionClick() {
  
    /*
      @TODO: write the rest of your function code here
    */
  
    // check if we've run out of questions
    if (currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  
  }
  
  
  /**
   * Function to end the quiz
   * 
   * @description
   * This function will:
   *  - [ ] Stop the timer
   *  - [ ] Update the DOM accordingly
   *
   * HINT: for hiding/showing elements, take a look at the `.hide` class in
   *  `styles.css`!
   * 
   * @see https://www.w3schools.com/jsref/met_win_clearinterval.asp
   * @see https://www.w3schools.com/jsref/met_element_setattribute.asp
   * @see https://www.w3schools.com/jsref/met_element_removeattribute.asp
   */
  function quizEnd() {
  
    /*
      @TODO: write your function code here
    */
    
  }
  
  
  /**
   * Function to handle the timer
   * 
   * @description
   * This function will:
   *  - [ ] Update the timer
   *  - [x] End the quiz if the user runs out of time
   */
  function clockTick() {
  
    /*
      @TODO: write the rest of your function code here
    */
    
    // end the quiz if the user runs out of time
    if (time <= 0) {
      quizEnd();
    }
  
  }
  
  
  /**
   * Function to save a new high score
   * 
   * @description
   * This function will:
   *  - [ ] Let user save their initials and high score
   *  - [ ] Redirect to high scores page
   * 
   * @see https://www.w3schools.com/jsref/prop_text_value.asp
   * @see https://www.w3schools.com/jsref/prop_win_localstorage.asp
   * @see https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
   */
  function saveHighscore() {
  
    /*
      @TODO: write your function code here
    */
  
  }
  
  // user clicks button to submit initials
  submitBtn.onclick = saveHighscore;
  
  // user clicks button to start quiz
  startBtn.onclick = startQuiz;