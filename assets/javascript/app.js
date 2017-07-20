
$(document).ready(function() {
  var index = 0;
  
 // countdown timer object
  var countdownTimer = {
    time : 30,
    reset: function() {
      this.time = 30;
      $('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
    },
    start: function() {
      counter = setInterval(countdownTimer.count, 1000);  
    },
    stop: function() {
      clearInterval(counter);
    },
    count: function() {
        countdownTimer.time--;
        console.log(countdownTimer.time);
//        $('.timer').html(countdownTimer.time);
      if (countdownTimer.time >= 0) {
        $('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
      }
      else {
        index++;
        answerWrong();
        countdownTimer.reset();
        if (index < questionArray.length) {
          loadQuestion(index);
        } else {
          $(".answerchoice").hide();
          showScore();
        }
      }
    }
  };

// ---------questions for the game--------------

var correct = 0;
var wrong = 0;
var q1 = {
  question : 'Who is the alltime Assit leader in the NBA?',
  possibleAnswers : ['A. Jerry West',
         'B. Magic Johnson',
         'C. John Stockton',
         'D. Chris Paul'],
  flags : [false, false, true, false],
  answer : 'C. John Stocton'
};

var q2 = {
  question: 'What head coach has won the most Championships?',
  possibleAnswers: ['A. Pat Riley',
         'B. Phil Jackson',
         'C. Gregg Popovich',
         'D. Larry Brown'],
  flags : [false, true, false, false],
  answer : 'B. Phil Jackson'
};

var q3 = {
  question : 'How many Championships has Phil Jackson Won',
  possibleAnswers : ['A. 15',
         'B. 11',
         'C. 7',
         'D. 9'],
  flags : [false, true, false, false],
  answer : 'B. 11'
};

var q4 = {
  question : 'Which NBA player holds the record for scoring the most points in a game?',
  possibleAnswers : ['A. Wilt Chamberlin',
         'B. Larry Bird',
         'C. Kobe Bryant',
         'D. Allen Iverson'],
  flags : [true, false, false, false],
  answer : 'A. Sinclair ZX80'
};

var q5 = {
  question : 'In 1994 and 1995, which team did Hakeem Olajuwon win back-to-back titles with?',
  possibleAnswers : ['A. Cavaliers',
         'B. Rockets',
         'C. Magic',
         'D. Pistons'],
  flags : [false, true, false, false],
  answer : 'B. Rockets'
};

var q6 = {
  question : 'What is the name of the Championship trophy that is given to the winners of the NBA Finals?',
  possibleAnswers : ['A. Larry OBrien Championship Trophy',
         'B. NBA Finals Championship Trophy ',
         'C. McDonalds Championship Trophy',
         'D. Bill Russell Championship Trophy'],
  flags : [true, false, false, false],
  answer : 'A. Larry OBrien Championship Trophy'
};

var q7 = {
  question : 'Whose silhouette serves as the modern day logo of the NBA?',
  possibleAnswers : ['A. Michael Jordan',
         'B. Bill Cousy',
         'C. Jerry West',
         'D. Pat Riley '],
  flags : [false, false, true, false],
  answer : 'C. Jerry West'
};

var q8 = {
  question : 'The only Collegian selected for the Elite Dream Team that dominated teh 1992 Olympics was?',
  possibleAnswers : ['A. Shaquille oNeal',
         'B. Christian Laettner',
         'C. Chris Mullen',
         'D. Chris Webber'],
  flags : [false, true, false, false],
  answer : 'B. Christian Laettner'
};

var q9 = {
  question : 'What NBA retired player had the nickname the Mailman?',
  possibleAnswers : ['A. John Sally',
         'B. Joe Dumars',
         'C. Dennis Rodman',
         'D. Karl Malone'],
  flags : [false, false, false, true],
  answer : 'D. Karl Malone'
};

var q10 = {
  question : 'How many times has Michael Jordan won the slam dunk contest?',
  possibleAnswers : ['A. None',
          'B. 2',
          'C. 3',
          'D. 1'],
  flags : [false, true, false, false],
  answer : 'B. Designing US Army & US Navy insignia'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
  console.log(questionSelection);
  countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//  index = index++;
//  console.log(index);
//}

function setup() {
  index = 0;
  $('.question').append('<button id="startButton">Start</button>');
  $('#startButton').on('click', function() {
    $(this).hide();
    countdownTimer.start();
    loadQuestion(index);
  });
}   

function getAnswer() {

//  nextQuestion();
  $('.answerchoice').on('click', function() {
    console.log('alert', index);
    index++;
    console.log('click', index);
    $(".question").text('');
    $("#buttonA").text('');
    $("#buttonB").text('');
    $("#buttonC").text('');
    $("#buttonD").text('');
    loadQuestion();
  })
}

function answerCorrect() {
  correct++;
  alert("Correct!");
  console.log("correct");
}

function answerWrong() {
  wrong++;
  alert("Incorrect!");
  console.log("wrong");
}

function showScore() {
  $('.question').empty();
  $('.question').append("<h2><p>" + correct + " correct</p></h2>");
  $('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
  countdownTimer.stop();
  $('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
  var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
  answerChosen = 'B';
 } else if (this.id == 'buttonC') {
  answerChosen = 'C';
 } else if (this.id == 'buttonD') {
  answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
  answerCorrect();
 } else if (answerChosen == 'A') {
  answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
  answerCorrect();
 } else if (answerChosen == 'B') {
  answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
  answerCorrect();
 } else if (answerChosen == 'C') {
  answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
  answerCorrect();
 } else if (answerChosen == 'D') {
  answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
  loadQuestion(index);
 } else {
  $(".answerchoice").hide();
  showScore();
 }
});


//  $('#start').click(countdownTimer.start);
});