// variable for questions
var questions = [
  "1.Asdfjsldkjfvs;djf",
  "2.Bdfasdfasdfsdafas",
  "3.Cfasdfsadfasdfasd",
  "4.Ddafasdgfgasdgasd",
  "5.Esdfasdfasdfasdfd",
  "6.Fasfasdfasdfasdfa"
  /*
    @TODO: write your questions here
  */
];
var ans1 = ["A.123","B.234","C.345","D.456"];
var ans2 = ["A.abc","B.bcd","C.cde","D.def"];
var ans3 = ["A.123","B.234","C.345","D.456"];
var ans4 = ["A.abc","B.bcd","C.cde","D.def"];
var ans5 = ["A.123","B.234","C.345","D.456"];
var ans6 = ["A.abc","B.bcd","C.cde","D.def"];
var ansTrue = [0,1,2,3,0,1];
var ansarray = [ans1,ans2,ans3,ans4,ans5,ans6];
// variables to keep track of quiz state
var time = questions.length * 15;
var currentQuestionIndex = 0;
var score = 0;
var timerId;
var question_w;
var button1;
var button2;
var button3;
var button4;
var button5;
var button6;
var popup_h;
var popup_w;
var playerScore = [];
var playerName = [];
var i = 0;
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
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var popup = document.getElementById("popup-Message");

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
// console.log("quiz start!!")
// console.log("currentQuestionIndex: "+currentQuestionIndex)
  // hide start screen
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");

  // un-hide questions container
  questionsEl.removeAttribute("class");

  // start timer
  timerId = setInterval(clockTick, 1000);

  // show starting time
  // timerEl.textContent = time;

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
  // create question and buttons
  question_w = document.createElement("h2");
  button1 = document.createElement("button");
  button2 = document.createElement("button");
  button3 = document.createElement("button");
  button4 = document.createElement("button");
  question_w.textContent = questions[currentQuestionIndex];
  // set namme of choices to each button
  button1.textContent = ansarray[currentQuestionIndex][0];
  button2.textContent = ansarray[currentQuestionIndex][1];
  button3.textContent = ansarray[currentQuestionIndex][2];
  button4.textContent = ansarray[currentQuestionIndex][3];
  // set data-index to each button
  question_w.setAttribute("style","text-align:center")
  button1.setAttribute("data-index", 0 );
  button2.setAttribute("data-index", 1 );
  button3.setAttribute("data-index", 2 );
  button4.setAttribute("data-index", 3 );
  // append question and button to html
  questionsEl.prepend(question_w);
  choicesEl.appendChild(button1);
  choicesEl.appendChild(button2);
  choicesEl.appendChild(button3);
  choicesEl.appendChild(button4);
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
function checkAns() {
  /*
    @TODO: write the rest of your function code here
  */
  // choicesEl.addEventListener("click",function(event){
    event.preventDefault();
    var selected = event.target;
    var index = selected.getAttribute("data-index");
    if (index == ansTrue[currentQuestionIndex]) {
      popup_h = document.createElement("hr");
      popup_w = document.createElement("h4");
      popup_w.textContent = "You are correct!";
      popup_w.setAttribute("style","color: blue")
      popup.appendChild(popup_h);
      popup.appendChild(popup_w);
      score = score + 1;
    }
    else{
      popup_h = document.createElement("hr")
      popup_w = document.createElement("h4")
      popup_w.textContent = "You are WRONG!"
      popup_w.setAttribute("style","color: red")
      popup.appendChild(popup_h);
      popup.appendChild(popup_w);
    } 
  // let correct/ wrong message disappear in certain amount of time!
  var timeleft = 3;
      var timerInterval = setInterval(function() {
          timeleft--;

          if(timeleft === 0) {
              popup.removeChild(popup_h);
              popup_w.textContent = "";
              clearInterval(timerInterval);
          }
      }, 150);

  // check if we've run out of questions
  if (currentQuestionIndex === questions.length-1) {
      quizEnd();
    } else {
      // add currentQustionIndex by 1, change to next question if is not the end of question list
      currentQuestionIndex = currentQuestionIndex + 1;
      //remove current question and choice buttons
      questionsEl.removeChild(question_w);
      choicesEl.removeChild(button1);
      choicesEl.removeChild(button2);
      choicesEl.removeChild(button3);
      choicesEl.removeChild(button4);
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
  clearInterval(timerId);
  finalScore.textContent= score;
  questionsEl.setAttribute("class", "hide");
  choicesEl.setAttribute("class","hide");
  endScreen.removeAttribute("class");
  endScreen.setAttribute("style","text-align:center")
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
      time--;
      timerEl.textContent = time;
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
  var name = document.getElementById("user-name").value;
  console.log("new player name: "+name);
  var Name = JSON.parse(localStorage.getItem("Name"));
  var Score = JSON.parse(localStorage.getItem("Score"))
  console.log("stored player names: "+Name);
  console.log("stored player scores: "+Score);
  if(Name !== null){
    playerName = Name;
  }
  if(Score !== null){
    playerScore = Score;
  }
  
  playerName.push(name);
  console.log("latest player names: "+playerName);
  playerScore.push(score);
  console.log("latest player scores: "+playerScore);
  localStorage.setItem("Name",JSON.stringify(playerName));
  localStorage.setItem("Score",JSON.stringify(playerScore));



  location.replace("highscores.html");
  
  /*
    @TODO: write your function code here
  */
  
}
// user clicks button to submit initials
submitBtn.onclick = saveHighscore;

// user clicks button to start quiz
startBtn.onclick = startQuiz;
choicesEl.onclick = checkAns;
submitBtn.onclick = saveHighscore;