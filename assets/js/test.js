// set variables for id/class form html file

var timerEr = document.querySelector(".timer");
var timerTime = document.querySelector("#time");
// div for wrapper
var startWrapper = document.querySelector(".wrapper");
// var wrapperClass = document.querySelector(".start")
var startScreen = document.querySelector("#start-screen");
var startButton = document.querySelector("#start");
var questionContainer = document.querySelector("#question-container");
var questionSection = document.querySelector("#questions");
var hideQuestion = document.querySelector(".hide");
var choiceSection = document.querySelector("#choices");
var endScreen = document.querySelector("#end-screen");
var submitButton = document.querySelector("#submit");

// create question and answer array
// ref: https://www.geeksforgeeks.org/how-to-push-an-array-into-the-object-in-javascript/
var quest = [
    "1.Asdfjsldkjfvs;djf",
    "2.Bdfasdfasdfsdafas",
    "3.Cfasdfsadfasdfasd",
    "4.Ddafasdgfgasdgasd",
    "5.Esdfasdfasdfasdfd",
    "6.Fasfasdfasdfasdfa",
    ]

var ans1 = ["A.123","B.234","C.345","D.456"];
var ans2 = ["A.abc","B.bcd","C.cde","D.def"];
var ans3 = ["A.123","B.234","C.345","D.456"];
var ans4 = ["A.abc","B.bcd","C.cde","D.def"];
var ans5 = ["A.123","B.234","C.345","D.456"];
var ans6 = ["A.abc","B.bcd","C.cde","D.def"];
var ansTrue = [0,1,2,3,0,1];
var ansarray = [ans1,ans2,ans3,ans4,ans5,ans6];
    // to call the element out of object!
    // questionList.question[0]
    // ->'1.asdfjsldkjfvs;djf'


// press start button, dont display title, description, and start button

startButton.addEventListener("click",function(event){
    
    event.preventDefault();
    // here we make the title, description, and start button disappear
    startScreen.setAttribute("style","display:none");
    startquiz();


})



function startquiz(){
    var question_w = document.createElement("h2");
    questionSection.setAttribute("style","display:block; text-align: center; font-size: 50px; margin-top:30%")
    question_w.textContent = quest[0];
    questionSection.appendChild(question_w);

    // var choice1_w = document.createElement("h4");
    // var choice2_w = document.createElement("h4");
    // var choice3_w = document.createElement("h4");
    // var choice4_w = document.createElement("h4");
    // var choices = [choice1_w,choice2_w,choice3_w,choice4_w];
    var button1 = document.createElement("button");
    var button2 = document.createElement("button");
    var button3 = document.createElement("button");
    var button4 = document.createElement("button");
    var buttons = [button1,button2,button3,button4];
    //take element from a array inside array:
    //https://hackernoon.com/work-with-javascript-arrays-like-a-boss-97207a042e42
    button1.textContent = ansarray[0][0];
    button2.textContent = ansarray[0][1];
    button3.textContent = ansarray[0][2];
    button4.textContent = ansarray[0][3];
    for(var i =0; i<1;i++){
    button1.setAttribute("data-index", i );
    button2.setAttribute("data-index", i+1 );
    button3.setAttribute("data-index", i+2 );
    button4.setAttribute("data-index", i+3 );
    }

    choiceSection.appendChild(button1);
    choiceSection.appendChild(button2);
    choiceSection.appendChild(button3);
    choiceSection.appendChild(button4);
    // choice1_w.textContent = ansarray[0][0];
    // choice2_w.textContent = ansarray[0][1];
    // choice3_w.textContent = ansarray[0][2];
    // choice4_w.textContent = ansarray[0][3];
    // question_w.appendChild(choice1_w);
    // question_w.appendChild(choice2_w);
    // question_w.appendChild(choice3_w);
    // question_w.appendChild(choice4_w);
    buttons.forEach(function(element) {
        element.setAttribute("style","font-size:30px")
      });

    choiceSection.addEventListener("click", function(event) {
        var selected = event.target;
        console.log (selected);
        var index = selected.getAttribute("data-index");
        console.log("index: "+index);
        console.log("ansTrue: "+ansTrue[0])

        if (index == ansTrue[0]) {
            var popup = document.createElement("hr");
            var popup_w = document.createElement("h4");
            popup_w.textContent = "You are correct!";
            popup_w.setAttribute("style","color: blue")
            startWrapper.appendChild(popup);
            startWrapper.appendChild(popup_w);
        }else{
            var popup = document.createElement("hr")
            var popup_w = document.createElement("h4")
            popup_w.textContent = "You are WRONG!"
            popup_w.setAttribute("style","color: red")
            startWrapper.appendChild(popup);
            startWrapper.appendChild(popup_w);
        }
        
        questionSection.removeChild(question_w);
        choiceSection.removeChild(button1);
        choiceSection.removeChild(button2);
        choiceSection.removeChild(button3);
        choiceSection.removeChild(button4);

        var timeleft = 3;
        var timerInterval = setInterval(function() {
            timeleft--;

            if(timeleft === 0) {
                startWrapper.removeChild(popup);
                startWrapper.removeChild(popup_w);
                clearInterval(timerInterval);
            }
        
          }, 500);
        
    });

}

