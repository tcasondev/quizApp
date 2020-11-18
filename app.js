/**
 * Example store structure
 */
const store = {
  questions: [
    {
      question: 'Reject a Deferred object and call any failCallbacks with the given context and args.',
      answers: [
        'deferred.state()',
        'deferred.rejectWith()',
        '.deferred()',
        '.fail()'
      ],
      correctAnswer: 'B'
    },
    {
      question: 'Check the current matched set of elements against a selector, element, or jQuery object and return true if at least one of these elements matches the given arguments.',
      answers: [
        '.isTarget()',
        '.check()',
        '.is()',
        '.isThis'
      ],
      correctAnswer: 'C'
    },
    {
      question: ' Return a number representing the current time.',
      answers: [
        'jQuery.now()',
        'time.deltaTime',
        'jQuery.time()',
        '.present()'
      ],
      correctAnswer: 'A'
    },
    {
      question: 'Encode a set of form elements as a string for submission.',
      answers: [
        '.string()',
        '.text()',
        '.toString()',
        '.serialize()'
      ],
      correctAnswer: 'D'
    },
    {
      question: 'Remove a handler from the event for all elements which match the current selector, based upon a specific set of root elements.',
      answers: [
        '.unbind()',
        '.undelegate()',
        '.remove()',
        '.unwrap()'
      ],
      correctAnswer: 'B'
    },
    {
      question: 'Selects all elements that are visible.',
      answers: [
        '.vis()',
        '.selectVisible()',
        '.visibleElements()',
        ':visible'
      ],
      correctAnswer: 'D'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

//renders opening screen


function startScreen(){
  
  return $('.start-area').html(`<form class="start-screen">
    <h2>Ready to begin?</h2>
    <p>You will see a series of jQuery API definitions and will select the answer which best matches it.</p>
    <button type="submit" id="submit" autofocus>Let's Go</button>
  </form>`);
}

function render(){
  $('#app').html(headerUi());
  
  console.log('render start');
  if(store.quizStarted === false){
    startScreen();
    $('.quiz-area').hide();

  }
  else {
    console.log('q1')
    renderQuestion();
    $('.quiz-area').show()
    $('.start-area').hide()

  }
  
}

function renderQuestion(){
  $('.quiz-area').html( 
    `<div class="questionPage">
    <form class="question-screen">
    <p>#${store.questionNumber + 1}</p>
    <h2>${store.questions[store.questionNumber].question}</h2>
    <ul>
      <li>
        <input type="radio" id="A" name="answer" value="A" autofocus required>
          <label for="A">${store.questions[store.questionNumber].answers[0]}</label><br>
      </li>
      <li>
        <input type="radio" id="B" name="answer" value="B">
          <label for="B">${store.questions[store.questionNumber].answers[1]}</label><br>
      </li>
      <li>
        <input type="radio" id="C" name="answer" value="C">
          <label for="C">${store.questions[store.questionNumber].answers[2]}</label>
      </li>
      <li>
        <input type="radio" id="D" name="answer" value="D">
          <label for="D">${store.questions[store.questionNumber].answers[3]}</label>
      </li>
    </ul>  
    <button id="questionSubmit" type="button">Submit</button>
    <p>Points: ${store.score} out of ${store.questions.length}</p>
  </form>
  <form class="feedback-1" id="feedback-1">
      <h2>Well Done!</h2>
      <p>You got it!</p>
      <button type="button" id="nextQuestion">Next</button>
  </form>
  <form class="feedback-2" id="feedback-2">
      <h2>Oh man!</h2>
      <p>You got it wrong! The Correct answer was ${store.questions[store.questionNumber].correctAnswer} </p>
      <button type="button" id="nextQuestion">Next</button>
    </form>
    </div>`);

    $("#feedback-1").hide();
    $('#feedback-2').hide();
  console.log('question')
}

function submit(){
   $('.quiz-area').on('click', '#questionSubmit', function (event) {
      
      let answer = $('input:checked').val();
      let correct = store.questions[store.questionNumber].correctAnswer;
      if(answer != undefined){
       if(answer === correct){
        $('#questionSubmit').hide();
        $('#feedback-1').show();
        store.score++;
      } else {
        $('#questionSubmit').hide()
        $('#feedback-2').show()
      }
      store.questionNumber++;
      }
    })
}

function nextQuestion(){
  $('.quiz-area').on('click', '#nextQuestion', function (event){
    if((store.questionNumber) >= store.questions.length){
      renderGameOver();
      console.log('gameover');
    } else {
      renderQuestion();
      console.log("moving on");
    }
  })
}

function startQuiz(){
 $('.start-area').submit(function(event){
  event.preventDefault()
  console.log('starting')
 
  store.quizStarted = true;
  render();
})
}

function renderGameOver(){
  $('.quiz-area').html(`<form class="start-screen">
      <h2>Retry?</h2>
      <p>Your score was: ${store.score}
      <button type="submit">Restart</button>
    </form>
    </div>`)
}

function headerUi(){
  return `
  <header>
    <h1>jQuery API Documentation Quiz</h1>
  </header>
<main>
  
  
  `
}

function generateHtml(){
$('#mainBody').html('<div id="app"></div> <div class ="start-area"></div> <div class="quiz-area"></div>')
}

$(function main(){
  generateHtml()
  render();
  startQuiz();
  submit();
  nextQuestion();
  
  })

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)