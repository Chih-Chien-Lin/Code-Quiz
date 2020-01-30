/**
 * Function to print high scores
 * 
 * @description
 * This function will:
 *  - [ ] Retrieve the high scores
 *  - [ ] Display high scores in descending order
 * 
 * @see https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * @see https://www.w3schools.com/jsref/jsref_sort.asp
 * @see https://www.w3schools.com/jsref/met_node_appendchild.asp
 * @see https://www.w3schools.com/jsref/met_document_createelement.asp
 */
var playerScore = [];
var playerName = [];
var obj=[];
var listPlayer = document.getElementById("highscores");
var listdiv = document.createElement("div");
listPlayer.appendChild(listdiv);

function printHighscores() {

    /*
      @TODO: write your function code here
    */
   var name = JSON.parse(localStorage.getItem("Name"));
   var score = JSON.parse(localStorage.getItem("Score"));
   if(name !== null){
    playerName = name;
  }
  if(score !== null){
    playerScore = score;
  }
  for (var i = 0; i < playerName.length ; i ++){
    obj[i] = {"name":playerName[i],
              "score":playerScore[i]};
  }
  // console.log("unsoreted: "+obj);
  obj.sort(function(a,b){
    // return b.score - a.score;
    if(a.score > b.score){
      return -1;
    }else{
      return 1;
    }
  });
console.log(obj);
  for(var i = 0 ; i < obj.length; i++){
    var pName = obj[i]["name"];
    var pScore = obj[i]["score"];
    var li = document.createElement("li");
    li.textContent = pName+" "+pScore;
    listdiv.appendChild(li);
  }

  }
  
  
  /**
   * Function to clear high scores
   * 
   * @description
   * This function will:
   *  - [ ] Clear all the high scores
   *  - [x] Reload the window
   * 
   * @see https://www.w3schools.com/jsref/prop_win_localstorage.asp
   */
  function clearHighscores() {
  
    /*
      @TODO: write the rest of your function code here
    */
   localStorage.removeItem("Name")
   localStorage.removeItem("Score")
    // reload window
    window.location.reload();
  
  }
  
  
  // user clicks button to clear high scores
  document.getElementById("clear").onclick = clearHighscores;
  
  // run function when page loads
  printHighscores();
  